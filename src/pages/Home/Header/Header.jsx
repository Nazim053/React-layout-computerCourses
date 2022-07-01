import React from "react";
import H from "./Header.module.css";
import logo from "../../../img/logo.png";
import Component1 from "../Component1/Component1";

export default function Header() {
  return (
    <div className={H.bg_container}>
      <div className={H.container}>
        <div className={H.menu}>
          <div className="menu-block1">
            <img src={logo} alt="Logo" />
          </div>
          <div className={H.menu_block2}>
            <ul className={H.menu_block2_ul}>
              <li className={H.menu_block2_li}>Главная</li>
              <li className={H.menu_block2_li}>Курсы</li>
              <li className={H.menu_block2_li}>Расписание</li>
              <li className={H.menu_block2_li}>Преподаватели</li>
              <li className={H.menu_block2_li}>Рассылка</li>
              <li className={H.menu_block2_li}>Контакты</li>
            </ul>
          </div>
          <div className="menu-block3">
            <span className={H.menu_block3_btn}>Зайти в кабинет</span>
          </div>
        </div>
      </div>
      <Component1/>
    </div>
  );
}
