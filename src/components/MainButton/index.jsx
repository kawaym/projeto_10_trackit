import { ThreeDots } from "react-loader-spinner"
import Button from "./style"

export default function MainButton({ disabled, text}){
    console.log(disabled)
    return (
        <Button
            type="submit"
            disabled={disabled}
        >
            {disabled && <ThreeDots type="ThreeDots" color="#FFFFFF" height={20.976} width={100}></ThreeDots>}
            {!disabled && text}
        </Button>
    )
}