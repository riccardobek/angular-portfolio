import { Component, Input } from "@angular/core";
import { Section } from "../../model/section.model"

@Component({
    selector: "app-section",
    templateUrl: "./section.component.html",
    styleUrls: ["./section.component.scss"]
})
export class SectionComponent{

    @Input() data!: Section;

    //Lista max 3 immagini
    //titolo
    //Descrizione
    //Link read mode true/false
}