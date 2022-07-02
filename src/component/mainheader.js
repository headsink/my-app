import React from 'react'
import menuIcon from './assets/menu.svg'

const Mainheader = () => {

    return (
        <div className="w-screen h-7 z-10 bg-violet-400 fixed drop-shadow-lg">
            <div className='px-2 flex justify-between items-center w-full'> - </div>
            <img src={menuIcon} className="w-7 " alt="Main Menu" />
        </div>
    );
}

export default Mainheader