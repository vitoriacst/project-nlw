import {Popover} from '@headlessui/react'
import { X } from 'phosphor-react'

export function CloseButton(){
    return(
        <Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100 " title="fechar formulario">
            <X weight='bold' className='h-4 w-4'/>
        </Popover.Button>
    )
}