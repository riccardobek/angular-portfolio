import { Component, Input } from "@angular/core";
import { Section } from "src/app/model/section.model";
import { EnvironmentService } from "src/app/services/environment.service";

@Component({
    selector: "app-about-me",
    templateUrl: "./about-me-component.html",
    styleUrls: ["./about-me.component.scss"]
})
export class AboutMeComponent{
    
    aboutMe!:Section;
    profileImage:string;

    constructor(private env: EnvironmentService){
        this.profileImage = env.getProfileImage();
        this.aboutMe = env.getSectionAbout();
      }
}