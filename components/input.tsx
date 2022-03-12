import { Formik, Form, useField,FormikProps,FieldHookConfig ,FieldInputProps} from 'formik';


const MyTextInput = ({labels, ...props }:any) => {
  
    const [field, meta] = useField(props);
    return (
      <div className='flex flex-col'>
        {/* <label htmlFor={props.id|| props.name}>{labels}</label> */}
        <input className="text-input py-4 px-3 border-none bg-gray-50 rounded-lg focus:border-none focus:outline-none bg-inputbg text-fontblack w-full" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

  export default MyTextInput;