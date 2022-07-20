import React from 'react';
import { Link } from 'react-router-dom';

const StudyTablePlan = () => {
    return (
        <div style={{ display: "flex", alignItems: "center", padding: "5px 16px", gap: "8px"}}>
            <i style={{fontSize: "14px"}} className="material-icons gray">import_contacts</i>
            <Link className="regular-14 blank black" to="#" target="_blank">Abrir Tabla del Plan de Estudio</Link>
        </div>
    )
}

export default StudyTablePlan;