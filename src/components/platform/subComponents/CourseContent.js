import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import alertIcon from '../../../assets/icons/alert.png';
import { CurrentWeekContext } from '../../../contexts/platform/CurrentWeekStudyContext';
import ResourceContainerData from './ResourceContainerData';

const CourseContent = (props) => {

    const navigate = useNavigate();

    const [resume, setResume] = useState(false);

    const { currentWeek } = useContext(CurrentWeekContext);

    return (
        <div className='c-course-content'>
            <div className="coursecontent-header">
                <div className="cc-head">
                    <div>
                        <i className="material-icons button-back" onClick={() => navigate(-1)}>arrow_back</i>
                        <span className='medium-20'>{props.class}</span>
                    </div>
                    <span className='regular-14 gray-textColor'>Contenido</span>
                </div>
                <div className="cc-body">
                    <p className='regular-14'>
                        Bienvenido al contenido de {props.class}. A continuación tendrás acceso a los contenidos que tenemos preparados especialmente para ti.
                        Es importante que revises cada uno de ellos en el orden en el que se presentan para asegurar el éxito de este curso.
                    </p>
                </div>
            </div>
            <div className='cc-content resume'>
                <div className="cc-head" onClick={() => setResume(!resume)}>
                    <div>
                        <i className="material-icons">chevron_right</i>
                        <span className='regular-14 bold'>1. Resúmenes</span>
                    </div>
                    <div>
                        <p className='regular-14'>Resúmenes, Flash cards y Tips</p>
                        <span className='regular-14 gray-textColor'>130 recursos</span>
                    </div>
                </div>
                {
                    resume && (
                        <div className="cc-body">
                            <ResourceContainerData title={currentWeek.class}/>
                        </div>
                    )
                }
            </div>

            <div className='cc-content graphs'>
                <div className="cc-head">
                    <div>
                        <img src={alertIcon} alt="alert" />
                        <span className='regular-14 bold'>2. Gráficos</span>
                    </div>
                    <div>
                        <p className='regular-14'>Antes de continuar, asegúrate de tener tus <b className='regular-14 bold'>gráficos</b></p>
                        <span className='regular-14 gray-textColor'>130 recursos</span>
                    </div>
                </div>
            </div>

            <div className='cc-content videos'>
                <div className="cc-head">
                    <div>
                        <i className="material-icons">chevron_right</i>
                        <span className='regular-14 bold'>3. Video-clases</span>
                    </div>
                    <div>
                        <p className='regular-14'>Repasa tus gráficos con las video-clases</p>
                        <span className='regular-14 gray-textColor'>5 video-clases</span>
                    </div>
                </div>
            </div>

            <div className='cc-content simulator'>
                <div className="cc-head">
                    <div>
                        <i className="material-icons">chevron_right</i>
                        <span className='regular-14 bold'>4. Simulador Infecto</span>
                    </div>
                    <div>
                        <p className='regular-14'>Practica en nuestro simulador</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseContent