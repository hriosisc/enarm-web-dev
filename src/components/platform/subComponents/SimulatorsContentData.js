import React, { useContext, useState } from 'react'
import { ActualGuideContext } from '../../../contexts/platform/CurrentGuideContext'
import '../../../css/platform/components/SimulatorsContent.css';

const SimulatorsContentData = () => {

    const { guideData } = useContext(ActualGuideContext);

    const simulatorList = [
        { pos: 1, isActive: false },
        { pos: 2, isActive: false },
        { pos: 3, isActive: false }
    ];

    const [simulatorInfo, setSimulatorInfo] = useState(simulatorList);

    const handleToggleSimulatorBodies = (e, i) => {
        setSimulatorInfo(() => {
            const newList = simulatorList.map((list, index) => {
                if (index === i) {
                    return { ...list, isActive: !list.isActive }
                }
                return { ...list }
            })
            return newList;
        });
    }


    return (
        <div className='simulator-container'>
            {
                simulatorInfo.map((simulator, index) => {
                    return (
                        <div className='i-simulator' key={index}>
                            <div className='simulator-head'>
                                <button onClick={(e) => handleToggleSimulatorBodies(e, index)} >
                                    <i className={`material-icons button-icon ${simulatorInfo[index].isActive ? "open" : "closed"}-mode`}>chevron_right</i>
                                    <span className='regular-14 bold'>Simulador {guideData.label} #{simulator.pos}</span>
                                    <span className='regular-14'>Practica en nuestro simulador</span>
                                </button>
                            </div>
                            {
                                simulatorInfo[index].isActive && (

                                    <div className="simulador-body">
                                        <ul className='list-instructions'>
                                            <li><span className='regular-14'>1. Simulador con <b>50 Preguntas</b></span></li>
                                            <li><span className='regular-14'>2. Tiempo para resolverlo: 1 hora 15 minutos</span></li>
                                            <li><span className='regular-14'>3.  🔥 5 intentos permitidos para resolverlo</span></li>
                                            <li><span className='regular-14'>4. Conoce tus resultados al finalizar y presionando Finish Quiz</span></li>
                                        </ul>
                                        <div className='buttons-utility'>
                                            <button><span className='regular-14 white'>Comenzar Simulador</span></button>
                                            <button><span className='regular-14'>Ir al panel de resultados</span></button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SimulatorsContentData