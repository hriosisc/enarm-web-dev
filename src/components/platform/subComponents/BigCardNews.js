import React from 'react';
import { Link } from 'react-router-dom';
import cardImage from '../../../assets/imgs/novedades-img.png';
import '../../../css/platform/components/BigCard.css'

const BigCardNews = () => {
    return (
        <div className='c-big-card'>
            <div className='big-card-container'>
                <div> 
                    <img src={cardImage} alt="advice-img" />
                </div>
                <div className='bc-c-text-container'>
                    <h1 className='regular-16 fw500'>Novedades</h1>
                    <br />
                    <p className='regular-14'>Descubre las fechas en que sube el nuevo material a Plataforma ENARM.</p>
                    <ul>
                        <li><span className='regular-14'><span className='fw500'>18 de octubre</span> para curso en <span className='blue fw500'>11 meses.</span></span></li>
                        <li><span className='regular-14'><span className='fw500'>1 de noviembre</span> para curso en <span className='blue fw500'>10 meses.</span></span></li>
                        <li><span className='regular-14'><span className='fw500'>1 de diciembre</span> para curso en <span className='blue fw500'>9 meses.</span></span></li>
                        <li><span className='regular-14'><span className='fw500'>1 de enero</span> para curso en <span className='blue fw500'>8 meses.</span></span></li>
                        <li><span className='regular-14'><span className='fw500'>1 de febrero</span> para curso en <span className='blue fw500'>7 meses.</span></span></li>
                        <li><span className='regular-14'><span className='fw500'>1 de marzo</span> para curso en <span className='blue fw500'>6 meses.</span></span></li>
                        <li><span className='regular-14'><span className='fw500'>1 de abril</span> para curso en <span className='blue fw500'>5 meses...</span></span></li>
                    </ul>
                    <br />
                    <Link className="regular-14 sky-blue noDecor" to="/u/planes/aviso_novedades">Ver todos los avisos</Link>
                </div>
            </div>
        </div>
    )
}

export default BigCardNews;