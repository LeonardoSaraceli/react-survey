export default function EmailInput({ setFormData, formData }) {
    return (
        <input
            type="email"
            name="email"
            value={formData.email} 
            onChange={(e) => setFormData({ ...formData, email: e.target.value})} 
        />
    )
}