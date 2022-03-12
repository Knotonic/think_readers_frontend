import classnames, { Argument, Mapping }  from "classnames";

const SizedBox = (props: { style: string | number | boolean | Mapping | Argument[] | null | undefined; }) => {
    const classStr = classnames(
     props.style
    
    );
    return (
      <>
       
   <div className={classStr}></div>
  
      </>
    );
  }

  
  export default SizedBox;