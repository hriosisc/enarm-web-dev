import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import AboutCoursePage from './pages/AboutCoursePage';
import BlogEntriesPage from './pages/BlogEntriesPage';
import EntryDetailPage from './pages/EntryDetailPage';
import FreeTestPage from './pages/FreeTestPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AccessLayout from './components/layouts/AccessLayout';
import { useEffect, useState } from 'react';
import WidthContext from './contexts/WidthContext';
import DashboardLayout from './components/layouts/DashboardLayout';
import DashboardPage from './pages/platform/DashboardPage';
import ResourcesPage from './pages/platform/ResourcesPage';
import SimulatorsPage from './pages/platform/SimulatorsPage';
import StudyPlansPage from './pages/platform/StudyPlansPage';
import DocumentsPage from './pages/platform/DocumentsPage';
import DashboardAsideWidth from './contexts/platform/DashboardAsideContext';
import AdvicesNewsPage from './pages/platform/AdvicesNewsPage';
import PlanMonthPage from './pages/platform/PlanMonthPage';
import CurrentGuideContext from './contexts/platform/CurrentGuideContext';
import StudyGuidePage from './pages/platform/StudyGuidePage';
import AcademicProgramPage from './pages/platform/AcademicProgramPage';

const App = () => {

    const getWindowWidth = () => {
        let x = window.innerWidth;
        if (x < 576) return 'xs';
        if (x >= 576 && x <= 767) return 'sm';
        if (x >= 768 && x <= 991) return 'md';
        if (x >= 992 && x <= 1199) return 'lg';
        if (x >= 1200 && x <= 1399) return 'xl';
        if (x >= 1400) return 'xxl';
    }

    const [screenSize, setScreenSize] = useState(getWindowWidth())

    useEffect(() => {
        window.addEventListener('resize', () => {
            const x = getWindowWidth();
            setScreenSize(x);
        });
    }, [screenSize]);

    useEffect(() => {

        function spinAround() {

            let spins = document.querySelectorAll("div.spin");

            for (let i = 0; i < spins.length; i++) {
                let windowHeight = window.innerHeight;
                let elementTop = spins[i].getBoundingClientRect().top;
                let elementVisible = 150;

                if (elementTop < (windowHeight - elementVisible)) {
                    spins[i].classList.add("spin-around");
                } else {
                    spins[i].classList.remove("spin-around");
                }
            }
        }

        function reveal() {

            let reveals = document.querySelectorAll(".reveal");

            for (let i = 0; i < reveals.length; i++) {
                let windowHeight = window.innerHeight;
                let elementTop = reveals[i].getBoundingClientRect().top;
                let elementVisible = 150;

                if (elementTop < (windowHeight - elementVisible)) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }
            }
        }

        window.addEventListener("scroll", () => {
            reveal();
            spinAround();
        }, { capture: true });

        window.addEventListener("touchmove", () => {
            reveal();
        }, { capture: true });
    }, []);

    return (
        <>
            <WidthContext.Provider value={screenSize}>
                <DashboardAsideWidth>
                    <Routes>
                        <Route path='/' index={true} element={<Layout topLine={true}><HomePage /></Layout>} />
                        <Route path='/nosotros' element={<Layout topLine={true}><AboutUsPage /></Layout>} />
                        <Route path='/sobre_el_curso' element={<Layout topLine={false}><AboutCoursePage /></Layout>} />
                        <Route path='/blog' element={<Layout topLine={true}><BlogEntriesPage /></Layout>} />
                        <Route path='/blog/:id' element={<Layout topLine={true}><EntryDetailPage /></Layout>} />
                        <Route path='/prueba_gratis' element={<Layout topLine={true}><FreeTestPage /></Layout>} />
                        <Route path='/contacto' element={<Layout topLine={false}><ContactPage /></Layout>} />
                        <Route path='/iniciar_sesion' element={<AccessLayout><LoginPage /></AccessLayout>} />
                        <Route path='/registrate' element={<AccessLayout><RegisterPage /></AccessLayout>} />

                        { /* Platform */}
                        <Route path='/u/dashboard' element={<DashboardLayout hasAside={false}><DashboardPage /></DashboardLayout>} />
                        <Route path='/u/planes' element={<DashboardLayout hasAside={true}><StudyPlansPage /></DashboardLayout>} />
                        <Route path='/u/planes/:id' element={<DashboardLayout hasAside={true}><PlanMonthPage mes={11} /></DashboardLayout>} />
                        <Route path='/u/planes/aviso_novedades' element={<DashboardLayout hasAside={true}><AdvicesNewsPage /></DashboardLayout>} />
                        <Route path='/u/recursos' element={
                            <CurrentGuideContext>
                                <DashboardLayout hasAside={false}>
                                    <ResourcesPage />
                                </DashboardLayout>
                            </CurrentGuideContext>}
                        />
                        {/* <Route path='/u/recursos/:id' element={<DashboardLayout hasAside={false}><ResourcesPage /></DashboardLayout>} /> */}
                        <Route path='/u/simulador' element={
                            <CurrentGuideContext>
                                <DashboardLayout hasAside={false}>
                                    <SimulatorsPage />
                                </DashboardLayout>
                            </CurrentGuideContext>
                        }
                        />
                        <Route path='/u/documentos' element={<DashboardLayout hasAside={false}><DocumentsPage /></DashboardLayout>} />
                        <Route path='/u/documentos/guia' element={<DashboardLayout hasAside={false}><StudyGuidePage /></DashboardLayout>} />
                        <Route path='/u/documentos/programa_academico' element={<DashboardLayout hasAside={false}><AcademicProgramPage /></DashboardLayout>} />
                    </Routes>
                </DashboardAsideWidth>
            </WidthContext.Provider>
        </>
    );
}

export default App;
