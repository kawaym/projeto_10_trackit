import Container from "../App/styles";

import Logo from "../Logo";
import InputTextBox from "../InputTextBox";
import MainButton from "../MainButton";

import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { serverSignUp } from "../../services";
import { ErrorMessage } from "./style";

export default function SignUpPage(){

    const navigate = useNavigate();

    return(
        <>
            <Container>
                <Logo />

                <Formik
                    initialValues={{email: '', password: '', name: '', image: ''}}
                    onSubmit={async values => {
                        await new Promise(resolve => setTimeout(resolve, 500));
                        serverSignUp(values);
                        navigate("../", {replace: true});
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email()
                            .required("Required"),
                        password: Yup.string()
                            .required("Required"),
                        name: Yup.string()
                            .required("Required")
                            .min(3),
                        image: Yup.string()
                            .url()
                            .nullable()
                            .required("Required")
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
                            isValid,
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
                                    disabled={isSubmitting}
                                />
                                <InputTextBox 
                                    name="password"
                                    field="senha"
                                    value={values.password}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors.password && touched.password}
                                    disabled={isSubmitting}
                                />
                                <InputTextBox 
                                    name="name"
                                    field="nome"
                                    value={values.name}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors.name && touched.name}
                                    disabled={isSubmitting}
                                />
                                <InputTextBox 
                                    name="image"
                                    field="foto"
                                    value={values.image}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors.image && touched.image}
                                    disabled={isSubmitting}
                                />
                                {(!isValid && touched.email && touched.name && touched.password && touched.image) && <ErrorMessage>Por favor, cheque os campos em vermelho</ErrorMessage>}
                                <MainButton 
                                    disabled={isSubmitting}
                                    text={"Cadastrar"}
                                />
                            </form>
                        );
                    }}
                </Formik>
                <Link to="/">
                    <p>
                        Já tem uma conta? Faça login!
                    </p>
                </Link>
            </Container>
        </>
    );
}