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

const otp = () => {

  return (

    <BgLayout>


      <h2 className="heading2 h">Enter OTP</h2>
      <SizedBox style="h-32" />


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
     
          <h3 className="heading3">Please Enter Otp Sent To Your Mail-Id</h3>
          <SizedBox style="h-2" />
    
       </div>
       <div className="flex items-center  justify-between" >
      <div className="basis-10/12">
            <MyTextInput
              label="First Name"
              name="firstName"
              type="password"
              placeholder="Jane"
            />
          </div>
          <div>
            <button type="submit" className="h-14 w-14 rounded-full bg-primary m-auto "> <img src={arrow.src} alt="arrow" className="h-5 w-5 text-center m-auto" /></button>
          </div>
      </div>


        </Form>
      </Formik>
      <SizedBox style="h-2" />
      <div className="w-10/12">
        <h3 className="heading3 text-center">OR</h3>
      </div>
      <SizedBox style="h-10" />
      <h3 className="heading3 ">Generate New OTP In 30S</h3>
      <SizedBox style="h-2" />
      < NormalButton text="Resent OTP" />
      <SizedBox style="h-24" />
    </BgLayout>

  );
}

export default otp;














