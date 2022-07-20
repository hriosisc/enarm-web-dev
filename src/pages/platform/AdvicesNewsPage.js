import React from 'react'
import BreadCrumbs from '../../components/platform/subComponents/BreadCrumbs';
import '../../css/platform/pages/AdvicesNewsPage.css';
import DatePlansList from '../../components/platform/subComponents/DatePlansList';
import drNewsMini from '../../assets/imgs/novedades-img-mini.png'

const AdvicesNewsPage = () => {
    return (
        <div className='main-container'>
            <div className='advices-news-container'>
                <BreadCrumbs
                    currentPage="Mesa de Trabajo"
                    currentSubPage="Novedades"
                />
                <div className="heading-left">
                    <h3 className='regular-20'>Novedades</h3>
                </div>
                <div className="content-head">
                    <div>
                        <img style={{ width: "72px", height: "72px" }} src={drNewsMini} alt="mini_news" />
                    </div>
                    <div className="sub_content-head">
                        <h3 className='regular-20'>A continuación te mostramos todas las fechas de nuestros Planes de Esudio.</h3>
                        <h5 className='regular-14 gray'>Fechas de Planes de Estudio</h5>
                    </div>
                </div>
                <div className="content-body"></div>
                <DatePlansList />
            </div>
        </div>
    )
}

export default AdvicesNewsPage;