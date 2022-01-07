import Button from "./style"

export default function MainButton({disabled}){
    return (
        <Button
            type="submit"
            disabled={disabled}
        >
            Entrar
        </Button>
    )
}