import BgLayout from "../components/bgLayout";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from "../components/input";
import arrow from "../assets/arrow.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import google from "../assets/google.svg";
import SizedBox from "../components/sizeBox";
import NormalButton from "../components/normalButton";
import RowButton from "../components/rowButton";

const register = () => {

    return (

        <BgLayout>


            <h2 className="heading2 ">Registration Screen</h2>
            <SizedBox style="h-10" />


            <Formik
                initialValues={{
                    firstName: '',
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),


                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form className="flex flex-col ">

                    <div className="w-10/12">
                        <h3 className="heading3">First Name</h3>
                        <SizedBox style="h-2" />
                        <MyTextInput
                            label="First Name"
                            name="firstName"
                            type="text"
                            placeholder="Jane"
                        />
                        <SizedBox style="h-6" />
                        <h3 className="heading3">Last Name</h3>
                        <SizedBox style="h-2" />
                        <MyTextInput
                            label="First Name"
                            name="firstName"
                            type="text"
                            placeholder="Jane"
                        />
                        <SizedBox style="h-6" />
                        <h3 className="heading3">Email-ID</h3>
                        <SizedBox style="h-2" />
                        <MyTextInput
                            label="First Name"
                            name="firstName"
                            type="text"
                            placeholder="Jane"
                        />
 <SizedBox style="h-6" />
                        <div className="flex justify-between">

                            <div>
                                <h3 className="heading3">Mobile Number</h3>
                                <SizedBox style="h-2" />
                                <MyTextInput
                                    label="First Name"
                                    name="firstName"
                                    type="text"
                                    placeholder="Jane"
                                />
                            </div>


                            <div>
                                <h3 className="heading3">Date Of Birth</h3>
                                <SizedBox style="h-2" />
                                <MyTextInput
                                    label="First Name"
                                    name="firstName"
                                    type="date"
                                    placeholder="Jane"
                                />
                            </div>
                        </div>

                    </div>
                    <SizedBox style="h-6" />
                    <div className="flex justify-end">
                        <NormalButton text="Create" />
                    </div>


                </Form>
            </Formik>

        </BgLayout>

    );
}

export default register;

