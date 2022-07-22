import React, { useContext } from 'react';
import DashboardNavbar from '../platform/DashboardNavbar';
import DashboardLeftAside from '../platform/DashboardLeftAside';
import DashboardRightAside from '../platform/DashboardRightAside';
import '../../css/platform/layouts/Dashboard.css'
import { DashAsideContext } from '../../contexts/platform/DashboardAsideContext';
import CurrentWeekStudyContext from '../../contexts/platform/CurrentWeekStudyContext';
import CurrentGuideContext from '../../contexts/platform/CurrentGuideContext';

const DashboardLayout = (props) => {

    const { isShort } = useContext(DashAsideContext)

    return (
        <>
            <CurrentGuideContext>
                <CurrentWeekStudyContext>
                    <div className="platform-wrapper">
                        <DashboardNavbar />
                        <DashboardLeftAside />
                        <main className={`main-platform ${isShort ? "minimized" : ""}`}>
                            {props.children}
                        </main>
                        {props.hasAside && <DashboardRightAside />}
                    </div>
                </CurrentWeekStudyContext>
            </CurrentGuideContext>
        </>
    )
}

export default DashboardLayout;