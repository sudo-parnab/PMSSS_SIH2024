import './Help.css';
import helpimg  from '../assets/helpimg.png';
function Help() {
  return (
    <>
      <h1 id="helpmain">Need Help?</h1>
      <p id="helpmain">
        How can we help you out? Our team is standing by for service and
        support.
      </p>

      <div className="searchbar">
        <input type="text" placeholder="Search Keywords" />
      </div>
      <div className="faq">
        {" "}
        <h1 id="faq">FAQS</h1>
        <p id="faq">
          Frequently Asked Questions. <br /> We’ve got instant answers.
        </p>
      </div>
      <div className="helpcontainer">
        <div className="content">
          <div className="helpcard">
            <details>
              <summary>
                What courses are covered under the PMSSS scholarship?{" "}
              </summary>
              <p>
                The scholarship supports a range of professional courses,
                including engineering, medical, dental, nursing, and other
                vocational courses. It does not generally cover undergraduate or
                postgraduate courses that are not in the professional category.
              </p>
            </details>
          </div>

          <div className="helpcard">
            <details>
              <summary>
                Is there an application fee for the PMSSS scholarship?{" "}
              </summary>
              <p>
                {" "}
                No, there is typically no application fee for the PMSSS
                scholarship.
              </p>
            </details>
          </div>
          <div className="helpcard">
            <details>
              <summary>
                What expenses are covered by the PMSSS scholarship?{" "}
              </summary>
              <p>
                {" "}
                The scholarship covers: <br /> • Tuition fees. <br />• Hostel
                fees. <br /> • Books and other educational expenses. <br /> • A
                stipend for living expenses, if applicable.
              </p>
            </details>
          </div>
          <div className="helpcard">
            <details>
              <summary>How is the scholarship amount disbursed? </summary>
              <p>
                {" "}
                The scholarship amount is generally disbursed directly to the
                student's bank account or to the educational institution,
                depending on the guidelines set by the scheme.
              </p>
            </details>
          </div>
          <div className="helpcard">
            <details>
              <summary>
                Can I get double scholarship - PMSSS and National Scholarship?{" "}
              </summary>
              <p>
                {" "}
                A student can apply for as many scholarships as he/she wants.
                However, they can get only one scholarship at a time if they get
                selected.
              </p>
            </details>
          </div>
          <div className="helpcard">
            <details>
              <summary>
                Is attending online counselling mandatory for eligible students
                for availing benefits under PMSSS?{" "}
              </summary>
              <p>
                {" "}
                Yes. Students must attend online counselling in the
                General/Professional/Engineering/Medical stream to take
                admission through centralised counselling and avail benefits
                under PMSSS.
              </p>
            </details>
          </div>
          <div className="helpcard">
            <details>
              <summary>
                What Format Or Size Of Photo And Signature To Upload In Website
                For PMSSS Scholarship?{" "}
              </summary>
              <p>
                {" "}
                Both photo & signature should be in .JPG /.PDF/.PNG format with
                size of the file should be less than 2 MB.
              </p>
            </details>
          </div>
          <div className="helpcard">
            <details>
              <summary>
                I Have Taken Admission Under Management Quota, Am I Eligible For
                PMSSS Scholarship?{" "}
              </summary>
              <p>
                {" "}
                No, Candidates taking admission under Management Quota or by
                Agents / NGO are not eligible for PMSSS Scholarship.
              </p>
            </details>
          </div>
          <div className="helpcard">
            <details>
              <summary>
                Is there a provision for PMSSS scholarship renewal?{" "}
              </summary>
              <p>
                {" "}
                Yes, PMSSS scholarships can be renewed for subsequent academic
                years based on the following conditions: <br /> • Students
                failing to advance to the next academic level can keep their
                scholarship for the following year, however a second consecutive
                failure results in forfeiture without renewal. <br /> • In cases
                of illness or unexpected incidents, the renewal process requires
                the submission of a medical certificate and supporting evidence,
                with assessment and certification by the Head of the
                Institution. • Scholarships will not be granted twice for the
                same academic year, even if renewed. <br />• If a student fails
                for a second consecutive time, their scholarship will be
                forfeited, and subsequent renewals will not be permitted.
              </p>
            </details>
          </div>
        </div>
        <img src={helpimg} alt="" />
      </div>
      <div className="lasthelp">
        <h1 id="last">Still Have Questions? </h1>
        <p id="last">
          If you cannot find the answer to your questions in our FAQ. <br /> You
          can always contact us we’ll answers you shortly.
        </p>
      </div>

      <div className="button">
        <button className="contact">Contact Us</button>
      </div>
    </>
  );
}
export default Help;