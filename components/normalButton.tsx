const NormalButton = ({ text }: { text: string }) => {
    return (
      <>
        <button className=" rounded-sm py-2 px-8 bg-primary flex justify-center items-center mb-5 text-base font-medium text-white">
          {text}
        </button>
      </>
    );
  }

  
  export default NormalButton;