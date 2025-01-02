'use client'

import { useState, useRef } from 'react';

const svgOpen = 'M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
const svgClose = "M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z";

const open = {
    answer: 'h-[96px] opacity-100',
    svgChange: svgOpen,
    gap: 'gap-y-[8px]',
    bg:'bg-primary_hover'
};

const close = {
    answer: 'h-[0] opacity-0',
    svgChange: svgClose,
    gap: 'gap-y-[0]',
    bg:'white'
};

let classNames = {...close};

const Accordion_Item = ( { questions }  ) => {
    
    let [isOpen, setOpen] = useState(false);

    function handleClick () {
        setOpen(isOpen = !isOpen);
        isOpen ? classNames = {...open} : classNames = {...close};
    }

    const answerHeight = useRef(null);

    // console.log(answerHeight)

    return (
        <>
        <div onClick={handleClick} className={classNames.gap + ' ' + classNames.bg + ' ' + 'flex p-4xl gap-x-[24px] flex-wrap rounded-2xl cursor-pointer'}>
                <div >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={classNames.svgChange} stroke="#98A2B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>              
                </div>
                <div className='text-primary-900 font-[500] text-[18px] leading-lg'>{questions.question}</div>
                <div ref={answerHeight} className={classNames.answer + ' ' +'transition-all duration-300 text-tertiary-600 w-[100%] pl-[48px] font-[400] text-md leading-md'}>{questions.answer}</div>
        </div>
        </>
    );
};

export default Accordion_Item;