import React, { useState, useEffect } from 'react';
import drImage from '../../assets/imgs/Dres/sepidbaft.ir6_.png'; 
import '../../css/about_us/Hero2.css';

const Hero2 = ({ size, ismobile }) => {
  
    setTimeout(() => {
        const items = document.querySelectorAll(".reveal-load");
        items.forEach(item => {
            item.classList.add("active");
        })
        
        const body = document.querySelector("body");
        body.scrollTop = 0;
    }, 100); 

    const [mobileDevice, setMobileDevice] = useState(true);

    useEffect(() => {
        const isMobileDevice = () => {
            if(ismobile === 'true') {
                setMobileDevice(true)
                return;
            }
            setMobileDevice(false);
            return;
        }

        isMobileDevice(); 
    }, [ismobile]);
    

    return (
        <div className={`hero-2 ${size}`} >
            <div className="hero-2-container">
                <div className="container-header">
                    <div className="subcontainer">
                        <h1 className={`${mobileDevice || size === 'lg' ? 'title text-center' : 'bold-47'} reveal-load`}>
                            Conoce el curso Online #1, el más completo y exitoso de todos.
                        </h1>
                        <p className={`${mobileDevice || size === 'lg' ? 'regular-14 text-center' : 'regular-16'} reveal-load`}>
                            Integrado por un Equipo de más de 20 Médicos Especialistas, de casi todas las áreas de la medicina, que te llevarán de la mano para aprobar tu ENARM a la primera.
                        </p>
                        <button className='button-rounded-blue-48 reveal-load'>
                            <span className="button-text">
                                Inscribete Ahora
                            </span>
                        </button>
                    </div>
                </div>
                <div className="container-body">
                    <div className="image-container reveal-load">
                        <img src={drImage} alt="hero-2-img" />
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Hero2;