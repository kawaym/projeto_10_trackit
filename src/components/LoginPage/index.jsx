import Container from "../App/styles";

import Logo from "../Logo";
import InputTextBox from "../InputTextBox";
import MainButton from "../MainButton";

import { Formik } from "formik";
import * as Yup from "yup";
import { serverLogin } from "../../services";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){

    const navigate = useNavigate();

    return(
        <>
            <Container>
                <Logo />

                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={async values => {
                        serverLogin(values, navigate, "/hoje");
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email()
                            .required("Required"),
                        password: Yup.string()
                            .required("Required")
                            .min(8)
                            .max(16),
                    })}
                >
                    {props => {
                        const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                        } = props;
                        return (
                            <form onSubmit={handleSubmit}>
                                <InputTextBox 
                                    name="email"
                                    field="email"
                                    value={values.email}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors.email && touched.email}
                                />
                                <InputTextBox 
                                    name="password"
                                    field="senha"
                                    value={values.password}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors.password && touched.password}
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