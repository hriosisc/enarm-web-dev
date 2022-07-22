import React from 'react';

const StudyMethod = () => {
    return (
        <div className='c-studymethod-container'>
            <div className="c-studymethod-head">
                <h3 className='semibold-16'>Método de Estudio</h3>
            </div>
            <div className="c-studymethod-body">
                <span className='regular-14 gray-textColor'>¡Aprendizaje de calidad!</span>
                <div className='methods'>
                    <div>
                        <span className='regular-16'>Resumenes</span>
                        <span className='regular-14 gray-textColor'>Consulta el contenido.</span>
                    </div>
                    <div>
                        <span className='regular-16'>Gráficos</span>
                        <span className='regular-14 gray-textColor'>Procesa tu aprendizaje.</span>
                    </div>
                    <div>
                        <span className='regular-16'>Video-clases</span>
                        <span className='regular-14 gray-textColor'>Repasa la información.</span>
                    </div>
                    <div>
                        <span className='regular-16'>SimuladorPRO</span>
                        <span className='regular-14 gray-textColor'>Practica en tiempo real.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudyMethod;