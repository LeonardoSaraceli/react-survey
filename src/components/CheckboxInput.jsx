export default function CheckboxInput({ setFormData, formData }) {    
    return (
        <ul onChange={(e) => setFormData({ ...formData, spendTime: e.target.value})}>
            <li>
            <label
                ><input
                name="spend-time"
                type="checkbox"
                value="swimming"
                />Swimming</label
            >
            </li>
            <li>
            <label
                ><input name="spend-time" type="checkbox" value="bathing" />Bathing</label
            >
            </li>
            <li>
            <label
                ><input
                name="spend-time"
                type="checkbox"
                value="chatting"
                />Chatting</label
            >
            </li>
            <li>
            <label
                ><input name="spend-time" type="checkbox" value="noTime" />I don't like to
                spend time with it</label
            >
            </li>
        </ul>
    )
}