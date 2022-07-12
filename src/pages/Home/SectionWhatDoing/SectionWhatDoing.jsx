import React from "react";
import C from "./SectionWhatDoing.module.css";

export default function SectionWhatDoing() {
  return (
    <>
      <div className={C.container}>
        <div className={C.container_img}></div>
        <div className={C.container_WhatDoing}>
          <h3 className={C.container_WhatDoing_h3}>Чем мы занимаемся?</h3>
          <p className={C.container_WhatDoing_p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque,
            dignissim et feugiat elit augue in suspendisse egestas. Dictum
            vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et
            neque, adipiscing sapien sem senectus praesent aenean consequat.
            Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed
            interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus
            risus, cursus id elementum aliquet. Nullam turpis arcu malesuada
            arcu interdum placerat nisi, lobortis.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
