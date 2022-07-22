import React from 'react';

const ResourceContainerHead = (props) => {
    return (
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
    )
}

export default ResourceContainerHead