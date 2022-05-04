import { CloseButton } from "../CloseButton";
import bugImage from '../../assets/bug.png'
import ideaImage from '../../assets/idea.png'
import thoughtImage from '../../assets/thought.png'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccesStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes={
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

export type feedbackType = keyof typeof feedbackTypes

export function WidgetForm(){
    const [feedbackType , setFeedbackType] = useState<feedbackType | null>(null)
    const[feedbackSend,setFeedbackSend]=useState(false)

    function handleRestartFeddback(){
        setFeedbackType(null);
        setFeedbackSend(false)
    }

    return(
        <div 
  className="bg-zinc-900 p-4
  relative rounded-2xl mb-4 flex
  flex-col items-center shadow-lg 
  w-[calc(100vw-2rem)] md:w-auto"
  >
     {feedbackSend ? (<FeedbackSuccesStep onFeedBackRestartRequest={handleRestartFeddback}/>):
        ( <>
            {!feedbackType ? (
                <FeedbackTypeStep typeFeedback={setFeedbackType}/>):
                 (<FeedbackContentStep 
                    feedbackType={feedbackType} 
                    onFeedbackRestartRequested={handleRestartFeddback}
                    onFeedbackSend={()=>setFeedbackSend(true)}
                />
            )}
        </>
     )}
           <footer className="text-xs text-neutral-50">
                feito com ❤️ por vivi.code
           </footer>
        </div>
    )
}