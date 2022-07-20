import React from 'react';
import CardLegacy from './CardLegacy';
import PlanCollapse from './PlanCollapse';

const StudyPlanCourseContainer = () => {

    return (
        <div className='c-plancourse-container'>
            <CardLegacy
                months={11}
            />
            <PlanCollapse />
        </div>
    )
}

export default StudyPlanCourseContainer;