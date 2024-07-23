import React from 'react';

const Landing = () => {
    return (
        <section id="home" class="home_bg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-sm-6 col-xs-12">
                        <div class="about_me_content">
                            <span>Hi, I'm</span>
                            <h1>Tayer Kader</h1>
                            <h4>A web designer based in new york</h4>
                            <p>Oi ami tader kader rabball. howa dile fuli na. tora mostani kom kor. na hole sala marbo akane
                                las porbe shohane. bujo nai bepar ta.</p>
                        </div>
                        <div class="about_btn">
                            <a class="home_btn" href="#skill">Download CV</a>
                            <a class="home_btn_two" href="#contact">Contact</a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-xs-12">
                        <div class="hero_img">
                            <img src="%PUBLIC_URL%/assets/img/hero-author.png" class="img-fluid" alt="profile-picture" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Landing;
