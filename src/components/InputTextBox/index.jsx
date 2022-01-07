import Input from "./style";

export default function InputTextBox({ name, value, handleChange, handleBlur }){
    return(
        <Input 
            name = {name}
            placeholder = {name === "password" ? "senha" : name}
            type = {name === "password" ? "password" : "text"} 
            value = {value}
            onChange = {handleChange}
            onBlur = {handleBlur}  
        />
    )
}