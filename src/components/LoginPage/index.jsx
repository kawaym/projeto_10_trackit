import Container from "../App/styles";

import Logo from "../Logo";
import InputTextBox from "../InputTextBox";
import MainButton from "../MainButton";

import { Formik } from "formik";

export default function LoginPage(){
    return(
        <>
            <Container>
                <Logo />

                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={async values => {
                        await new Promise(resolve => setTimeout(resolve, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    {props => {
                        const {
                            values,
                            touched,
                            errors,
                            dirty,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            handleReset
                        } = props;
                        return (
                            <form onSubmit={handleSubmit}>
                                <InputTextBox 
                                    name="email"
                                    value={values.email}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />
                                <InputTextBox 
                                    name="password"
                                    value={values.password}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />
                                <MainButton 
                                    disabled={isSubmitting}
                                    text={"Entrar"}
                                />
                            </form>
                        );
                    }}


                </Formik>
                <p>
                    Não tem uma conta? Cadastre-se!
                </p>
            </Container>
        </>
    )
}