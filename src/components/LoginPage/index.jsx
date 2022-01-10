import Container from "../App/styles";

import Logo from "../Logo";
import InputTextBox from "../InputTextBox";
import MainButton from "../MainButton";

import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { serverLogin } from "../../services";
import { UserContext } from "../../contexts";

export default function LoginPage(){


    const navigate = useNavigate();

    const { setUser } = useContext(UserContext);

    return(
        <>
            <Container>
                <Logo />

                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={async values => {
                        serverLogin(values, navigate, setUser, "/hoje");
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
                <Link to="/cadastro">
                    <p>
                        Não tem uma conta? Cadastre-se!
                    </p>
                </Link>
            </Container>
        </>
    )
}