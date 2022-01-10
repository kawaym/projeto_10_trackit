import Input from "./style";

export default function InputTextBox({ name, field, value, handleChange, handleBlur, error }){
    return(
        <Input 
            name = {name}
            placeholder = {field}
            type = {name === "password" ? "password" : "text"} 
            value = {value}
            onChange = {handleChange}
            onBlur = {handleBlur}  
            error = {error}
        />
    )
}