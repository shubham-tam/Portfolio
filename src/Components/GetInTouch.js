import React from "react";
// import Nav from "./Nav";
// import FooterIcons from "./FooterIcons";
// import GLobalStyle from "./Style/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Header, Information, Item, Tel, Mail } from "./Style/GetinTouchstyle";
// import Form from "./Form";

export default function GetInTouch() {
  return (
    <div>
      {/* <GLobalStyle /> */}
      <div>
        {/* <Nav /> */}
        <Header>Get In Touch </Header>
        <Information>
          <Item>
            <FontAwesomeIcon icon={faHome} size="1x" />
            Bhaisepati, Lalitpur
          </Item>
          <Tel href="tel:9841254431">
            {" "}
            <FontAwesomeIcon icon={faPhone} size="1x" />
            +977- 9841254431
          </Tel>
          <Mail href="mailto:tamrakarshubham23@gmail.com" target="_blank">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
            tamrakarshubham23@gmail.com
            {/* <p> You can send me an email here. </p> */}
          </Mail>
        </Information>
        {/* <Form /> */}
        {/* <FooterIcons /> */}
      </div>
    </div>
  );
}
