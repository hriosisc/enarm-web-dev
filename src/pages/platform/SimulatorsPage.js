import React from 'react';
import EspecialidadesList from '../../components/platform/subComponents/EspecialidadesList';
import SimulatorsContentData from '../../components/platform/subComponents/SimulatorsContentData';

const SimulatorsPage = () => {
    return (
        <div className='main-container'>
            <div className="resources-wrapper">
                <EspecialidadesList /> 
                <SimulatorsContentData />
            </div>
        </div>
    )
}

export default SimulatorsPage;