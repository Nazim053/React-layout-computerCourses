import React from "react";
import G from "./getProfession.module.css";
import icon1 from '../../../img/icon-1.png'
import icon2 from '../../../img/icon-2.png'
import icon3 from '../../../img/icon-3.png'
export default function GetProfession() {
  return (
    <>
      <section className={G.getProfession_container}>
        <h2 className={G.getProfession_container_title}>Получите профессию прямо сейчас</h2>
        <div className={G.getProfession_container_flex}>
          <div className={G.getProfession_container_flex_block}>
            <picture><img src={icon1}/></picture>
            <h4>Только практические<br/> навыки в работе</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Netus
              eget velit quisque accumsan<br/> amet tortor. Velit, volutpat egestas
              fringilla mi<br/> porttitor tempus. Placerat dui.
            </p>
          </div>
          <div className={G.getProfession_container_flex_block}>
          <picture><img src={icon2} /></picture>
            <h4>Работа на самом <br/>современном оборудовании</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Netus
              eget velit quisque accumsan<br/> amet tortor. Velit, volutpat egestas
              fringilla mi<br/> porttitor tempus. Placerat dui.
            </p>
          </div>
          <div className={G.getProfession_container_flex_block}>
          <picture><img src={icon3} /></picture>
            <h4>Сертификация<br/> по окончанию обучения</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Netus
              eget velit quisque accumsan<br/> amet tortor. Velit, volutpat egestas
              fringilla mi<br/> porttitor tempus. Placerat dui.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
