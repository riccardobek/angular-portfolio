import { Component } from "@angular/core";

@Component({
    selector:"app-icon",
    template: `
    <svg xmlns="http://www.w3.org/2000/svg" id="logo" viewBox="0 0 1921 1725">
        <path id="Poligono_1" data-name="Poligono 1" class="cls-1" d="M79,863L520,99.166h882L1843,863l-441,763.83H520Z"/>
        <text id="R" class="cls-2" x="729" y="1238">R</text>
        <text id="B" class="cls-2" transform="matrix(-1, 0, 0, 1, 1227.999, 1238)">B</text>
    </svg>`,
    styles: [`
        #logo{
            width:100%;
            height: 100%;
            color: currentColor
        }

        .cls-1 {
        fill: #fff;
        fill-opacity: 0;
        stroke: currentColor;
        stroke-width: 78.37px;
        fill-rule: evenodd;
        }

        .cls-2 {
        font-size: 1125px;
        font-family: Verdana;
        fill: currentColor;
        user-select: none;
        }`]
})
export class IconComponent{

}