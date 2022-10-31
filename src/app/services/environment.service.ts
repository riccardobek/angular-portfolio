import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  getMenu = () => {
    return environment.menu;
  }

  getName = () => {
    return environment.name;
  }

  getProfileImage = () => {
    return environment.profileImage;
  }

  getSectionAbout = () => {
    return environment.about;
  }

  getProfession = () => {
    return environment.profession;
  }
  
  getEducation = () => {
    return environment.education;
  }
}
