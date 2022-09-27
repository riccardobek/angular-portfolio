import { Component, OnInit, ViewChild } from '@angular/core';
import { EnvironmentService } from './services/environment.service';
import { Menu } from './model/menu.model';
import { Section } from './model/section.model';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', "./layout/section/section.component.scss"]
})
export class AppComponent implements OnInit {
  name!:string;
  profession!:string;
  profileImage!:string;
  
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

  }


  enableDarkMode = ($ev: any) => {
    this.darkMode = $ev.darkMode;
  }

  ngOnInit(): void {

    /**
     * This observer understand if we are in front of a screen under 800px
     * It inform the utility service to change any other component
     */
    this._breakpointObserver.observe(['(max-width:800px)']).subscribe((res)=>{
      if(this.sidenav){
        if(res.matches){
          this.sidenav.mode = "over";
          this.sidenav.close();
          console.log("under 800")
        }
        else{
          this.sidenav.mode = "side";
          this.sidenav.open();
          console.log("over 800")
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
