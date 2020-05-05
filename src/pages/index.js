import React from 'react'
import { Helmet } from 'react-helmet'
import './styles.css'

import Logo from '../components/Logo'
import BtnWhatssap from '../components/BtnWhatssap'
import Footer from '../components/Footer'

import foto1 from '../assets/image1.png'
import selo from '../assets/image 2.png'

import {graphql, useStaticQuery} from 'gatsby'


const Header =  ({children}) => {
    return (
        <div className="p-4 bg-indigo-800 sm:flex sm:justify-between items-center">
            {children}
        </div>
    )
}

const Hero = () => {
    
    return (
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                <div className="p-8">
                    <h2 className="font-bold text-2xl">Móveis Planejados</h2>
                    <p className="text-xl">Comerciais e residências para todos ambientes</p>
                    <p className="text-gray-700">Atendemos Pouso Alegre e toda região</p>
                </div>
                <div>
                    <img src={foto1} alt="Móveis"/>
                </div>
        </div>
    )
}

const Index = () => {

    const {site} = useStaticQuery(graphql`
        query Myquery {
            site {
                    siteMetadata{
                        title
                    }
            }
        }
    `)

    const selos = [1,2,3,4]
    const projetos = [1, 2, 3, 4, 5 , 6]
    return(
        <div>
            <Helmet>
                <title>{site.siteMetadata.title}</title>
            </Helmet>
            {/* <pre>
                {JSON.stringify(site, null, 2)}
            </pre> */}
            <Header>
                <Logo />
                <div>
                    <BtnWhatssap />
                </div>
            </Header>
            <Hero />
            <div className="flex flex-col m-2 items-center sm:flex-row justify-around">
                {
                    selos.map(() => {
                        return <img className="my-4" src={selo} />
                    })
                }
            </div>
            <div>
                <h2 className="p-8 py-2 text-2xl font-bold">Projetos de Móveis Planejados</h2>
                <div className='flex flex-wrap'>
                {projetos.map(() => {
                    return (
                        <div className='max-w-sm'>
                            <div className='m-2 rounded shadow-lg'>
                            <img src={foto1} alt="Projeto 1"/>
                            <div className='px-6 py-4'>
                                <p className="font-bold text-xl mb-2">Projeto</p>
                                <p>Descrição</p>
                            </div>  
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Index