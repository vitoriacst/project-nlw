import { ArrowLeft} from "phosphor-react";
import { FormEvent, useState } from "react";
import { feedbackType,feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";
import { ScreenShotButton } from "../ScreenShotButton";


interface FeedbackContentStepProps{
    feedbackType:feedbackType;
    onFeedbackRestartRequested:()=>void;
}

export function FeedbackContentStep({feedbackType, onFeedbackRestartRequested}: FeedbackContentStepProps){
    const [screenShot,setScreenShot]=useState<string|null>(null)
    const [comment ,setComment] = useState('')
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    function handleSubmitFeedback(event:FormEvent){
        event.preventDefault()
        console.log(screenShot);
        console.log(comment);
    }
    return(
        <>
            <header>
                <button 
                    type="button" 
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
                    <ArrowLeft weight="bold" 
                    className="w-4 h-4"
                    onClick={onFeedbackRestartRequested}
                    />
                </button>
                <span className="text-sl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"/> 
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>
            <form 
                className="my-4 w-full" 
                onSubmit={handleSubmitFeedback}>
                <textarea 
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-violet-700 focus:ring-violet-700 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin" 
                    placeholder="conte com detalhes oque esta acontecendo..."
                    onChange={event=>setComment(event.target.value)}
                />
                <footer className="flex gap-2 md-2">
                    <ScreenShotButton 
                        screenshot={screenShot}
                        onScreenShotTook={setScreenShot}
                    />
                    <button
                        type="submit"
                        className="p-2 bg-violet-700 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                        disabled={comment.length === 0}
                    >
                        Enviar Feedback
                    </button>
                </footer>
            </form>
        </>
  
    )
}