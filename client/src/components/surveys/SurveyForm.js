import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return (
                <Field
                    key={name}
                    component={SurveyField}
                    type="text"
                    label={label}
                    name={name}
                />
            );
        });
    }

    render() {
        return (
            <div class="contact_area section-padding">
                <div class="container">
                    <div class="section-title-two">
                        <h2>Send your message.</h2>
                    </div>
                    <div class="row">
                        <div class="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                            <div class="contact">
                                <form class="form" name="enq" method="post" action="contact.php" onsubmit="return validation();">
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label>Name</label>
                                            <input type="text" name="name" class="form-control" placeholder="Your Name" required="required"></input>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>Your Email</label>
                                            <input type="email" name="email" class="form-control" placeholder="Your Email" required="required"></input>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label>Your Subject</label>
                                            <input type="text" name="subject" class="form-control" placeholder="Subject" required="required"></input>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label>Your Message</label>
                                            <textarea rows="6" name="message" class="form-control" placeholder="Your Message" required="required"></textarea>
                                        </div>
                                        <div class="col-md-12 text-center">
                                            <button type="submit" value="Send message" name="submit" id="submitButton" class="home_btn" title="Submit Your Message!">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//we're validating the inputs here
function validate(values) {
    const errors = {};

    _.each(formFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'You must provide a value';
        }
    });

    errors.recipients = validEmails(values.recipients || '');
    return errors;
}
export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false,
})(SurveyForm);
