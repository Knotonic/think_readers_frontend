import Image from "next/image";

const RowButton = ({ text, path }: { text: string, path: any }) => {
    return (
      <>
        <button className="h-12 rounded-lg w-10/12 bg-primary flex justify-center items-center mb-5">
        <div className="mr-2" >
        <Image src={path} alt="Icons" height={40} width={40} />
            </div>  <h3 className=" text-lg font-medium text-left text-white">{text}</h3>
        </button>
      </>
    );
  }
export default RowButton;
