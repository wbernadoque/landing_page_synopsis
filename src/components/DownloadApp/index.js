import { Container } from "./styles";
import Button from "../Button";
import { BrowserView, MobileView } from "react-device-detect";
import { QRCodeSVG } from "qrcode.react";
import { Link } from "react-router-dom";

export default function DownloadApp({ area, colS, colE, rowS, rowE }) {
  function getOperatingSystem(window) {
    let operatingSystem = "Not known";
    if (window.navigator.appVersion.indexOf("Android") !== -1) {
      operatingSystem = "Google Play";
    } else if (window.navigator.appVersion.indexOf("iPhone") !== -1) {
      operatingSystem = "App Store";
    } else {
      operatingSystem = "loja de aplicativos";
    }
    return operatingSystem;
  }

  let system = getOperatingSystem(window);
  return (
    <Container area={area} colS={colS} colE={colE} rowS={rowS} rowE={rowE}>
      <BrowserView>
        <div
          style={{
            borderRadius: 4,
            border: "8px solid #fff",
            width: "auto",
            height: "auto",
          }}
        >
          <QRCodeSVG value="https://wbernadoque.github.io/landing_page_synopsis/redirection" />
        </div>
      </BrowserView>
      <MobileView>
        <Link
          to="https://wbernadoque.github.io/landing_page_synopsis/redirection"
          style={{ textDecoration: "none" }}
        >
          <Button icone="download" system={system} />
        </Link>
      </MobileView>
    </Container>
  );
}
