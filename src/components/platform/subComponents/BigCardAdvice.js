import React from 'react';
import { Link } from 'react-router-dom';
import cardImage from '../../../assets/imgs/aviso.img.png';
import '../../../css/platform/components/BigCard.css'

const BigCardAdvice = () => {
    return (
        <div className='c-big-card'>
            <div className='big-card-container'>
                <div>
                    <img src={cardImage} alt="advice-img" />
                </div>
                <div className='bc-c-text-container'>
                    <h1 className='regular-16 fw500'>Avisos</h1>
                    <br />
                    <p className='regular-14'>Mantente al tanto de todo lo relevante dentro de Plataforma ENARM para que tengas una buena experiencia.</p>
                    <br />
                    <p className='regular-14'>Dentro de Avisos encontrarás:</p>
                    <ul>
                        <li><span className='regular-14'>Avisos Legales.</span></li>
                        <li><span className='regular-14'>Reportar sesiones o contraseñas.</span></li>
                        <li><span className='regular-14'>Preguntas frecuentes.</span></li>
                        <li><span className='regular-14'>Formas de contacto, y mucho más.</span></li>
                    </ul>
                    <br />
                    <Link className="regular-14 sky-blue noDecor" to="/u/planes/aviso_novedades">Ver todos los avisos</Link>
                </div>
            </div>
        </div>
    )
}

export default BigCardAdvice;