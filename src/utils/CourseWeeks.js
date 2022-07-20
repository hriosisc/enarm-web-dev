
export const courseWeeks = [
        {
            week: 1, 
            classes: [
                { title: "Guía de Estudio", days: 1},
                { title: "Infectología", days: 5 }
            ],
            simulator: {
                title: "SimuladorPro - Examen INICIAL", days: 1
            }, 
            status: "Completo"
        },
        {
            week: 2, 
            classes: [
                { title: "Infectología", days: 5},
                { title: "Cardiologia", days: 1}
            ],
            simulator: {
                title: "SimuladorPro - Infecto", days: 0
            }, 
            status: "Incompleto"
        }, 
        {
            week: 3, 
            classes: [
                { title: "Cardiologia", days: 6},                
            ],
            simulator: {
                title: "SimuladorPro - Cardio", days: 0
            }, 
            status: "Sin avance"
        },  
    ]