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
                    component={SurveyField} // This component should be styled to match your theme
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
                    <div class="section-title-two mt-5 mb-3">
                        <h2>Create Your Survey</h2>
                    </div>
                    <div class="row">
                        <div class="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                            <div class="contact">
                                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} className="form">
                                    {this.renderFields()}
                                    <div className="col-md-12 d-flex justify-content-between">
                                        <Link to="/surveys" className="btn back_btn">
                                            <i class="fa fa-chevron-circle-left me-2" aria-hidden="true"></i>
                                            Cancel
                                        </Link>
                                        <button type="submit" className="btn home_btn">
                                            Next
                                            <i class="fa fa-chevron-circle-right ms-2" aria-hidden="true"></i>
                                        </button>
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

// Validation function
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
