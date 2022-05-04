import { CloseButton } from "../CloseButton";
import bugImage from '../../assets/bug.png'
import ideaImage from '../../assets/idea.png'
import thoughtImage from '../../assets/thought.png'
import { useState } from "react";

const feedbackTypes={
    BUG: {
        title:'problema',
        image: {
            source: bugImage,
            alt: 'imagem de um inseto'
    },
},

    IDEA:{
        title:'ideia',
        image:{
            source:ideaImage,
            alt:'imagem de uma lampada'
        }
    },

    OTHER:{
        title:'outro',
        image:{
            source:thoughtImage,
            alt:'imagem de um balao de pensamento'
        },

    },

};

type feedbackType = keyof typeof feedbackTypes

export function WidgetForm(){
    const [feedbackType , setFeedbackType] = useState<feedbackType | null>(null)
    return(
        <div 
  className="bg-zinc-900 p-4
  relative rounded-2xl mb-4 flex
  flex-col items-center shadow-lg 
  w-[calc(100vw-2rem)] md:w-auto"
  >
    <header>
      <span className="text-sl leading-6">Deixe seu Feedback</span>
      <CloseButton />
    </header>

    {!feedbackType ? (
      <div className="flex py-8 gap-2 w-full">
      { Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-violet-700 focus:border-violet-700 focus:outline-none"
            onClick={ () => setFeedbackType(key as feedbackType) }
            type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        }) }
      </div>

    )
      : (
        <h3>Ta safe</h3>
      )
  }
            hello
           <footer className="text-xs text-neutral-50">
                feito com ❤️ por vivi.code
           </footer>
        </div>
    )
}