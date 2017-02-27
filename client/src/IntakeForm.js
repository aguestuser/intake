import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { RadioButton } from 'material-ui/RadioButton'
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import {MuiTextField, MuiRadioGroup} from './MuiFormComponents'
import {validate} from './intakeFormValidation'
import {Card, CardHeader, CardTitle} from 'material-ui/Card'
import AppBar from 'material-ui/AppBar'
import {SOURCE_CODE_LINK} from './constants'

const styles = {
  card: {
    padding: '2rem',
    margin: '2rem'
  },
  field: {
    marginLeft: '2rem'
  },
  header: {
    marginLeft: '-6rem'
  },
  divider: {
    marginTop: '2rem',
    marginBottom: '1rem',
  },
  submit: {
    margin: '2rem',
    width: '10rem',
  },
}

const IntakeForm = props => {
  const { handleSubmit, pristine, submitting, reset } = props
  return (

    <Card style={styles.card}>
      <form onSubmit={data => handleSubmit(data).then(reset)}>

        <AppBar title="Intake Form" />

        <CardHeader style={styles.header}>Volunteer Information</CardHeader>

        <div>
          <Field style={styles.field} name="volunteerName" component={MuiTextField} label="Volunteer Name"/>
        </div>

        <div>
          <Field style={styles.field} name="volunteerEmail" component={MuiTextField} label="Volunteer Email"/>
        </div>

        <Divider style={styles.divider}/>

        <CardHeader style={styles.header}>Client Information</CardHeader>

        <div>
          <Field style={styles.field} name="clientName" component={MuiTextField} label="Client Name"/>
        </div>

        <div>
          <Field style={styles.field} name="clientEmail" component={MuiTextField} label="Client Email"/>
        </div>

        <div>
          <Field style={styles.field} name="clientPhone" component={MuiTextField} label="Client Phone"/>
        </div>

        <CardTitle>Client Country of Origin:</CardTitle>
        <div>
          {/*TODO(ag|2.22.17): these should actually be checkboxes, and should be `clientCitizenship`*/}
          <Field style={styles.field} name="clientCountryOfOrigin" component={MuiRadioGroup}>
            <RadioButton value="Iran" label="Iran"/>
            <RadioButton value="Iraq" label="Iraq"/>
            <RadioButton value="Libya" label="Libya"/>
            <RadioButton value="Somalia" label="Somalia"/>
            <RadioButton value="Sudan" label="Sudan"/>
            <RadioButton value="Syria" label="Syria"/>
            <RadioButton value="Yemen" label="Yemen"/>
          </Field>
        </div>

        <div>
          <Field style={styles.field} name="airline" component={MuiTextField} label="Airline"/>
        </div>

        <div>
          <Field style={styles.field} name="flightNumber" component={MuiTextField} label="Flight Number"/>
        </div>

        {/*TODO(ag|2.22.17): this should be a date picker*/}
        <div>
          <Field style={styles.field} name="travelDate" component={MuiTextField} label="Date of Travel"/>
        </div>

        <CardTitle>Client Visa Type:</CardTitle>
        <div>

          <Field style={styles.field} name="clientVisaType" component={MuiRadioGroup}>
            <RadioButton value="refugee" label="Refugee"/>
            <RadioButton value="greenCard" label="Legal Permanent Resident (Green Card Holder)"/>
            <RadioButton value="student" label="Student Visa"/>
            <RadioButton value="tourist" label="TouristVisa"/>
            <RadioButton value="employment" label="Employment Visa"/>
            <RadioButton value="special" label="Special Immigrant Visa"/>
          </Field>
        </div>

        <div>
          <RaisedButton
            style={styles.submit}
            type="submit"
            label="Submit"
            disabled={pristine || submitting}
            primary
          />
        </div>

        <Divider style={styles.divider}/>
      
        <div>
          <Subheader>
             <a href={SOURCE_CODE_LINK}>Source Code</a>
          </Subheader>
        </div>

      
      </form>
    </Card>
  )
}


export default
reduxForm({
  form: 'IntakeForm',
  validate
})(IntakeForm)
