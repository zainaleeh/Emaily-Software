import React from 'react';

const Landing = () => {
    return (
        <section id="home" className="home_bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                        <div className="about_me_content">
                            <span>Hi, I'm</span>
                            <h1>Tayer Kader</h1>
                            <h4>A web designer based in new york</h4>
                            <p>Oi ami tader kader rabball. howa dile fuli na. tora mostani kom kor. na hole sala marbo akane
                                las porbe shohane. bujo nai bepar ta.</p>
                        </div>
                        <div className="about_btn">
                            <a className="home_btn" href="#skill">Download CV</a>
                            <a className="home_btn_two" href="#contact">Contact</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                        <div className="hero_img">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/hero-author.png`} className="img-fluid" alt="profile-picture" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Landing;
