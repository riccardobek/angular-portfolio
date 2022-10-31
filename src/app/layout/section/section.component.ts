import { Component, Input } from "@angular/core";
import { SectionContent } from "src/app/model/section-content.model";

@Component({
    selector: "app-section",
    templateUrl: "./section.component.html",
    styleUrls: ["./section.component.scss"]
})
export class SectionComponent{

    @Input() data!: SectionContent;

    //Lista max 3 immagini
    //titolo
    //Descrizione
    //Link read mode true/false
}