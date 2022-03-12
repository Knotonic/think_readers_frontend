import BgLayout from "../components/bgLayout";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from "../components/input";

import camaraIcon from "../assets/cameraIcon.svg";
import SizedBox from "../components/sizeBox";
import NormalButton from "../components/normalButton";
import Image from "next/image";

const buildProfile = () => {

    return (

        <BgLayout>


            <h2 className="heading2 ">Build Your Profile</h2>
            <SizedBox style="h-6" />


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
                <Form className="flex flex-col">

                    <div className="w-10/12">
                        <div>
                            <div className="bg-secondary h-28 w-28 m-auto rounded-full relative">
                                <div className="absolute bottom-0 right-2 ">
                                <Image src={camaraIcon.src} alt="Icons" height={40} width={40}   />
                                </div>
                               
                            </div>
                        </div>

                        <h3 className="heading3">User Name</h3>
                        <SizedBox style="h-2" />
                        <MyTextInput
                            label="First Name"
                            name="firstName"
                            type="password"
                            placeholder="Jane"
                        />
                        <SizedBox style="h-6" />
                        <h3 className="heading3">About YourSelf</h3>
                        <SizedBox style="h-2" />
                        <MyTextInput
                            label="First Name"
                            name="firstName"
                            type="password"
                            placeholder="Jane"
                        />

                        <SizedBox style="h-6" />
                        <h3 className="heading3">Profession</h3>
                        <SizedBox style="h-2" />
                        <MyTextInput
                            label="First Name"
                            name="firstName"
                            type="password"
                            placeholder="Jane"
                        />
 <SizedBox style="h-6" />
                    <div className="flex justify-between">

                        <NormalButton text="Do it Later" />


                        <NormalButton text="Next" />
                    </div>

                    </div>
                   


                </Form>
            </Formik>

        </BgLayout>

    );
}

export default buildProfile;

