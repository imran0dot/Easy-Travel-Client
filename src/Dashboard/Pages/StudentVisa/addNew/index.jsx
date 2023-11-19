import Form from "../../../Components/Form";
const AddStudentVisa = ({putApi}) => {
    return (
        <div>
            <Form api={{type: putApi ? "put" : "post", apiUrl: putApi? putApi : "student-visa"}} />
        </div>
    );
};

export default AddStudentVisa;