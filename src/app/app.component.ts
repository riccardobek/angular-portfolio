import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EnvironmentService } from './services/environment.service';
import { Menu } from './model/menu.model';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { UtilityService } from './services/utility.service';
import { Section } from './model/section.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', "./layout/section/section.component.scss"]
})
export class AppComponent implements AfterViewInit {
  name!:string;
  profession!:string;
  profileImage!:string;
  educationSection:Section;
  
  menu !: Menu[];
  darkMode : boolean = false;

  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  

  constructor(private _env: EnvironmentService, 
              private _uty:UtilityService,
              private _breakpointObserver: BreakpointObserver
              ){
    this.menu = _env.getMenu();
    this.name = _env.getName();
    this.profession = _env.getProfession();
    this.profileImage = _env.getProfileImage();
    this.educationSection = _env.getEducation();

  }


  enableDarkMode = ($ev: any) => {
    this.darkMode = $ev.darkMode;
  }

  ngAfterViewInit(): void {
    
    /**
     * This observer understand if we are in front of a screen under 800px
     * It inform the utility service to change any other component
     */
    this._breakpointObserver.observe(['(max-width:800px)']).subscribe((res)=>{
      if(this.sidenav){
        if(res.matches){
          this.sidenav.mode = "over";
          this.sidenav.close();
        }
        else{
          this.sidenav.mode = "side";
          this.sidenav.open();
        }
      }
      
      this._uty.setIsMobile(res.matches);

    })
  }


  /**
   * Management of light and dark mode
   */
  iconMode: string = "bedtime";
  ariaLabelMode: string = "Switch to dark mode"
  toggleMode = () =>{
      this.darkMode = !this.darkMode;
      this.iconMode = this.darkMode ? "brightness_5" : "bedtime"  ;
      this.ariaLabelMode = this.darkMode ? "Switch to light mode" : "Switch to dark mode";
  }




}
