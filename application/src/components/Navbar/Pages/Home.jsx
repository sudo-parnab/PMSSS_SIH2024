import Generaldegreeprograms from "../assets/Generaldegreeprograms.png";
import Highersecondary from "../assets/Highersecondary.jpg";
import Lateral from "../assets/Lateral.jpg";
import residance from "../assets/residance.jpg";
import Results from "../assets/Results.jpg";
import "./Home.css";
function Home() {
  return (
    <>
      <section className="banner">
        {/* <div className="banner-content">
                    <h1>
                        Enroll at your <br />
                        dream university
                    </h1>
                    <button className="apply-button">Apply Now</button>
                </div> */}
      </section>

      <div className="App">
        <section className="how-to-apply">
          <h2>How To Apply</h2>
          <div className="steps-container">
            <div className="step">
              <h1>01</h1>
              <h4>Click on Apply</h4>
              <p>Click on the apply button to start the application process</p>
            </div>
            <div className="step2">
              <h1>02</h1>
              <h4>Log In/Sign Up</h4>
              <p>
                Log in if you already have an account. If you don’t have an
                account, sign up to create one.
              </p>
            </div>
            <div className="step">
              <h1>03</h1>
              <h4>Fill the Forms</h4>
              <p>
                Fill all the forms presented with precise and credible
                information.
              </p>
            </div>
            <div className="step2">
              <h1>04</h1>
              <h4>Submit Form</h4>
              <p>
                Click on the submit button after filling all the forms with the
                needed data.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="Requirment">
        <section className="requirements-section">
          <h2>Requirements</h2>
          <div className="requirements-container">
            <div className="requirement-card">
              <img src={residance} alt="Residence" />
              <h4>Residence</h4>
              <p>
                Must be a proud resident of Jammu & Kashmir or Ladakh to apply
              </p>
            </div>
            <div className="requirement-card">
              <img src={Highersecondary} alt="Higher Secondary" />
              <h4>Higher Secondary</h4>
              <p>
                Student must have completed 12th grade from JKBOSE or CBSE
                schools in J&K or Ladakh
              </p>
            </div>
            <div className="requirement-card">
              <img src={Results} alt="Results" />
              <h4>Results</h4>
              <p>
                Applicants must have scored at least 60% in their most recent
                exam
              </p>
            </div>
            <div className="requirement-card">
              <img src={Lateral} alt="Lateral" />
              <h4>Lateral</h4>
              <p>
                Students must have a 10+3 diploma J&K Polytechnic to enter in
                the 2nd year
              </p>
            </div>
          </div>
        </section>
        <div className="degree">
          <img src={Generaldegreeprograms} alt="General Degree Programs" />
        </div>
      </div>
    </>
  );
}
export default Home;
