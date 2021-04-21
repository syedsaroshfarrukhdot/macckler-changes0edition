import React, { useState, useEffect } from "react";
import formImageTwo from "../../images/ekom-sign.png";
import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";
import Slider from "../slider/Slider";

const StepSix = ({ setForm, formData, navigation }) => {
  const { previous, next } = navigation;
  const { StepSix } = formData;
  const [value1, setValue] = useState(41.5);

  useEffect(() => {
    const interval = setTimeout(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 8.3;

        return newValue;
      });
    }, 200);
  }, []);

  const myCallBack = (statefromchild) => {
    formData.StepSix = statefromchild;
  }

  return (
    <div className="form">
      <p className="text_form_step_2">Wie hoch ist der gewünschte Finanzierungsbetrag?</p>

      <div className="btn_container">
        <Slider
          left_text="50.000 €"
          right_text="1.000.000 €"
          value="500000"
          min="0"
          max="1000000"
          step="10000"
          callBackFromParent={myCallBack}
        />
        <div className="align_btn">
          <Button variant="primary" value="Weiter"
          onClick={() => {
            next()
            
            console.log(formData)
          }}
          >
            Weiter
          </Button>
        </div>
      </div>

      <div className="progress_bar_container">
        <div className="progress_align">
          <ProgressBar
            color={"#577B0A"}
            width={"300px"}
            value={value1}
            max={100}
          />
        </div>
      </div>

      <img src={formImageTwo} alt="img" className="imageCover" />
    </div>
  );
};

export default StepSix;
