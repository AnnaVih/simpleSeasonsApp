import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
    const handlePageChange = () => {
        props.onButtonClick(props.url)
    }

    return (
        <button 
            className="ui primary button fluid"
            onClick={handlePageChange}>
            {props.message}
        </button>
    )
}

Button.propTypes = {
    message: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
}

export default Button