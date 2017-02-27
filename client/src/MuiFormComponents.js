import React from 'react'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import { RadioButtonGroup } from 'material-ui/RadioButton'

export const MuiTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
             floatingLabelText={label}
             errorText={touched && error}
             {...input}
             {...custom}
  />
)

export const MuiCheckbox = ({ input, label }) => (
  <Checkbox label={label}
            checked={!!input.value}
            onCheck={input.onChange}/>
)

export const MuiRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup {...input} {...rest}
                    valueSelected={input.value}
                    onChange={(event, value) => input.onChange(value)}/>
)

export const MuiSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}/>
)

