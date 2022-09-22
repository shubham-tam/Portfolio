import React from "react";
import {
  Collage,
  Siuu,
  BrunoDiv,
  Work,
  Bruno,
  RonaldoBanner,
  RonaldoWithoutNoise,
  RonaldoWONoise,
  Image,
  Koza,
  KozaImage,
  WeddingCardDiv,
  WeddingCard,
} from "..//..//Style/GraphicsGridStyle";

import ronaldo from "..//..//../images and videos/Graphics/ronaldooo.png";
import bruno from "..//..//../images and videos/Graphics/bruno.png";
import DCL from "..//..//../images and videos/Graphics/matchday.png";
import MULIV from "..//..//../images and videos/Graphics/MU LIV.png";
import ronniewonoise from "..//..//../images and videos/Graphics/without noise.png";
import mbappe from "..//..//../images and videos/Graphics/mbappe.jpg";
import mount from "..//..//../images and videos/Graphics/mountttt .png";
import MUCHE from "..//..//../images and videos/Graphics/utd vs chelsea 22nd april.png";
import SIRALEX from "..//..//../images and videos/Graphics/sir alex records.png";
import wenger from "..//..//../images and videos/Graphics/wenger record.png";
import zidane from "..//..//../images and videos/Graphics/zidane record.png";
import Litas from "..//..//../images and videos/Graphics/shoeee 1.png";
import Card from "..//..//../images and videos/Graphics/wedding card.png";
import frontPage from "..//..//../images and videos/Graphics/front page.png";
import insidePage from "..//..//../images and videos/Graphics/inside page.png";
import lastPage from "..//..//../images and videos/Graphics/last page.png";

import FooterIcons from "..//../FooterIcons";

export default function GraphicsGrid() {
  return (
    <div>
      <Collage>
        <Siuu>
          <RonaldoBanner src={ronaldo} alt="" />
        </Siuu>
      </Collage>

      <Collage>
        <BrunoDiv>
          <Bruno src={bruno} alt="" />
        </BrunoDiv>
        <BrunoDiv>
          {" "}
          <Bruno src={MULIV} alt="" />
        </BrunoDiv>
        <Work>
          {" "}
          <Image src={mbappe} alt="" />
        </Work>
        <BrunoDiv>
          {" "}
          <Bruno src={DCL} alt="" />
        </BrunoDiv>
        <RonaldoWithoutNoise>
          {" "}
          <RonaldoWONoise src={ronniewonoise} alt="" />
        </RonaldoWithoutNoise>
      </Collage>

      <Collage>
        <Work>
          {" "}
          <Image src={mount} alt="" />
        </Work>
        <Work>
          {" "}
          <Image src={MUCHE} alt="" />
        </Work>
        <Work>
          <Image src={SIRALEX} alt="" />
        </Work>
        <Work>
          {" "}
          <Image src={wenger} alt="" />
        </Work>
        <Work>
          {" "}
          <Image src={zidane} alt="" />
        </Work>
      </Collage>

      <Collage>
        <Work>
          {" "}
          <Image src={Litas} alt="" />
        </Work>
        <Koza>
          <KozaImage src={frontPage} alt="" />
        </Koza>
        <Koza>
          {" "}
          <KozaImage src={insidePage} alt="" />
        </Koza>
        <Koza>
          {" "}
          <KozaImage src={lastPage} alt="" />
        </Koza>

        <WeddingCardDiv>
          {" "}
          <WeddingCard src={Card} alt="" />
        </WeddingCardDiv>
      </Collage>
      <br />
      <br />
      <br />

      <FooterIcons />
    </div>
  );
}
