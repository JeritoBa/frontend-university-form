import PropTypes from 'prop-types'

const UserValidation = ({ register, errors }) => {

    return <div className="userValidation">
        <h2>Antes de empezar, dejanos saber quién eres:</h2>
            
        <label htmlFor="nombreEstudiante">Nombre del Estudiante: </label>
        <input type="text" placeholder="Escribe tu nombre." {...register("name", 
            { 
                required: { 
                    value: true, 
                    message: "Nombre del estudiante es requerido." 
                },
                minLength: {
                    value: 3,
                    message: "Inserte un nombre real."
                }
            }
        )} />
        {errors.name && <span className="errSpan">{errors.name.message}</span>}
            
        <label htmlFor="emailEstudiante">Correo Electrónico: </label>
        <input type="email" placeholder="Escribe tu correo." {...register("email", 
            { 
                required: {
                    value: true,
                    message: "Correo electrónico es requerido."
                },
                pattern: {
                    value: /^(?!.*\.\.)(?!\.)(?!.*\.$)[A-Za-z0-9]+(?:\.[A-Za-z0-9]+)*@[A-Za-z0-9]+(?:\.[A-Za-z0-9]+)+$/,
                    message: "Inserte un correo electrónico válido."
                }
            }
        )}/>
        {errors.email && <span className="errSpan">{errors.email.message}</span>}

        <label htmlFor="carreraEstudiante">Carrera que estudia: </label>
        <input type="text" placeholder="Escribe tu carrera." {...register("career", 
            { 
                required: {
                    value: true,
                    message: "El nombre de la carrera es requerido."
                },
                minLength: {
                    value: 6,
                    message: "Inserte una carrera válida."
                },
                maxLength: {
                    value: 25,
                    message: "El nombre de la carrera es muy largo."
                }
            }
        )} />
        {errors.career && <span className="errSpan">{errors.career.message}</span>}
    </div>
}

UserValidation.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.shape({
        name: PropTypes.shape({
            message: PropTypes.string
        }),
        email: PropTypes.shape({
            message: PropTypes.string
        }),
        career: PropTypes.shape({
            message: PropTypes.string
        })
    }).isRequired
}

export default UserValidation