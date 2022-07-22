import React, { useState } from 'react';
import '../../css/platform/components/NavbarHeader.css';
import userIcon from '../../assets/icons/platform/default-user-icon.png'

const DashboardNavbar = () => {

    const [usermodal, setUserModal] = useState(false);
 
    return (
        <header className='platform-el'>
            <nav className='header-nav'>
                <div className='navbar-tools'>
                    <div className="search-tag">
                        <button>
                            <i className="material-icons-outlined">search</i>
                        </button>
                    </div>
                    <div className="about-tag">
                        <button>
                            <i className="material-icons-outlined">help_outline</i>
                        </button>
                    </div>
                    <div className="user-info" onMouseEnter={() => setUserModal(true)}>
                        <img src={userIcon} alt="user-img" className="user-icon" />
                        <span className="user-name">Nombre del usuario</span>
                    </div>
                    {
                        usermodal && (
                            <div className='u-modal-user' onMouseLeave={()=> setUserModal(false)}>
                                <div className="u-modal-container">
                                    <div>
                                        <i className="material-icons">settings</i>
                                        <span className='roboto-14'>Mi cuenta</span>
                                    </div>
                                    <div>
                                        <i className="material-icons">logout</i>
                                        <span className='roboto-14'>Cerrar Sesión</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </nav> 
        </header>
    )
}

export default DashboardNavbar;