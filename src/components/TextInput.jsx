export default function TextInput({ setFormData, formData }) {
    return (
        <input
            type="text"
            name="username"
            value={formData.name} 
            onChange={(e) => setFormData({ ...formData, name: e.target.value})} 
        />
    )
}