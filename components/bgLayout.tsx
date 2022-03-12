
import logo from "../assets/logo1.svg";
import Image from "next/image";
const bgLayout: React.FC = (props) => {

    return (
        <div className='bg-background-pattern bg-cover  w-full flex px-[52px] pt-[47px] '>
            <div className=" basis-1/2 flex flex-col">
                <div className="basis-1/5">
                    <Image src={logo.src} alt="Logo" height={72} width={276} />
                </div>
                <div className="basis-4/5  flex flex-col justify-center">
                    <h1 className="heading1">Just Write What You Know And Earn</h1>
                </div>
            </div>
            <div className=" basis-1/2 ">
                {props.children}
            </div>

        </div>

    );
}

export default bgLayout;