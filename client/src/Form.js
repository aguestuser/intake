import React from 'react'
import IntakeForm from './IntakeForm'
import SignupForm from './SignupForm'

const endpoint = 'http://172.30.30.153:3001/'

const onSubmit = formName => { return data => {
  fetch(endpoint + formName, {
    method: "post",
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(data)
  }).catch(console.error)
}}

const Form = props => {
  const { formName } = props
  const fn = onSubmit(formName)
  console.log('--17', fn);

  if (formName === 'intake')
    return <IntakeForm onSubmit={fn}/>
  else if (formName === 'signup')
    return <SignupForm onSubmit={fn}/>
  else
    return <div>Bad form</div>
}

export default Form
