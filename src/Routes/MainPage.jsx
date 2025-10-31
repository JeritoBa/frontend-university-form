import { useState } from 'react'
// Packages
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
// Data
import questionsData from './../data/questionsData.json'
// Components
import WelcomeBanner from "./../Components/WelcomeBanner"
import UserValidation from "./../Components/UserValidation"
import Questions from "./../Components/Questions"
import Banner from "../Components/Utilities/Banner"
// Images
import done from './../images/done.webp'
import cancel from './../images/cancel.webp'

const MainPage = () => {
  const navigate = useNavigate()
  const [ send, setSend ] = useState(false);
  const [ succesful, setSuccesful ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('')

  const { 
    register, 
    handleSubmit,
    formState: { errors },
    reset
   } = useForm()

  const onSubmit = handleSubmit(data => {
    setSend(true)

    axios
      .post("https://encuesta-matematicas-para-la-informatica-production.up.railway.app/api/response", data)
      .then(r => {
        console.log(r)

        setSuccesful(true)
        reset()
        window.scrollTo({ top: 0, behavior: "smooth" })
      })
      .catch(error => {
        console.error("No se pudo realizar la solicitud POST con éxito")
        console.error(error)

        setErrorMessage(error.message)
        setSuccesful(false)
      })
  })

  return (
    <div className="mainApp">
      <WelcomeBanner />
      <div className="containerForm">
        <form onSubmit={onSubmit}>
            <UserValidation register={register} errors={errors} />
            <Questions data={questionsData} register={register} errors={errors} />
            <button type="submit" className="sendButton">Enviar Respuesta</button>
        </form>
        </div>
        <pre onClick={() => navigate("/graphics")}>Visualizar datos de forma gráfica</pre>
        {
            send
            &&
            <>
                {
                    succesful
                    ?
                    <Banner img={done} title="Enviado Correctamente." message="Tus datos fueron enviados de manera exitosa." setSuccesful={setSuccesful} setSend={setSend} />
                    :
                    <Banner img={cancel} title="Error al Enviar los Datos." message={errorMessage} setSuccesful={setSuccesful} setSend={setSend} />
                }
            </>
        }
    </div>
  )
}

export default MainPage