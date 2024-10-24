import React from 'react';

const ButtonContainer = () => {
    return (
        <div>
            <div className="flex justify-between items-center px-4 mt-12">
                <p className='font-extrabold text-xl'>Available Players</p>
                <div className="border-4 rounded-2xl bg-red-500 p-2">
                    <button className='cursor-pointer py-3 px-4 rounded-lg  bg-none'>Available</button>
                    <button className='cursor-pointer py-3 px-4 rounded-lg  bg-none'>Selected({0})</button>
                </div>
            </div>
        </div>
    );
};

export default ButtonContainer;