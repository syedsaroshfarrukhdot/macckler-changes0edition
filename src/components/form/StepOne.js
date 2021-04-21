import React from "react";
import formLogo from '../../images/icon-wohngeld.png'
import formImageTwo from '../../images/tuev_500.png'
import { Button } from 'react-bootstrap';




const StepOne = ({ setForm, formData, navigation }) => {
  const { firstName, lastName, nickName } = formData;

  const { next } = navigation;

  return (
    <div className="form">
        <img
        src={formLogo}
        alt="img"
        className="imageCover"
      />
      <p className="text_form">Erhalten Sie bis zu 3 unabhängige Angebote für Ihre Baufinanzierung.</p>
      <p className="text_form">Wir haben über 1.000 regionale Anbieter angeschlossen.</p>

      <div className="btn_container">
        <Button variant="primary" onClick={next} value="Weiter">Weiter »</Button>
      </div>

    

      <img
        src={formImageTwo}
        alt="img"
        className="imageCover"
      />
    </div>
    
  );
};

export default StepOne;