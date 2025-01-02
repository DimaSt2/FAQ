'use client'

import Accordion_Item from './Accordion_Item';
import Questions from './Questions';

const Accordion_Items = () => {
    
    return (
        <>
          <div className="flex flex-col w-[768px] gap-xl">
             {Questions.map((elem, index) => {
                 return <Accordion_Item 
                    questions = {elem}
                    key = {elem.id}
                    // onClick= {handleClick}
                    // classNames = {close}
                   />    
             })}
          </div>
        </>
    );
};

export default Accordion_Items;