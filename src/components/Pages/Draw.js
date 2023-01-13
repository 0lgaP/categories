import React from "react";
import Card from "../UI/Card";
import ButtonContainer from "../UI/ButtonContainer";
import Button from "../UI/Button";
import styles from "./Draw.module.css";
import DownloadButton from "../UI/DownloadButton";
import DrawButtonContainer from "../UI/DrawButtonContainer";

import Huntress from "../../assets/killers/Huntress.jpg";
import Freddy from "../../assets/killers/Freddy.jpg";
import Spirit from "../../assets/killers/Spirit.jpg";
import Oni from "../../assets/killers/Tony.jpg";
import Wraith from "../../assets/killers/Wraith.jpg";

import hunt from "../../assets/icons/hunt_icon.png";
import fred from "../../assets/icons/fred_icon.png";
import spir from "../../assets/icons/spir_icon.png"
const Draw = () => {

  return (
    <DrawButtonContainer>
      <DownloadButton title="Huntress" img={hunt} drawing={Huntress} />
      <DownloadButton title="Fred" img={fred} drawing={Freddy} />
      <DownloadButton title="Spirit" img={spir} drawing={Spirit} />
    </DrawButtonContainer>
  );
};

export default Draw;
