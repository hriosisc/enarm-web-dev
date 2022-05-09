import React, { useContext } from 'react'
import NavBar from '../NavBar';
import Modal from '../Modal';
import WidthContext from '../../contexts/WidthContext';

const AccessLayout = ({ children }) => {

    const width = useContext(WidthContext);

    const isMobile = () => {
        if(['xs', 'sm', 'md'].includes(width)) return true;
        if(['lg', 'xl', 'xxl'].includes(width)) return false;
    }

    return (
        <>
            <NavBar width={width} ismobile={isMobile().toString()} />
            <main className={width}>
                { children }
            </main>
            <Modal width={width} ismobile={isMobile().toString()} />
        </>
    )
}

export default AccessLayout;