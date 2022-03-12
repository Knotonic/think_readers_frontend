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

const selectInterest = () => {
    const listdata: string[] = [
        "Music", "Piano", "Keyboard", "Music", "Piano", "Keyboard", "Music", "Piano", "Keyboard"
    ];

    return (

        <BgLayout>


            <h2 className="heading2 ">Select The Field Interest</h2>
            <SizedBox style="h-10" />



            <div className="flex flex-col ">
                <h3 className="heading3">Select The Field You Interested (Minimum 5)</h3>
                <SizedBox style="h-2" />

                <div className="flex flex-wrap">
                    {
                        listdata.map((value, index) => <div key={index} className="h-32 w-32 rounded-sm  bg-secondary text-center text-white m-3 flex justify-center items-center ">
                            <h3 >{value}</h3>
                        </div>)
                    }
                </div>


            </div>


        </BgLayout>

    );
}

export default selectInterest;

