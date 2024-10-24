import React from 'react';


const ButtonContainer = ({handleToggle , isActive}) => {

    return (
        <div>
            <div className="flex justify-between items-center px-4 mt-14">
                <p className='font-extrabold text-xl'>{isActive.player ? "Available Players" : `Selected Players ${0}/${6}`}</p>
                <div className="border-4 rounded-2xl bg-yellow-500 p-2">
                    <button onClick={()=>{handleToggle('Available')}} className={`${isActive.player ? 'cursor-pointer btn py-3 px-4 rounded-lg bg-white border-none shadow-none' : 'cursor-pointer btn py-3 px-4 rounded-lg bg-transparent border-none hover:bg-transparent shadow-none'}`}>Available</button>
                    <button onClick={()=>{handleToggle('Remaining')}} className={`${isActive.player ? 'cursor-pointer btn py-3 px-4 rounded-lg bg-transparent border-none hover:bg-transparent shadow-none' : 'cursor-pointer btn py-3 px-4 rounded-lg bg-white border-none shadow-none'}`}>Selected({0})</button>

                </div>
            </div>
        </div>
    );
};

export default ButtonContainer;