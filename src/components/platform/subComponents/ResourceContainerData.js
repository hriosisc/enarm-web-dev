import React, { useEffect, useState } from 'react';
import { guideList } from '../../../utils/GuideList';
import { Link } from 'react-router-dom';

const ResourceContainerData = (props) => {

    const [guide, setGuide] = useState(guideList);

    useEffect(() => {
        const httpGetGuides = () => {
            setGuide(guideList)
        }
        httpGetGuides()
    }, [])

    return (
        <div className='resource-container'>
            <div className="container-head">
                <div className="head-title">
                    <h3 className='medium-20'>{props.title}</h3>
                    <span className='regular-14 gray-textColor'>Recursos</span>
                </div>
                <div className="head-utils">
                    <span className='regular-14'>Filtrar:</span>
                    <select className="regular-14">
                        <option value="0">Selecciona</option>
                    </select>
                    <span className='regular-14'>Vuelta:</span>
                    <div className="utils-checkboxes">
                        <div className='checkbox-label'>
                            <input type="checkbox" name="primera" id="chx-primera" />
                            <label className='regular-14' htmlFor="chx-primera">1ra</label>
                        </div>
                        <div className='checkbox-label'>
                            <input type="checkbox" name="segunda" id="chx-segunda" />
                            <label className='regular-14' htmlFor="chx-segunda">2da</label>
                        </div>
                        <div className='checkbox-label'>
                            <input type="checkbox" name="tercera" id="chx-tercera" />
                            <label className='regular-14' htmlFor="chx-tercera">3ra</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-body">
                <div className="guidelist-container-data">
                    {
                        guide.map((item, index) => { 
                            return (
                                <div className="guidelist-unity" key={index}>
                                    <div className='guide-header' style={item?.padding}>
                                        {
                                            item.url ? (
                                                <Link className="guide-item-list noDecor blueSpan regular-14" to={`${item.url}`} target="_blank"> {item.title} </Link>
                                            ) : (
                                                <div className='guide-item-list'>
                                                    <span className='regular-14'>{item.title}</span>
                                                </div>
                                            )
                                        }
                                    </div>

                                    {
                                        item.subtitles ? (
                                            <div className='guide-header'>
                                                <ul style={{ marginLeft: "44px"}}>
                                                    {
                                                        item.subtitles.map((sub, subIndex) => {
                                                            return (
                                                                sub?.url ? (
                                                                    <li key={subIndex}>
                                                                        <Link className="guide-item-list noDecor regular-14 blueSpan" to={`${sub.url}`} target="_blank" > {sub.title} </Link>
                                                                    </li>
                                                                ) : (
                                                                    <li key={subIndex}>
                                                                        <div className="guide-item-list">
                                                                            <span className='regular-14 blueSpan'>{sub.title}</span>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default ResourceContainerData;