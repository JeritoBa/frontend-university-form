import axios from 'axios'
import { useEffect, useState } from 'react';
import Graphic from './../Components/Graphic'

const Graphics = () => {
    const [ data, setData ] = useState([])

    

    useEffect(() => {
        console.log("useEffect")

        /*axios
            .get("https://encuesta-matematicas-para-la-informatica-production.up.railway.app/api/export")
            .then(res => {
                setData(res.data)
                console.log(res)
            })
            .catch(error => {
                console.error("No se pudieron obtener los datos exitosamente");
                console.error(error)
            });*/

        const obtenerDatos = async () => {
            try {
                const respuesta = await axios.get("https://encuesta-matematicas-para-la-informatica-production.up.railway.app/api/export")

                setData(respuesta.data)
                console.log(data)
            } catch (error) {
                console.error("Error al obtener los usuarios: ", error)
            }
        }

        obtenerDatos()
    }, [])

    return <div className="mainGraphics">
        <div className="info">
            <h2>Gráficos: Encuesta de Permanencia Estudiantil Universitaria</h2>
            <p>Total de {data.totalSubmissions} encuestas realizadas.</p>
        </div>
        
        {
            //data.questions.map(question => <Graphic info={question} key={data.indexOf(question)} />)
        }

        <div className="question">
            <h3>Pregunta 1: ...</h3>
            <p>diagrama de barras</p>
        </div>
        <div className="question">
            <h3>Pregunta 2: ...</h3>
            <p>diagrama de barras</p>
        </div>
    </div>
}

export default Graphics