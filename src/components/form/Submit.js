import React,{useEffect} from "react";
const Submit = ({ navigation }) => {
  React.useEffect(() => {
    setTimeout(() => {
     next()
    }, 10000);
  });

  const { next } = navigation;
  return (
    <div className="we_be">
      <h3>Thank you for submitting. We will be in touch</h3>
     
    </div>
  );
};

export default Submit;