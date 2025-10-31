import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom";

const Banner = ({ img, title, message, setSuccesful, setSend }) => {
    const navigate = useNavigate()

    return <div className="banner">
        <img src={img} alt={title} />
        <div>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
        <button onClick={() => { setSuccesful(false); setSend(false); }}>Cerrar</button>
        <pre onClick={() => navigate("/graphics")}>Visualizar datos de forma gráfica</pre>
    </div>
}

Banner.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    setSuccesful: PropTypes.func.isRequired,
    setSend: PropTypes.func.isRequired
}

export default Banner