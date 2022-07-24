import React from "react";
import P from "./Partner.module.css";
import imgPartner from '../../../img/icon-heading.png'
import imgMsi from '../../../img/logofooter.png'

export default function Partner() {
  return <>
  
    <div className={P.partner_top_container}>
        <div className={P.partner_top_container_title_flex}>
            <picture><img className={P.logoPartner} src={imgPartner}/></picture>
        <h3 className={P.partner_top_container_title}>Партнеры - топовые бренды</h3>
        </div>
        <div className={P.partner_top_container_grid}>
            <div className ={P.partner_top_container_grid_block}>
                <picture><img  className={P.imgMsiStyles}  src={imgMsi} /></picture>
            </div>
            <div className ={P.partner_top_container_grid_block}>
                <picture><img  className={P.imgMsiStyles}  src={imgMsi} /></picture>
            </div>
            <div className ={P.partner_top_container_grid_block}>
                <picture><img  className={P.imgMsiStyles}  src={imgMsi} /></picture>
            </div>
            <div className ={P.partner_top_container_grid_block}>
                <picture><img  className={P.imgMsiStyles}  src={imgMsi} /></picture>
            </div>
            <div className ={P.partner_top_container_grid_block}>
                <picture><img  className={P.imgMsiStyles}  src={imgMsi} /></picture>
            </div>
            <div className ={P.partner_top_container_grid_block}>
                <picture><img  className={P.imgMsiStyles}  src={imgMsi} /></picture>
            </div>
            <div className ={P.partner_top_container_grid_block}>
                <picture><img  className={P.imgMsiStyles}  src={imgMsi} /></picture>
            </div>
            <div className ={P.partner_top_container_grid_block}>
                <picture><img  className={P.imgMsiStyles}  src={imgMsi} /></picture>
            </div>
            
        </div>
    </div>

  </>;
}
