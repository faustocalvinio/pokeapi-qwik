import { type PropFunction, Slot, component$, useStylesScoped$ } from '@builder.io/qwik';
import ModalStyles from './modal.css?inline';


interface Props {
    showModal: boolean;
    closeFn: PropFunction< () => void >
}

export const Modal = component$( ({showModal, closeFn}:Props) => {

    useStylesScoped$(ModalStyles);



    return (
        // hidden https://www.section.io/engineering-education/creating-a-modal-dialog-with-tailwind-css/
        <div 
            class={ showModal ? 'modal-background' : 'hidden' } 
            id='modal-content'
            onClick$={(e)=>{
                const elementID = (e.target as HTMLDivElement).id
                if (elementID === 'modal-content') closeFn();
                // closeFn();
            }}           
        
        >
            <div class="modal-content">                
                <div class="mt-3 text-center">                    
                    <h3 class="modal-title px-4">
                        <Slot name="title" />                     
                    </h3>
                    <div class="mt-2 px-7 py-3">
                        <div class="modal-content-text">
                            <Slot name='content'/>
                        </div>
                    </div>
                    
                    <div class="items-center px-4 py-3">
                        <button
                            id="ok-btn"
                            class="modal-button"
                            onClick$={closeFn}
                        >
                            Cerrar
                        </button>
                    </div>                   
                </div>
            </div>
        </div>
    )
});