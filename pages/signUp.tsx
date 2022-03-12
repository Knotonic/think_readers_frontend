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
import Image from "next/image";
const signUp = () => {

  return (

    <BgLayout>


      <h2 className="heading2">Create Account</h2>
      <SizedBox style="h-10" />

      <h3 className="heading3">Enter Your Email Address</h3>
      <SizedBox style="h-2" />
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
        <Form className="flex items-center  justify-between">

          <div className="basis-10/12">
            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div>
            <button type="submit" className="h-14 w-14 rounded-full bg-primary m-auto "> <Image src={arrow.src} alt="arrow" height={20} width={20} className="text-center m-auto" /></button>
          </div>

        </Form>
      </Formik>
      <SizedBox style="h-2" />
      <div className="w-10/12">
        <h3 className="heading3 text-center">OR</h3>
      </div>
      <SizedBox style="h-2" />
      <RowButton text="Sign Up with Email" path={google.src} />
      <RowButton text="Sign Up with Twitter" path={twitter.src} />
      <RowButton text="Sign Up with Facebook" path={facebook.src} />
      <div className="h-1 rounded-sm bg-primary w-2/4"></div>
      <SizedBox style="h-2" />
      <h3 className="heading4">Already Have An Account</h3>
      <SizedBox style="h-2" />
      < NormalButton text="Sign In" />
    </BgLayout>

  );
}

export default signUp;














