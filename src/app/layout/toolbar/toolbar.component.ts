import { Component, EventEmitter, Input, Output } from "@angular/core";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Menu } from "src/app/model/menu.model";


@Component({
    selector:"app-toolbar",
    templateUrl: "./toolbar.component.html",
    styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent{
    
    darkMode: boolean = false;
    iconMode: string = "bedtime";
    ariaLabelMode: string = "Switch to dark mode"
    
    @Input('menu') menuList!: Menu[]; 
    
    @Output('darkMode') darkModeEvent = new EventEmitter();
    @Output('menu') menuEvent = new EventEmitter();

    isHandset$: Observable<boolean> = this._breakpointObserver
                                            .observe([Breakpoints.Handset, Breakpoints.Small, Breakpoints.XSmall])
                                            .pipe(
                                                map(result => result.matches),
                                                shareReplay()
                                            );

    constructor(private _breakpointObserver: BreakpointObserver){}

    toggleMode = () =>{
        this.darkMode = !this.darkMode;
        this.iconMode = this.darkMode ? "brightness_5" : "bedtime"  ;
        this.ariaLabelMode = this.darkMode ? "Switch to light mode" : "Switch to dark mode";
        this.darkModeEvent.emit({darkMode: this.darkMode});
    }

    toggleMenu = () =>{
        this.menuEvent.emit();
    }


}