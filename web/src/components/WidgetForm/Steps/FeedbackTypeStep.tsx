import { feedbackTypes,feedbackType } from ".."
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps{
    typeFeedback:(type:feedbackType)=>void;

}

export function FeedbackTypeStep({typeFeedback}:FeedbackTypeStepProps){

    return(
        <>
        <header>
        <span className="text-sl leading-6">Deixe seu Feedback</span>
        <CloseButton />
      </header>
        <div className="flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-violet-700 focus:border-violet-700 focus:outline-none"
              onClick={ () => typeFeedback(key as feedbackType) }
              type="button"
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            )
          }) }
        </div>
        </>
  
    )
}