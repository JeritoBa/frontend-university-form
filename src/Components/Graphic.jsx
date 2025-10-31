import PropTypes from 'prop-types'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

const Graphic = ({ info }) => {
     const throwQuestion = (key) => {
        switch(key) {
            case "q1":
                return "Pregunta 1: ¿Cuál consideras que es el principal obstáculo que enfrentas durante tu formación universitaria?"
            case "q2":
                return "Pregunta 2: ¿Qué factor afecta más tu rendimiento académico?"
            case "q3": 
                return "Pregunta 3: Cuando enfrentas dificultades económicas, ¿cuál suele ser tu principal estrategia?"
            case "q4": 
                return "Pregunta 4: En cuanto a tu salud mental durante la universidad, ¿cómo la describirías?"
            default:
                return "Question doesn't exists"

        }
    }

    // CHART.JS

    const data = {
        labels: info.totals.map(total => total.option),
        datasets: [
            {
                label: "Resultados",
                data: info.totals.map(total => total.count),
                backgroundColor: [
                    "#36A2EB",
                    "#FF6384",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF"
                ],
                borderWidth: 1
            }
        ]
    }

    return <div className="question">
        <h3>{throwQuestion(info.key)}</h3>
        <div className="chart-container">
            <Doughnut data={data} />
        </div>
    </div>
}

Graphic.propTypes = {
    info: PropTypes.shape({
        key: PropTypes.string.isRequired,
        totals: PropTypes.arrayOf([]).isRequired
    }).isRequired
}

export default Graphic