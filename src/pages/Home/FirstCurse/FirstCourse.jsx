import React, { useEffect } from "react";
import C from "./FirstCourse.module.scss";


export default function FirstCurse() {


  return (
      
    <div className={C.container}>
      <div className={C.firstCourse}>
        <h1 className={C.titile_firstCourse}>
          Первый курс <br /> по компьютерной сборке
        </h1>
        <div className={C.wrap}>
          <div className={C.timer}>
            <div className={C.timer__items}>
              <div className={C.timer__item + ' ' + C.timer__days}>00</div>
              <div className={C.timer__item + ' ' + C.timer__hours}>00</div>
              <div className={C.timer__item + ' ' + C.timer__minutes}>00</div>
              <div className={C.timer__item + ' ' + C.timer__seconds}>00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
