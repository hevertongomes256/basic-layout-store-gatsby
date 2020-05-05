import React from  'react'

import wa from '../assets/logo-wp.png'

const BtnWhatssap = () => {
    return (
        <div>
        <div className="bg-white shadow rounded px-5 py-2 flex flex-col items-center mt-6 sm:mt-0 sm:flex-row">
            <div className="ml-2 content-center">
                <img src={wa} alt="logo whatssap"/>
                <h3 className="font-bold text-2xl">Orçar seu Projeto</h3>
                <p className="text-xs"> Projeto e orçameno sem compromisso</p>
                <p className="font-bold">(84) 9999-9999</p>
            </div>
        </div>
        </div>
    )
}

export default BtnWhatssap