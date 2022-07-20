import React from 'react';
import '../../css/platform/components/DashboardContainerHead.css';
import imgMonisStar from '../../assets/imgs/monis/PicsArt_09-18-11.18.png'
import BreadCrumbs from './subComponents/BreadCrumbs';

const DashboardContainerHead = (props) => {
    return (
        <div className='c-dashboard-header '>
            <BreadCrumbs
            currentPage={props.currentPage}
            currentSubPage={props.currentSubPage} 
            />
            <h1 className='regular-20'>Mesa de Trabajo</h1>
            <div className='heading-left'>
                <div className='content pt5 pb5'>
                    <div className='layout-blocks horizontal gap24'>
                        <img src={imgMonisStar} alt="monis_star" />
                        <div className='layout-blocks vertical'>
                            <h1 className='regular-20'>Hola, [Nombre de Usuario] tenemos todo listo!</h1>
                            <h3 className='regular-14 gray-textColor'>Bienvenido a Plataforma ENARM</h3>
                        </div>
                    </div>
                    <div className='layout-blocks horizontal gap64'>
                        <div className='layout-blocks vertical alignItem-end'>
                            <h3 className='regular-14 gray-textColor'>Especialidades</h3>
                            <h1 className='roboto-20'>24</h1>
                        </div>
                        <div className='layout-blocks vertical alignItem-end'>
                            <h3 className='regular-14 gray-textColor'>Simuladores</h3>
                            <h1 className='roboto-20'>86</h1>
                        </div>
                        <div className='layout-blocks vertical alignItem-end'>
                            <h3 className='regular-14 gray-textColor'>Recursos</h3>
                            <h1 className='roboto-20'>2,233</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardContainerHead;      