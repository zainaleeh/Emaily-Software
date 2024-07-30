import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div class="col-md-6 col-sm-12 col-xs-12" key={survey._id}>
                    <div class="single_feature_one">
                        <div class="sf_top">
                            <h2 className='mt-0'><a href="#" data-bs-toggle="modal" data-bs-target="#serviceModal6">{survey.title}</a>
                            </h2>
                        </div>
                        <p>{survey.body}
                        </p>

                        <hr></hr>
                        <div className='d-flex justify-content-between'>
                            <div className='me-4'>
                                <i class="fa fa-check" aria-hidden="true"></i> : {survey.yes}
                            </div>
                            <div>
                                <i class="fa fa-times" aria-hidden="true"></i> : {survey.no}
                            </div>
                            <p className="">
                                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
}

function mapStateToProps({ surveys }) {
    return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
