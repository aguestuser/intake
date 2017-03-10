import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { RadioButton } from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import {MuiTextField, MuiRadioGroup} from './MuiFormComponents'
import {validate} from './intakeFormValidation'
import {Card} from 'material-ui/Card'
import AppBar from 'material-ui/AppBar'
import {SOURCE_CODE_LINK} from './constants'

const IntakeForm = props => {
  const { handleSubmit, pristine, submitting, reset } = props
  return (

    <div className="intake-form">

      <AppBar className="app-bar" title="Intake Form" />

      <Card className="form-wrapper">
        <form onSubmit={data => handleSubmit(data).then(reset)}>


          <section className="form-group">
            <div className="field-group">
              <h2 className="group-title">Volunteer Information</h2>
              <Field name="volunteerName" component={MuiTextField} label="Volunteer Name"/>
              <Field name="volunteerEmail" component={MuiTextField} label="Volunteer Email"/>
            </div>
          </section >

          <section className="form-group">

            <h2 className="group-title">Client Information</h2>

            <div className="field-group">
              <Field name="clientName" component={MuiTextField} label="Client Name"/>
              <Field name="clientEmail" component={MuiTextField} label="Client Email"/>
              <Field name="clientPhone" component={MuiTextField} label="Client Phone"/>
            </div>

            <div className="field-group">
              <h3 className="field-title">Client Country of Origin:</h3>
              {/*TODO(ag|2.22.17): these should actually be checkboxes, and should be `clientCitizenship`*/}
              <Field name="clientCountryOfOrigin" component={MuiRadioGroup}>
                <RadioButton value="Iran" label="Iran"/>
                <RadioButton value="Iraq" label="Iraq"/>
                <RadioButton value="Libya" label="Libya"/>
                <RadioButton value="Somalia" label="Somalia"/>
                <RadioButton value="Sudan" label="Sudan"/>
                <RadioButton value="Syria" label="Syria"/>
                <RadioButton value="Yemen" label="Yemen"/>
              </Field>
              <Field name="airline" component={MuiTextField} label="Airline"/>
              <Field name="flightNumber" component={MuiTextField} label="Flight Number"/>
              {/*TODO(ag|2.22.17): this should be a date picker*/}
              <Field name="travelDate" component={MuiTextField} label="Date of Travel"/>
            </div>

            <div className="field-group">
              <h3 className="field-title">Client Visa Type:</h3>
              <Field name="clientVisaType" component={MuiRadioGroup}>
                <RadioButton value="refugee" label="Refugee"/>
                <RadioButton value="greenCard" label="Legal Permanent Resident (Green Card Holder)"/>
                <RadioButton value="student" label="Student Visa"/>
                <RadioButton value="tourist" label="TouristVisa"/>
                <RadioButton value="employment" label="Employment Visa"/>
                <RadioButton value="special" label="Special Immigrant Visa"/>
              </Field>
            </div>

          </section>

          <section className="form-actions">
            <RaisedButton
              type="submit"
              label="Submit"
              disabled={pristine || submitting}
              primary
            />
          </section>

        </form>

        <footer className="page-footer">
          <Subheader>
             <a href={SOURCE_CODE_LINK}>Source Code</a>
          </Subheader>
        </footer>

      </Card>
    </div>
  )
}


export default
reduxForm({
  form: 'IntakeForm',
  validate
})(IntakeForm)
