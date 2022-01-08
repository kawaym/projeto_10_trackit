import Button from "./style"

export default function MainButton({disabled, text}){
    return (
        <Button
            type="submit"
            disabled={disabled}
        >
            {text}
        </Button>
    )
}