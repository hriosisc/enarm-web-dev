import React, { useEffect, useState } from 'react'; 

const ProgressRecord = (props) => {

    const [progress, setProgress] = useState([]);

    useEffect(() => {

        const httprequestProgress = () => {

            const progressArray = [];

            for (let i = 1; i <= props.days; i++) {
                progressArray.push({ day: i, status: false });
            }
            setProgress(progressArray);
        }

        httprequestProgress();

    }, [props.days]); 

    return (
        <div className='c-progressrecord-container'>
            <div className="pr-head">
                <span className='semibold-16'>Registra tu avance</span>
            </div>
            <div className="pr-body">
                <span className='regular-14 gray-textColor'>Semana {props.week} - {props.days} días</span>
                {
                    progress.map((prog, pIndex) => {
                        return (
                            <div key={pIndex}>
                                <input type="checkbox" name={`progress-${prog.day}`} id={`input-progress-${prog.day}`} />
                                <label className="regular-14" htmlFor={`input-progress-${prog.day}`}>Día {prog.day} semana {props.week}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProgressRecord;