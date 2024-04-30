export default function TextAreaInput({ setFormData, formData }) {
    return (
        <textarea
            name="review"
            cols="30"
            rows="10"
            onChange={(e) => setFormData({ ...formData, feedback: e.target.value})}
        ></textarea>
    )
}