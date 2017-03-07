import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { RadioButton } from 'material-ui/RadioButton'
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import {MuiTextField, MuiRadioGroup} from './MuiFormComponents'
import {validate} from './signupFormValidation'
import {Card, CardHeader, _} from 'material-ui/Card'
import AppBar from 'material-ui/AppBar'

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
    }
}

const SignupForm = props => {
    const { handleSubmit, pristine, submitting, reset } = props

    return (

        <Card style={styles.card}>
            <form onSubmit={data => handleSubmit(data).then(reset)}>

                <AppBar title="Signup Form" />

                <CardHeader style={styles.header}>Alertee Contact Information</CardHeader>

                <div>
                    <Field style={styles.field} name="signupName" component={MuiTextField} label="Name"/>
                </div>

                <div>
                    <Field style={styles.field} name="signupPhone" component={MuiTextField} label="Phone Number"/>
                </div>

                <div>
                    <Field style={styles.field} name="signupEmail" component={MuiTextField} label="Email"/>
                </div>

                <div>
                    <Field style={styles.field} name="signupZip" component={MuiTextField} label="Zip Code"/>
                </div>

                <Divider style={styles.divider}/>


                <CardHeader style={styles.header}>Alertee Affiliation</CardHeader>

            <div>

                <Field style={styles.field} name="affiliation" component={MuiRadioGroup}>
                    <RadioButton value="LocalOrg" label="Local Organization"/>
                    <RadioButton value="VolunteerLawyer" label="Volunteer Lawyer"/>
                    <RadioButton value="Immigrant" label="Immigrant"/>
                    <RadioButton value="Ally" label="Ally"/>

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

            </form>
        </Card>
    )
}


export default
    reduxForm({
        form: 'SignupForm',
        validate
    })(SignupForm)
