import React, {} from 'react-bootstrap';
import logo from "../assets/images/ISACA_STUDENTGROUP_anniv_logo_4C_template.png"
import '../assets/scss/_About.scss';
const About = () => {
    const styleObj = {
        fontSize: 25,
        color: "#ffffff",
        textAlign: "center",
    }

    return(
                 <section id="pricing" className="ud-pricing aw-dark-back">
                            <div className = "ud-section-title text-center neonText mx-auto">
                            <h2 data-aos="zoom-in-up">
                                    WHAT IS iCS HACK THE WORLD?</h2>
                            </div>
                            <div className="Space">
                            <div data-aos="zoom-in-up">
                            <div style={styleObj}>
                            iCS Hack the World is a 24-hour Capture the Flag competition that will put your hacking skills to the ultimate test!
                             </div>
                             </div>
                            </div>
                             {/* -----------------------------------------/Cards----- */}
                             <div class="container">
                               <div class="animated fadeInDown">
                               <div class="card">
<div class="card-group">
  <div class="card mb-4 border-0">
    <div class="card-body">
    <div data-aos="fade-right">
      <h3 class="card-title">Who is it for?</h3>
      <p class="card-text">Undergraduates from both state universities and private higher education institutes in Sri Lanka.</p>
      </div>
    </div>
  </div>
  <div class="card mb-4 border-0">
    <div class="card-body">
    <div data-aos="fade-right">
      <h3 class="card-title">When is it?</h3>
      <p class="card-text">On the 16th January 2021 from 8 am onwards.</p>
      </div>
    </div>
  </div>
  <div class="card mb-4 border-0">
    <div class="card-body">
    <div data-aos="fade-right">
      <h3 class="card-title">Can I bring backup?</h3>
      <p class="card-text">It is for teams of 4 so you'd better.</p>
      </div>
    </div>
  </div>
</div>
<div class="card-group">
  <div class="card mb-4 border-0">
    <div class="card-body">
    <div data-aos="fade-right">
      <h3 class="card-title">Where will it take place?</h3>
      <p class="card-text">Ever heard of Facebook CTF platform?</p>
      </div>
    </div>
  </div>
  <div class="card mb-4 border-0">
    <div class="card-body">
    <div data-aos="fade-right">
      <h3 class="card-title">No experience?</h3>
      <p class="card-text">We'll lend a hand. Join the sessions conducted by our sponsors on the 9th January 2021 via the online stream. But that's all the help you're gonna get from our end!</p>
    </div>
    </div>
  </div>
  <div class="card mb-4 border-0">
    <div class="card-body">
    <div data-aos="fade-right">
      <h3 class="card-title">Will we win anything?</h3>
      <p class="card-text">Of course! Loads of gifts coming your way</p>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>

<div className="Space">
                        <div style={styleObj}>
                        <div data-aos="fade-up">
                        So put together a team, have a little pep talk, and get ready to start hacking!
                        </div>
                        </div>
                        </div> 
                        <div className="Space">
                        <img src={logo} alt="ISG Logo" />
                        </div>
        

        </section>

    );
}

export default About