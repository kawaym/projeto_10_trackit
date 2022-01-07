import Container from "../App/styles";

import Logo from "../Logo";
import InputTextBox from "../InputTextBox";
import MainButton from "../MainButton";

import { Formik } from "formik";
import * as Yup from "yup";

export default function SignUpPage(){
    return(
        <>
            <Container>
                <Logo />

                <Formik
                    initialValues={{email: '', password: '', name: '', photo: ''}}
                    onSubmit={async values => {
                        await new Promise(resolve => setTimeout(resolve, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email()
                            .required("Required"),
                        password: Yup.string()
                            .required("Required"),
                        name: Yup.string()
                            .required("Required"),
                        photo: Yup.string()
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
                                <InputTextBox 
                                    name="name"
                                    value={values.name}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />
                                <InputTextBox 
                                    name="photo"
                                    value={values.photo}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />
                                <MainButton 
                                    disabled={isSubmitting}
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
    );
}