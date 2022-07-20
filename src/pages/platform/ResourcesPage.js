import React, { useContext } from 'react';
import EspecialidadesList from '../../components/platform/subComponents/EspecialidadesList';
import '../../css/platform/pages/ResourcesPage.css';
import ResourceContainerData from '../../components/platform/subComponents/ResourceContainerData';
import { ActualGuideContext } from '../../contexts/platform/CurrentGuideContext';

const ResourcesPage = () => {

    const { guideData } = useContext(ActualGuideContext)
    return (
        <div className='main-container'>
            <div className="resources-wrapper">
                <EspecialidadesList />
                <ResourceContainerData
                    title={guideData.label}
                    guide={guideData.pos}
                />
            </div>
        </div>
    )
}

export default ResourcesPage;