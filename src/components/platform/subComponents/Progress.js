import React from 'react'

const Progress = () => {
    return (
        <div className='progress'>
            <div className="progress-head">
                <h3 className='semibold-16'>Progreso</h3>
            </div>
            <div className="progress-body">
                <h3 className='roboto-14'>Registra tu avance</h3>
                <div>
                    <div className="progress-bar"></div>
                    <span className='regular-14'>5</span>
                </div>
            </div>
        </div>
    )
}

export default Progress;