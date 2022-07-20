import React from 'react';

const BreadCrumbs = (props) => {
    return (
        <div className='breadcrumb'>
            <h3 className='gray-textColor regular-14'>Sitio Plataforma Enarm</h3>
            <span className='first-level'>/</span>
            <h3 className={`regular-14 ${props.currentSubPage ? "gray-textColor" : ""}`}>{props.currentPage}</h3>
            {props.currentSubPage &&
                <>
                    <span>/</span>
                    <h3 className='regular-14'>{props.currentSubPage}</h3>
                </>
            }
        </div>
    )
}

export default BreadCrumbs;