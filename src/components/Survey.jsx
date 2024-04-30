import { useState } from "react";
import RadioInput from "./RadioInput";
import CheckboxInput from "./CheckboxInput";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";
import EmailInput from "./EmailInput";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [values, setValues] = useState([])
  const [formData, setFormData] = useState({
    rate: '',
    spendTime: '',
    feedback: '',
    name: '',
    email: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setValues([...values, formData])
    setFormData({
      rate: '',
      spendTime: '',
      feedback: '',
      name: '',
      email: ''
    })
    e.target.reset()
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList values={values} />
      </section>
      <section className="survey__form">
        <form onSubmit={(e) => handleSubmit(e)} className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <RadioInput setFormData={setFormData} formData={formData} />
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <CheckboxInput setFormData={setFormData} formData={formData} />
          </div>
          <label
            >What else have you got to say about your rubber duck?
            <TextAreaInput setFormData={setFormData} formData={formData} /></label
          ><label
            >Put your name here (if you feel like it):
            <TextInput setFormData={setFormData} formData={formData} /></label
          ><label
            >Leave us your email pretty please??
            <EmailInput setFormData={setFormData} formData={formData} /></label
          ><input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;
