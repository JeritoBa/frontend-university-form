import PropTypes from "prop-types";

const Question = ({ info, register }) => {
    // ESTRUCTURA GENERAL DE INFO
    /*info = {
        questionId: '',
        question: '',
        options: [
            {
                value: '',
                text: ''
            }
        ]
    }*/

    return <div className="question">
        <h3>{info.question}</h3>
        {
            info.options.map(option => {
                return <div className="option" key={`${option.value}_${info.questionId}`}>
                    <input 
                            type="radio" 
                            name={info.questionId} 
                            value={option.value} 
                            {...register(info.questionId, { required: "Debes marcar alguna opcion." })}
                    />
                    <label htmlFor={info.questionId}>
                        {option.text}
                    </label>
                </div>
            })
        }
    </div>
}

// Validación de Props por Componente
Question.propTypes = {
    info: PropTypes.shape({ // shape = Objeto
        questionId: PropTypes.string.isRequired, // string = Texto
        question: PropTypes.string.isRequired,
        options: PropTypes.arrayOf( // arrayOf = Array
            PropTypes.shape({
                value: PropTypes.string.isRequired, // isRequired = Necesario
                text: PropTypes.string.isRequired
            }).isRequired
        ).isRequired
    }),
    register: PropTypes.func.isRequired,
    errors: PropTypes.shape({}).isRequired
} // Es usado para validar datos pasados entre componentes

export default Question