import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
    return (
        <section id="service" class="marketing_content_area section-padding">
            <div class="container">
                <div class="row mt-2">
                    <SurveyList />
                </div>
            </div>
            <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                </Link>
            </div>
        </section>

    );
};

export default Dashboard;