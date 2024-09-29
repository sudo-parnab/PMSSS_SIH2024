const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    studentId: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    religion: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    altMobile: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    Name_of_qualifying_public_examination: {
        type: String,
        required: true,
    },
    Name_of_the_Board_Council_College_University: {
        type: String,
        required: true,
    },
    Roll_Number_of_last_eligible_Board_Council_College_University_examination_for_Scholarship:
        {
            type: String,
            required: true,
        },
    Passing_Year_Of_Standard_Board_Council_College_University_Examination: {
        type: String,
        required: true,
    },
    Total_marks_obtained: {
        type: Number,
        required: true,
    },
    Out_of: {
        type: Number,
        required: true,
    },
    Overall_percentage: {
        type: Number,
        required: true,
    },
    District: {
        type: String,
        required: true,
    },
    State: {
        type: String,
        required: true,
    },
    Name_Of_Institution: {
        type: String,
        required: true,
    },
    Name_of_Present_Course: {
        type: String,
        required: true,
    },
    Discipline_of_Course: {
        type: String,
        required: true,
    },
    Date_Of_Admission: {
        type: Date,
        required: true,
    },
    Duration_of_Course_In_years: {
        type: Number,
        required: true,
    },
    Total_income_of_family: {
        type: Number,
        required: true,
    },
    Father_Name: {
        type: String,
        required: true,
    },
    Mother_Name: {
        type: String,
        required: true,
    },
    Guardian_Name: {
        type: String,
        required: true,
    },
    Guardian_Occupation: {
        type: String,
        required: true,
    },
    Relation_with_Guardian: {
        type: String,
        required: true,
    },
    Caste: {
        type: String,
        required: true,
    },
    Weather_differently_Able: {
        type: String,
        required: true,
    },
    Any_Linguistic_Religious_minority_Community: {
        type: String,
        required: true,
    },
    House_No: {
        type: String,
        required: true,
    },
    Street_name: {
        type: String,
        required: true,
    },
    Town_Village: {
        type: String,
        required: true,
    },
    Post_Office: {
        type: String,
        required: true,
    },
    PIN_Code: {
        type: String,
        required: true,
    },
    IFSC_Code: {
        type: String,
        required: true,
    },
    Name_of_Bank: {
        type: String,
        required: true,
    },
    Branch_Name: {
        type: String,
        required: true,
    },
    A_C_No: {
        type: String,
        required: true,
    },
    Branch_Code: { type: String, required: true },
    MIRC_Code: {
        type: String,
        required: true,
    },
    Upload_Bank_Passbook_First_Page: {
        type: String,
        required: true,
    },
    Upload_Photo: {
        type: String,
        required: true,
    },
    Upload_Signature: {
        type: String,
        required: true,
    },
    Upload_Aadhaar_Card: {
        type: String,
        required: true,
    },
    Upload_Domicile_certificate: {
        type: String,
        required: true,
    },
    Upload_Mark_sheet_Last_qualifying_exam: {
        type: String,
        required: true,
    },
    Upload_Payment_Receipt: {
        type: String,
        required: true,
    },
    Upload_Income_Certificate: {
        type: String,
        required: true,
    },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
