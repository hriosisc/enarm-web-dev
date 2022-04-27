import React, { useContext } from 'react'
import NavBar from '../NavBar'; 
import Modal from '../Modal';
import WidthContext from '../../contexts/WidthContext';

const AccessLayout = ({ children }) => {
     
    const width = useContext(WidthContext); 

    return (
        <>
            <NavBar breakpoint={width} />
            <main className={width}>
                { children }      
            </main>
            <Modal breakpoint={width}/>    
        </>
    )
}

export default AccessLayout;