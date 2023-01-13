import React from "react";
import DownloadButton from "../UI/DownloadButton";
import DrawButtonContainer from "../UI/DrawButtonContainer";

import Huntress from "../../assets/killers/Huntress.jpg";
import Freddy from "../../assets/killers/Freddy.jpg";
import Spirit from "../../assets/killers/Spirit.jpg";
import Oni from "../../assets/killers/Tony.jpg";
import Wraith from "../../assets/killers/Wraith.jpg";
import Demogorgan from "../../assets/killers/Demogorgan.jpg"

import hunt from "../../assets/icons/hunt_icon.png";
import fred from "../../assets/icons/fred_icon.png";
import spir from "../../assets/icons/spir_icon.png";
import oni from "../../assets/icons/oni_icon.png";
import demo from "../../assets/icons/demo_icon.png";
import wrai from "../../assets/icons/wraith_icon.png";

const Draw = () => {

  return (
    <DrawButtonContainer>
      <DownloadButton title="Huntress" img={hunt} drawing={Huntress} />
      <DownloadButton title="Fred" img={fred} drawing={Freddy} />
      <DownloadButton title="Spirit" img={spir} drawing={Spirit} />
      <DownloadButton title="Oni" img={oni} drawing={Oni} />
      <DownloadButton title="Demogorgan" img={demo} drawing={Demogorgan} />
      <DownloadButton title="Wraith" img={wrai} drawing={Wraith} />

    </DrawButtonContainer>
  );
};

export default Draw;
