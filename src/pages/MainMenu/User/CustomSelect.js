import React from 'react';
import Select from 'react-select';

function SelectField(FieldProps) {
    return (
        <Select
            options={FieldProps.options}
            {...FieldProps.field}
            onChange={option => FieldProps.form.setFieldValue(FieldProps.field.name, option)}
        />
    )
}

export default SelectField;