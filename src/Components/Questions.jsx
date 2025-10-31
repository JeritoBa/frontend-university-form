import PropTypes from 'prop-types'
import React from 'react'
// Utilities
import Question from './Utilities/Question'

const Questions = ({ data, register, errors }) => {

    return <div className="mainQuestions">
        <h2>Responde las siguientes preguntas:</h2>
        {data.map(questionData => {
            return <React.Fragment key={data.indexOf(questionData)}>
                <Question 
                        info={questionData} 
                        register={register} 
                        errors={errors} 
                />
                {errors[questionData.questionId] && 
                
                    <span className="errSpan">
                        {errors[questionData.questionId].message}
                    </span>
                }
            </React.Fragment>
        })}
    </div>
}


// JSON Data Scheme
Questions.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            questionId: PropTypes.string.isRequired,
            question: PropTypes.string.isRequired,
            options: PropTypes.arrayOf(
                PropTypes.shape({
                    value: PropTypes.string.isRequired, 
                    text: PropTypes.string.isRequired
                }).isRequired
            ).isRequired
        }).isRequired
    ).isRequired,
    register: PropTypes.func.isRequired,
    errors: PropTypes.shape({}).isRequired
}

export default Questions