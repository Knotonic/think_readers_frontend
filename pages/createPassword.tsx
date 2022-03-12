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

const createPassword = () => {

  return (

    <BgLayout>


      <h2 className="heading2 ">Create Password</h2>
      <SizedBox style="h-20" />


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
       <h3 className="heading3">New Password</h3>
          <SizedBox style="h-2" />
          <MyTextInput
            label="First Name"
            name="firstName"
            type="password"
            placeholder="Jane"
          />
           <SizedBox style="h-10" />
          <h3 className="heading3">Confirm Password</h3>
          <SizedBox style="h-2" />
          <MyTextInput
            label="First Name"
            name="firstName"
            type="password"
            placeholder="Jane"
          />
    
       </div>
       <SizedBox style="h-10" />
      <div>
      <NormalButton text="Create" />
      </div>
      <SizedBox style="h-10" />

        </Form>
      </Formik>
     
    </BgLayout>

  );
}

export default createPassword;

