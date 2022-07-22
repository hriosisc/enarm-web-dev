import React, { useContext } from 'react';
import DashboardRightAside from '../../components/platform/DashboardRightAside';
import CourseContent from '../../components/platform/subComponents/CourseContent';
import ProgressRecord from '../../components/platform/subComponents/ProgressRecord';
import { CurrentWeekContext } from '../../contexts/platform/CurrentWeekStudyContext';
import StudyMethod from '../../components/platform/subComponents/StudyMethod';
import '../../css/platform/pages/StudyCourseContentPage.css'

const StudyCourseContentPage = () => {

    const { currentWeek } = useContext(CurrentWeekContext);

    console.log(currentWeek);

    return (
        <div className='main-container'>
            <div className='c-coursecontent-wrapper'>
                <CourseContent class={currentWeek.class} />
                <DashboardRightAside>                    
                    <ProgressRecord
                        days={currentWeek.days}
                        week={currentWeek.week.week}
                    />
                    <StudyMethod />
                </DashboardRightAside>
            </div>
        </div>
    )
}

export default StudyCourseContentPage;