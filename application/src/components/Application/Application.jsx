import React, { useState } from "react";
import "./ApplicationForm.css";
import { useNavigate } from "react-router-dom";

function Application() {
  const [applicationData, setApplicationData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    studentId: "",
    gender: "",
    nationality: "",
    religion: "",
    address: "",
    region: "",
    mobile: "",
    altMobile: "",
    email: "",
    Name_of_qualifying_public_examination: "",
    Name_of_the_Board_Council_College_University: "",
    Roll_Number_of_last_eligible_Board_Council_College_University_examination_for_Scholarship:
      "",
    Passing_Year_Of_Standard_Board_Council_College_University_Examination: "",
    Total_marks_obtained: "",
    Out_of: "",
    Overall_percentage: "",
    District: "",
    State: "",
    Name_Of_Institution: "",
    Name_of_Present_Course: "",
    Discipline_of_Course: "",
    Date_Of_Admission: "",
    Duration_of_Course_In_years: "",
    Total_income_of_family: "",
    Father_Name: "",
    Mother_Name: "",
    Guardian_Name: "",
    Guardian_Occupation: "",
    Relation_with_Guardian: "",
    Caste: "",
    Weather_differently_Able: "",
    Any_Linguistic_Religious_minority_Community: "",
    House_No: "",
    Street_name: "",
    Town_Village: "",
    Post_Office: "",
    PIN_Code: "",
    IFSC_Code: "",
    Name_of_Bank: "",
    Branch_Name: "",
    A_C_No: "",
    Branch_Code: "",
    MIRC_Code: "",
    Upload_Bank_Passbook_First_Page: "",
    Upload_Photo: "",
    Upload_Signature: "",
    Upload_Aadhaar_Card: "",
    Upload_Domicile_certificate: "",
    Upload_Mark_sheet_Last_qualifying_exam: "",
    Upload_Payment_Receipt: "",
    Upload_Income_Certificate: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setApplicationData({ ...applicationData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(applicationData);
    try {
      const response = await fetch(
        "http://localhost:3000/application/apply",
        // "https://pmsss-backend.onrender.com/application/apply",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(applicationData),
        }
      );
      if (response.ok) {
        setApplicationData({
          firstName: "",
          middleName: "",
          lastName: "",
          dob: "",
          studentId: "",
          gender: "",
          nationality: "",
          religion: "",
          address: "",
          region: "",
          mobile: "",
          altMobile: "",
          email: "",
          Name_of_qualifying_public_examination: "",
          Name_of_the_Board_Council_College_University: "",
          Roll_Number_of_last_eligible_Board_Council_College_University_examination_for_Scholarship:
            "",
          Passing_Year_Of_Standard_Board_Council_College_University_Examination:
            "",
          Total_marks_obtained: "",
          Out_of: "",
          Overall_percentage: "",
          District: "",
          State: "",
          Name_Of_Institution: "",
          Name_of_Present_Course: "",
          Discipline_of_Course: "",
          Date_Of_Admission: "",
          Duration_of_Course_In_years: "",
          Total_income_of_family: "",
          Father_Name: "",
          Mother_Name: "",
          Guardian_Name: "",
          Guardian_Occupation: "",
          Relation_with_Guardian: "",
          Caste: "",
          Weather_differently_Able: "",
          Any_Linguistic_Religious_minority_Community: "",
          House_No: "",
          Street_name: "",
          Town_Village: "",
          Post_Office: "",
          PIN_Code: "",
          IFSC_Code: "",
          Name_of_Bank: "",
          Branch_Name: "",
          A_C_No: "",
          Branch_Code: "",
          MIRC_Code: "",
          Upload_Bank_Passbook_First_Page: "",
          Upload_Photo: "",
          Upload_Signature: "",
          Upload_Aadhaar_Card: "",
          Upload_Domicile_certificate: "",
          Upload_Mark_sheet_Last_qualifying_exam: "",
          Upload_Payment_Receipt: "",
          Upload_Income_Certificate: "",
        });
        navigate("/profile");
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="formcontainer">
      <h1>Application Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-group">
            <label htmlFor="FirstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={applicationData.firstName}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label htmlFor="Middle Name">Middle Name</label>
            <input
              type="text"
              name="middleName"
              id="middleName"
              placeholder="Middle Name"
              value={applicationData.middleName}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label htmlFor="Last Name">Last name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={applicationData.lastName}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              name="dob"
              id="dob"
              placeholder="dob"
              value={applicationData.dob}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label htmlFor="StudentId">Student ID</label>
            <input
              type="text"
              name="studentId"
              id="studentId"
              placeholder="student ID"
              value={applicationData.studentId}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <label htmlFor="Gender">Gender</label>
            <input
              type="text"
              name="gender"
              id="gender"
              placeholder="gender"
              value={applicationData.gender}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label htmlFor="Nationality">Nationality</label>
            <input
              type="text"
              name="nationality"
              id="nationality"
              placeholder="nationality"
              value={applicationData.nationality}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label htmlFor="Religion">Religion</label>
            <input
              type="text"
              name="religion"
              id="religion"
              placeholder="religion"
              value={applicationData.religion}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <label htmlFor="address">Permanent Home Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="address"
              value={applicationData.address}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label htmlFor="District/Region">District/Region</label>
            <input
              type="text"
              name="region"
              id="region"
              placeholder="region"
              value={applicationData.region}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <label htmlFor="Mobile Number">Mobile Number</label>
            <input
              type="number"
              name="mobile"
              id="mobile"
              placeholder="+91"
              value={applicationData.mobile}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label htmlFor="Alternative Mobile number">
              Alternative Mobile Number
            </label>
            <input
              type="number"
              name="altMobile"
              id="mobile"
              placeholder="+91"
              value={applicationData.altMobile}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label htmlFor="Email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="abc@gmail.com"
              value={applicationData.email}
              onChange={handleInput}
            />
          </div>
        </div>
        <p className="notation">
          <span style={{ color: "red" }}>*</span> Basic Details
        </p>
        <hr className="bar" />
        {/* Details of Last Eligible Qualifying Board/Council/College/University Examination for Scholarship */}
        {/* first row  */}
        <div className="row">
          <div className="input-group">
            <label htmlFor="Name of qualifying public exam">
              Name of qualifying public examination
            </label>
            <input
              type="text"
              name="Name_of_qualifying_public_examination"
              id="Name_of_qualifying_public_examination"
              placeholder="Name of qualifying public examination"
              value={applicationData.Name_of_qualifying_public_examination}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label htmlFor="Name of the Board/Council/College/University">
              Name of the Board/Council/College/University
            </label>
            <input
              type="text"
              name="Name_of_the_Board_Council_College_University"
              id="Name_of_the_Board_Council_College_University"
              placeholder="Name of the Board/Council/College/University"
              value={
                applicationData.Name_of_the_Board_Council_College_University
              }
              onChange={handleInput}
            />
          </div>
        </div>
        {/* second row  */}
        <div className="input-group2">
          <label
            htmlFor="Roll Number of last eligible Board/Council/College/University
            examination for Scholarship"
          >
            Roll Number of last eligible Board/Council/College/University
            examination for Scholarship
          </label>
          <input
            type="text"
            name="Roll_Number_of_last_eligible_Board_Council_College_University_examination_for_Scholarship"
            id="Roll_Number_of_last_eligible_Board_Council_College_University_examination_for_Scholarship"
            placeholder="Roll Number"
            value={
              applicationData.Roll_Number_of_last_eligible_Board_Council_College_University_examination_for_Scholarship
            }
            onChange={handleInput}
          />
        </div>
        {/* third row  */}
        <div className="input-group2">
          <label
            htmlFor=" Passing Year Of Standard Board/Council/College/University
            Examination"
          >
            Passing Year Of Standard Board/Council/College/University
            Examination
          </label>
          <input
            type="year"
            name="Passing_Year_Of_Standard_Board_Council_College_University_Examination"
            id="Passing_Year_Of_Standard_Board_Council_College_University_Examination"
            placeholder="2022"
            value={
              applicationData.Passing_Year_Of_Standard_Board_Council_College_University_Examination
            }
            onChange={handleInput}
          />
        </div>
        {/* fourth row  */}
        <div className="row">
          <div className="input-group">
            <label htmlFor="Total marks obtained">Total marks obtained</label>
            <input
              type="text"
              name="Total_marks_obtained"
              id="Total_marks_obtained"
              placeholder="100"
              value={applicationData.Total_marks_obtained}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label htmlFor="Out of">Out of</label>
            <input
              type="text"
              name="Out_of"
              id="Out_of"
              placeholder="100"
              value={applicationData.Out_of}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label htmlFor="Overall percentage(%)">Overall percentage(%)</label>
            <input
              type="text"
              name="Overall_percentage"
              id="Overall_percentage"
              placeholder="100%"
              value={applicationData.Overall_percentage}
              onChange={handleInput}
            />
          </div>
        </div>
        <p className="notation">
          <span style={{ color: "red" }}>*</span> Details of Last Eligible
          Qualifying Board/Council/College/University Examination for
          Scholarship
        </p>
        <hr className="bar" />

        {/* Present Course of Study */}

        {/* first row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="Select District">Select District</label>
            <input
              type="text"
              name="District"
              id="District"
              placeholder="District"
              value={applicationData.District}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label htmlFor="Select State">Select State</label>
            <input
              type="text"
              name="State"
              id="State"
              placeholder="State"
              value={applicationData.State}
              onChange={handleInput}
            />
          </div>
        </div>

        {/* second row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="Name Of Institution">Name Of Institution</label>
            <input
              type="text"
              name="Name_Of_Institution"
              id="Name_Of_Institution"
              placeholder="Institution Name"
              value={applicationData.Name_Of_Institution}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label htmlFor="Name of Present Course">
              Name of Present Course
            </label>
            <input
              type="text"
              name="Name_of_Present_Course"
              id="Name_of_Present_Course"
              placeholder="Present Course"
              value={applicationData.Name_of_Present_Course}
              onChange={handleInput}
            />
          </div>
        </div>

        {/* third row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="Discipline of Course">Discipline of Course</label>
            <input
              type="text"
              name="Discipline_of_Course"
              id="Discipline_of_Course"
              placeholder="Discipline"
              value={applicationData.Discipline_of_Course}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label htmlFor="Date Of Admission">Date Of Admission</label>
            <input
              type="date"
              name="Date_Of_Admission"
              id="Date_Of_Admission"
              placeholder="Present Course"
              value={applicationData.Date_Of_Admission}
              onChange={handleInput}
            />
          </div>
        </div>

        {/* fourth row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="Duration of Course(In years)">
              Duration of Course(In years)
            </label>
            <input
              type="text"
              name="Duration_of_Course_In_years"
              id="Duration_of_Course_In_years"
              placeholder="3/4/5"
              value={applicationData.Duration_of_Course_In_years}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label
              htmlFor=" Total income of family(in rupees,from all sources for the period
              from JAN,2024)"
            >
              Total income of family(in rupees,from all sources for the period
              from JAN,2024)
            </label>
            <input
              type="text"
              name="Total_income_of_family"
              id="Total_income_of_family"
              placeholder="100000"
              value={applicationData.Total_income_of_family}
              onChange={handleInput}
            />
          </div>
        </div>
        <p className="notation">
          <span style={{ color: "red" }}>*</span> Present Course of Study
        </p>
        <hr className="bar" />

        {/* Personal Details  */}

        {/* first row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="Father'sName">Father’s Name</label>
            <input
              type="text"
              name="Father_Name"
              id="Father_Name"
              placeholder="John Doe"
              value={applicationData.Father_Name}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label htmlFor="Mother’s name">Mother’s name</label>
            <input
              type="text"
              name="Mother_Name"
              id="Mother_Name"
              placeholder="Jane Doe"
              value={applicationData.Mother_Name}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label htmlFor="Guardian’s Name">Guardian’s Name</label>
            <input
              type="text"
              name="Guardian_Name"
              id="Guardian_Name"
              placeholder="John Doe"
              value={applicationData.Guardian_Name}
              onChange={handleInput}
            />
          </div>
        </div>

        {/* second row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="Occupation of Guardian">
              Occupation of Guardian
            </label>
            <input
              type="text"
              name="Guardian_Occupation"
              id="Guardian_Occupation"
              placeholder="Occupation"
              value={applicationData.Guardian_Occupation}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label htmlFor="Relation with Guardian">
              Relation with Guardian
            </label>
            <input
              type="text"
              name="Relation_with_Guardian"
              id="Relation_with_Guardian"
              placeholder="Relation"
              value={applicationData.Relation_with_Guardian}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label htmlFor="Caste">Caste</label>
            <input
              type="text"
              name="Caste"
              id="Caste"
              placeholder="Caste"
              value={applicationData.Caste}
              onChange={handleInput}
            />
          </div>
        </div>

        {/* third row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="Weather differently Able">
              Weather differently Able
            </label>
            <input
              type="text"
              name="Weather_differently_Able"
              id="Weather_differently_Able"
              placeholder="Yes/No"
              value={applicationData.Weather_differently_Able}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label htmlFor="Any Linguistic/Religious minority Community">
              Any Linguistic/Religious minority Community
            </label>
            <input
              type="text"
              name="Any_Linguistic_Religious_minority_Community"
              id="Any_Linguistic_Religious_minority_Community"
              placeholder="Yes/No"
              value={
                applicationData.Any_Linguistic_Religious_minority_Community
              }
              onChange={handleInput}
            />
          </div>
        </div>

        <p className="notation">
          <span style={{ color: "red" }}>*</span> Personal Details
        </p>
        <hr className="bar" />

        {/* Permanent Address */}

        {/* first row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="House No">House No</label>
            <input
              type="text"
              name="House_No"
              id="House_No"
              placeholder="House No"
              value={applicationData.House_No}
              onChange={handleInput}
              // placeholder="Occupation"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Street name">Street name</label>
            <input
              type="text"
              name="Street_name"
              id="Street_name"
              placeholder="Street name"
              value={applicationData.Street_name}
              onChange={handleInput}
              // placeholder="Relation"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Town/Village">Town/Village</label>
            <input
              type="text"
              name="Town_Village"
              id="Town_Village"
              placeholder="Town/Village"
              value={applicationData.Town_Village}
              onChange={handleInput}
              // placeholder="Caste"
            />
          </div>
        </div>

        {/* second row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="Post Office">Post Office</label>
            <input
              type="text"
              name="Post_Office"
              id="Post_Office"
              placeholder="Post Office"
              value={applicationData.Post_Office}
              onChange={handleInput}
              // placeholder="Occupation"
            />
          </div>
          <div className="input-group">
            <label htmlFor="PIN Code">PIN Code</label>
            <input
              type="text"
              name="PIN_Code"
              id="PIN_Code"
              placeholder="PIN Code"
              value={applicationData.PIN_Code}
              onChange={handleInput}
              // placeholder="Relation"
            />
          </div>
          <div className="input-group">
            <label htmlFor="District">District</label>
            <input
              type="text"
              name="District"
              id="District"
              placeholder="District"
              value={applicationData.District}
              onChange={handleInput}
              // placeholder="Caste"
            />
          </div>
        </div>

        {/* third row */}
        <div className="input-group2">
          <label htmlFor="District">State</label>
          <input
            type="text"
            name="State"
            id="State"
            placeholder="State"
            value={applicationData.State}
            onChange={handleInput}
            // placeholder="Caste"
          />
        </div>
        <p className="notation">
          <span style={{ color: "red" }}>*</span> Permanent Address
        </p>
        <hr className="bar" />

        {/* Bank Details */}

        {/* first row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="IFSC Code">IFSC Code</label>
            <input
              type="text"
              name="IFSC_Code"
              id="IFSC_Code"
              placeholder="IFSC Code"
              value={applicationData.IFSC_Code}
              onChange={handleInput}
              // placeholder="Occupation"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Name of Bank">Name of Bank</label>
            <input
              type="text"
              name="Name_of_Bank"
              id="Name_of_Bank"
              placeholder="Name of Bank"
              value={applicationData.Name_of_Bank}
              onChange={handleInput}
              // placeholder="Relation"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Branch Name">Branch Name</label>
            <input
              type="text"
              name="Branch_Name"
              id="Branch_Name"
              placeholder="Branch Name"
              value={applicationData.Branch_Name}
              onChange={handleInput}
              // placeholder="Caste"
            />
          </div>
        </div>

        {/* second row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="A/C No.">A/C No.</label>
            <input
              type="text"
              name="A_C_No"
              id="A_C_No"
              placeholder="A/C No."
              value={applicationData.A_C_No}
              onChange={handleInput}
              // placeholder="Occupation"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Branch Code">Branch Code</label>
            <input
              type="text"
              name="Branch_Code"
              id="Branch_Code"
              placeholder="Branch Code"
              value={applicationData.Branch_Code}
              onChange={handleInput}
              // placeholder="Relation"
            />
          </div>
          <div className="input-group">
            <label htmlFor="MIRC Code">MIRC Code</label>
            <input
              type="text"
              name="MIRC_Code"
              id="MIRC_Code"
              placeholder="MIRC Code"
              value={applicationData.MIRC_Code}
              onChange={handleInput}
              // placeholder="Caste"
            />
          </div>
        </div>

        {/* third row  */}

        <div className="input-group2">
          <label htmlFor="Upload Bank Passbook (First page) ">
            Upload Bank Passbook (First page){" "}
          </label>
          <input
            type="file"
            name="Upload_Bank_Passbook_First_Page"
            id="Upload_Bank_Passbook_First_Page"
            placeholder="Upload Bank Passbook (First page) "
            value={applicationData.Upload_Bank_Passbook_First_Page}
            onChange={handleInput}
          />
          <p className="notation">
            <span style={{ color: "red" }}>*</span> Size Less Than 60 kb
          </p>
        </div>
        <p className="notation">
          <span style={{ color: "red" }}>*</span> Bank Details
        </p>
        <hr className="bar" />

        {/* upload section*/}

        {/* first row  */}

        <div className="row">
          <div className="input-group2">
            <label htmlFor="Upload Photo">Upload Photo</label>
            <input
              type="file"
              name="Upload_Photo"
              id="Upload_Photo"
              placeholder="Upload Photo"
              value={applicationData.Upload_Photo}
              onChange={handleInput}
            />
            <p className="notation">
              <span style={{ color: "red" }}>*</span> Size Less Than 60 kb
            </p>
          </div>
          <div className="input-group2">
            <label htmlFor="Upload Photo">Upload Signature</label>
            <input
              type="file"
              name="Upload_Signature"
              id="Upload_Signature"
              placeholder="Upload Signature"
              value={applicationData.Upload_Signature}
              onChange={handleInput}
            />
            <p className="notation">
              <span style={{ color: "red" }}>*</span> Size Less Than 60 kb
            </p>
          </div>
        </div>

        {/* second row  */}

        <div className="row">
          <div className="input-group2">
            <label htmlFor="Upload Aadhaar Card">Upload Aadhaar Card</label>
            <input
              type="file"
              name="Upload_Aadhaar_Card"
              id="Upload_Aadhaar_Card"
              placeholder="Upload Aadhaar Card"
              value={applicationData.Upload_Aadhaar_Card}
              onChange={handleInput}
            />
            <p className="notation">
              <span style={{ color: "red" }}>*</span> Size Less Than 60 kb
            </p>
          </div>
          <div className="input-group2">
            <label htmlFor="Upload Photo">Upload Domicile certificate</label>
            <input
              type="file"
              name="Upload_Domicile_certificate"
              id="Upload_Domicile_certificate"
              placeholder="Upload Domicile certificate"
              value={applicationData.Upload_Domicile_certificate}
              onChange={handleInput}
            />
            <p className="notation">
              <span style={{ color: "red" }}>*</span> Size Less Than 60 kb
            </p>
          </div>
        </div>

        {/* third row  */}

        <div className="row">
          <div className="input-group2">
            <label htmlFor="Upload Mark sheet (Last qualifying exam)">
              Upload Mark sheet (Last qualifying exam)
            </label>
            <input
              type="file"
              name="Upload_Mark_sheet_Last_qualifying_exam"
              id="Upload_Mark_sheet_Last_qualifying_exam"
              placeholder="Upload Mark sheet (Last qualifying exam)"
              value={applicationData.Upload_Mark_sheet_Last_qualifying_exam}
              onChange={handleInput}
            />
            <p className="notation">
              <span style={{ color: "red" }}>*</span> Size Less Than 60 kb
            </p>
          </div>
          <div className="input-group2">
            <label htmlFor="Upload Payment Receipt">
              Upload Payment Receipt
            </label>
            <input
              type="file"
              name="Upload_Payment_Receipt"
              id="Upload_Payment_Receipt"
              placeholder="Upload Payment Receipt"
              value={applicationData.Upload_Payment_Receipt}
              onChange={handleInput}
            />
            <p className="notation">
              <span style={{ color: "red" }}>*</span> Size Less Than 60 kb
            </p>
          </div>
        </div>

        {/* fourth row  */}

        <div className="row">
          <div className="input-group2">
            <label htmlFor="Upload Income Certificate ">
              Upload Income Certificate
            </label>
            <input
              type="file"
              name="Upload_Income_Certificate"
              id="Upload_Income_Certificate"
              placeholder="Upload Income Certificate "
              value={applicationData.Upload_Income_Certificate}
              onChange={handleInput}
              // placeholder="Upload Mark sheet (Last qualifying exam)"
            />
            <p className="notation">
              <span style={{ color: "red" }}>*</span> Size Less Than 60 kb
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            width: "200px",
            left: "50%",
            height: "40px",
            marginLeft: "45%",
            color: "white",
            background: "linear-gradient(to bottom,  #EFB506, #FFC107)",
            borderRadius: "8px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Application;
