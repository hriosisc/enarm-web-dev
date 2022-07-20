import React from 'react';
import { Link } from 'react-router-dom';

const StudyCalendar = () => {
    return (
        <div className='calendar'>
            <div className="calendar-head">
                <h3 className='semibold-16'>Calendario de Estudio</h3>
            </div>
            <div className="calendar-body">
                <span className='regular-14 gray'>Ejemplo Calendario Mensual</span>
                <h1 className='semibold-24' style={{marginTop: "4px", marginBottom: "8px"}}>Alcanza tus metas con el siguiente calendario.</h1>
                <p className='regular-14'>El realizarlo te permitirá tener una organización, programar tus días de estudio y crear un hábito de estudio.</p>
                <button>
                    <Link className='noDecor regular-14 black' to="#" target="_blank">Descargar Calendario</Link>
                </button>
            </div>
        </div>
    )
}

export default StudyCalendar;