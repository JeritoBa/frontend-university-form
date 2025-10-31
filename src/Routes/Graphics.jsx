import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Graphic from './../Components/Graphic'

const Graphics = () => {
    const [ data, setData ] = useState([])
    const navigate = useNavigate()
    

    useEffect(() => {
        axios
            .get("https://encuesta-matematicas-para-la-informatica-production.up.railway.app/api/export")
            .then(res => {
                setData(res.data)
                console.log(res)
            })
            .catch(error => {
                console.error("No se pudieron obtener los datos exitosamente");
                console.error(error)
            });
    }, [])

    if(data.length == 0) return <p>Loading data...</p>

    return <div className="mainGraphics">
        <div className="info">
            <h2>Gráficos: Encuesta de Permanencia Estudiantil Universitaria</h2>
            <p>Total de <b>{data.totalSubmissions}</b> encuestas realizadas.</p>
        </div>
        { data.questions.map(question => <Graphic info={question} key={data.questions.indexOf(question)} />) }
        <pre onClick={() => navigate('/')}>Volver al formulario</pre>
    </div>
}

export default Graphics