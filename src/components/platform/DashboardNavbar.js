import React from 'react';
import '../../css/platform/components/NavbarHeader.css';
import userIcon from '../../assets/icons/platform/default-user-icon.png'

const DashboardNavbar = () => {
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
                    <div className="user-info">
                        <img src={userIcon} alt="user-img" className="user-icon" />
                        <span className="user-name">Nombre del usuario</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default DashboardNavbar;