const RowButton = ({ text, path }: { text: string, path: any }) => {
    return (
      <>
        <button className="h-12 rounded-lg w-10/12 bg-primary flex justify-center items-center mb-5">
          <img src={path} alt="Icons" className="h-10 w-10  mr-2" /> <h3 className=" text-lg font-medium text-left text-white">{text}</h3>
        </button>
      </>
    );
  }
export default RowButton;
