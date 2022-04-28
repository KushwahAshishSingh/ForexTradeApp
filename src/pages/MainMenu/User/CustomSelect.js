

import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { FormFeedback } from 'reactstrap'

const XSearchSelect = ({ value, onChange, options, error, onBlur, id, name, touched }) => {

    return (
        <>
            <Select
                isClearable="true"
                value={value}
                options={options}
                onChange={onChange}
                id={id}
                name={name}
                onBlur={onBlur}
            />
            {touched && error ? (
                <FormFeedback>{error}</FormFeedback>
            ) : null}
        </>
    )
}



XSearchSelect.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    onBlur: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    touched: PropTypes.bool.isRequired,


}

export default XSearchSelect