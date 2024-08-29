// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name} className='mt-2'>
                <h6>{label} : </h6>
                <div>
                    <p>{formValues[name]}</p>
                </div>
            </div>
        );
    });

    return (
        <div class="contact_area section-padding">
            <div class="container">
                <div class="row ">
                    <div class="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                        <div class="contact w-50 w-md-100 mx-auto bg-white p-3 mt-5 rounded shadow">
                            <div class="section-title-two mb-3 mt-3 text-center">
                                <h4>Please confirm your entries</h4>
                            </div>
                            {reviewFields}
                            <div className="col-md-12 d-flex justify-content-between mt-3">
                                <button className="btn back_btn" onClick={onCancel}>Back</button>

                                <button className="btn home_btn" onClick={() => submitSurvey(formValues, history)}>
                                    Send Survey
                                    <i class="fa fa-chevron-circle-right mx-2" aria-hidden="true"></i>
                                    Email
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

//we're fetching the input info and transferring to form review
function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));

