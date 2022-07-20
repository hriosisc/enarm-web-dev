import React from 'react';
import DashboardRightAside from '../../components/platform/DashboardRightAside';
import Progress from '../../components/platform/subComponents/Progress';
import StudyCalendar from '../../components/platform/subComponents/StudyCalendar';
import StudyTablePlan from '../../components/platform/subComponents/StudyTablePlan';
import StudyPlanCourseContainer from '../../components/platform/subComponents/StudyPlanCourseContainer';
import '../../css/platform/pages/PlanMonthPage.css';

const PlanMonthPage = (props) => {
    return (
        <div className='main-container'>
            <div className='plantMonth-wrapper'>
                <StudyPlanCourseContainer />
                <DashboardRightAside>
                    <StudyCalendar />
                    <Progress />
                    <StudyTablePlan />
                </DashboardRightAside>
            </div>
        </div>
    )
}

export default PlanMonthPage;