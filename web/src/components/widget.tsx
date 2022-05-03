import { ChatTeardropDots } from "phosphor-react"
import { Popover } from "@headlessui/react"

export function Widget(){
    return(
        <Popover className="absolute bottom-4 right-4">
            <Popover.Panel>hello friend</Popover.Panel>
            <Popover.Button 
            className="bg-violet-500 rounded-full px-3 h-12 flex items-center text-white group">
            <ChatTeardropDots className="w-6 h-6 text-white"/>
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                <span className="pl-2">
                    feedback
                </span>
            </span>
        </Popover.Button>
        </Popover>
    )
}