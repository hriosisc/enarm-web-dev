import React, { useContext, useState } from 'react';
import '../../css/platform/components/LeftAside.css';
import { NavLink } from 'react-router-dom';
import ResIcon from '../../assets/icons/platform/resources-icon.png';
import SimIcon from '../../assets/icons/platform/simulator-icon.png';
import DocIcon from '../../assets/icons/platform/documents-icon.png';
import ResBlueIcon from '../../assets/icons/platform/resources-icon-blue.png';
import SimBlueIcon from '../../assets/icons/platform/simulator-icon-blue.png';
import DocBlueIcon from '../../assets/icons/platform/documents-icon-blue.png';
import ArrowDown from '../../assets/icons/platform/arrow_down.png';
import ArrowUp from '../../assets/icons/platform/arrow_up.png';
import MenuToggleIcon from "../../assets/icons/platform/MenuFold.png";
import { DashAsideContext } from '../../contexts/platform/DashboardAsideContext';
import enarmLogo from '../../assets/imgs/enarm-platform-logo.jpg';

const activeStyle = { color: "rgba(30, 115, 190, 1)" };
const subMenuActiveStyle = { background: "#e6f7ff", color: "rgba(30, 115, 190, 1)" }

const navlinks_active = [
    { pos: 0, isActive: true, class: "", activeStyle: activeStyle },
    { pos: 1, isActive: false, class: "sub-link", activeStyle: subMenuActiveStyle },
    { pos: 2, isActive: false, class: "sub-link", activeStyle: subMenuActiveStyle },
    { pos: 3, isActive: false, class: "sub-link", activeStyle: subMenuActiveStyle },
    { pos: 4, isActive: false, class: "sub-link", activeStyle: subMenuActiveStyle },
    { pos: 5, isActive: false, class: "sub-link", activeStyle: subMenuActiveStyle },
    { pos: 6, isActive: false, class: "sub-link", activeStyle: subMenuActiveStyle },
    { pos: 7, isActive: false, class: "sub-link", activeStyle: subMenuActiveStyle },
    { pos: 8, isActive: false, class: "sub-link", activeStyle: activeStyle },
    { pos: 9, isActive: false, class: "sub-link", activeStyle: activeStyle },
    { pos: 10, isActive: false, class: "", activeStyle: activeStyle },
    { pos: 11, isActive: false, class: "sub-link", activeStyle: subMenuActiveStyle },
    { pos: 12, isActive: false, class: "sub-link", activeStyle: subMenuActiveStyle },
];

const navlinks_arrow = [
    { pos: 0, isSelected: true },
    { pos: 10, isSelected: false }
];

const topMenuLinks = [0, 8, 9, 10];
const DashboardLeftAside = () => {

    const [active, setActive] = useState(navlinks_active);
    const [plansMenu, setPlansMenu] = useState(true);
    const [plansTopMenu, setPlansTopMenu] = useState(true);
    const [docsMenu, setDocsMenu] = useState(false);
    const [docsTopMenu, setDocsTopMenu] = useState(false);
    const [selected, setSelected] = useState(navlinks_arrow);

    const { isShort, handleDashboardAsideMenu } = useContext(DashAsideContext);

    const asideNavigationItems = [
       /* pos: 0 */ {
            route: "/u/planes",
            label: "Planes_de_Estudio",
            hasDDL: true,
            icon: () => (active[0].isActive || plansTopMenu) ? DocBlueIcon : DocIcon,
            alt: "dashboard",
        },
       /* pos: 1 */ { route: "/u/planes/1", label: "11 Meses", hasDDL: false, },
       /* pos: 2 */ { route: "/u/planes/2", label: "10 Meses", hasDDL: false, },
       /* pos: 3 */ { route: "/u/planes/3", label: "9 Meses", hasDDL: false, },
       /* pos: 4 */ { route: "/u/planes/4", label: "8 Meses", hasDDL: false, },
       /* pos: 5 */ { route: "/u/planes/5", label: "7 Meses", hasDDL: false, },
       /* pos: 6 */ { route: "/u/planes/6", label: "6 Meses", hasDDL: false, },
       /* pos: 7 */ { route: "/u/planes/7", label: "5 Meses", hasDDL: false, },
       /* pos: 8 */ {
            route: "/u/recursos",
            label: "Recursos",
            hasDDL: false,
            icon: () => active[8].isActive ? ResBlueIcon : ResIcon,
            alt: "resources"
        },
       /* pos: 9 */ {
            route: "/u/simulador",
            label: "Simuladores",
            hasDDL: false,
            icon: () => active[9].isActive ? SimBlueIcon : SimIcon,
            alt: "simulator"
        },
       /* pos: 10 */ {
            route: "/u/documentos",
            label: "Documentos_ENARM",
            hasDDL: true,
            icon: () => (active[10].isActive || docsTopMenu) ? DocBlueIcon : DocIcon,
            alt: "documents"
        },
       /* pos: 11 */ { route: "/u/documentos/guia", label: "Guía de Estudio", hasDDL: false },
       /* pos: 12 */ { route: "/u/documentos/programa_academico", label: "Programa Académico", hasDDL: false }
    ];


    const toggleArrowed = (index) => {
        return selected.map((item) => {
            if (item.pos === index) {
                return { ...item, isSelected: true }
            }
            return { ...item, isSelected: false }
        });
    }

    const toggleNavLinkList = (i) => {
        

        const plansTopFlag = (i > 7) ? false : true;
        setPlansMenu(plansTopFlag);

        const docsMenuDisplay = (i >= 10) ? true : false;
        setDocsMenu(docsMenuDisplay);

        const newSet = active.map((item) => {
            if (item.pos === i) {
                if (topMenuLinks.includes(i)) {
                    return { ...item, isActive: true, activeStyle: activeStyle, class: "" }
                }
                return { ...item, isActive: true, activeStyle: subMenuActiveStyle, class: "sub-link" }
            }
            return { ...item, isActive: false, activeStyle: null }
        });

        setActive(newSet);

        if (i === 0 || i === 10) {

            setSelected(toggleArrowed(i));
            if (i === 0) {
                setPlansTopMenu(true);
                setDocsTopMenu(false);
            }
            if (i === 10) {
                setDocsTopMenu(true);
                setPlansTopMenu(false);
            }
            return;
        }
        // ELSE
        // Pendiente: Revisar el icono de menu desplegado en "PLANES DE ESTUDIO" y "DOCUMENTOS ENARM", 
        // al dar click en Submenu, no debe cambiar y permanecer con la punta hacia arriba
        const toggleArrow = selected.map((item) => {
            return { ...item, isSelected: false }
        });

        const plansFlag = (i >= 0 && i <= 7) ? true : false;
        setPlansTopMenu(plansFlag);

        const docsFlag = (i >= 10) ? true : false;
        setDocsTopMenu(docsFlag);

        setSelected(toggleArrow);
    }


    const arrowOrientation = (i) => {
        const arrow = selected.filter(item => item.pos === i);
        return arrow[0].isSelected ? ArrowUp : ArrowDown;
    }

    const isDropDownMenuActive = (index) => {
        if (index >= 1 && index <= 7) {
            return plansMenu ? "plans-on" : "plans-off";
        }
        if (index > 10) {
            return docsMenu ? "docs-on" : "docs-off";
        }
        return;
    }

    const navLinkClass = (index, isAct) => {
        let classString = "platform-link";
        if (!topMenuLinks.includes(index)) { classString += " sub-link"; }
        if (active[index].isActive) { classString += " active" }
        if (isShort) { classString += " pLink-minimized" }
        if ((index === 0 || index === 10) && isAct) { classString += " forced-link-active" }

        return classString;
    }

    return (
        <aside className={`platform-el ${isShort ? "minimized" : ""}`}>
            <nav>
                <div className="navigation-wrapper">
                    <div className="logo-name">
                        <img src={enarmLogo} alt="logo" className="logo-enarm" />
                        {
                            !isShort && (
                                <span
                                    className='semibold-14 sky-blue'
                                >
                                    Plataforma ENARM
                                </span>
                            )
                        }
                    </div>
                    <ul className="enarm-list">
                        {
                            asideNavigationItems.map((item, index) => {
                                return (
                                    <li className={`${isDropDownMenuActive(index)}`} key={index}>
                                        <NavLink
                                            to={item.route}
                                            className={({ isActive }) => navLinkClass(index, isActive)}
                                            onClick={() => { toggleNavLinkList(index) }}
                                        >
                                            <div>
                                                {item.icon && <img src={item.icon()} alt={item.alt} />}
                                                {!isShort && <span className='regular-14' > {item.label} </span>}
                                            </div>
                                            {
                                                (!isShort && item.hasDDL) && (
                                                    <img
                                                        src={arrowOrientation(index)}
                                                        alt="ddl"
                                                        className="dropdownicon"
                                                    />
                                                )
                                            }
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="aside-footer">
                    <div className="menu-toggle">
                        <button className='toggle-button-menu' onClick={handleDashboardAsideMenu}>
                            <img src={MenuToggleIcon} alt="menu" className="menu-icon" />
                        </button>
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export default DashboardLeftAside;