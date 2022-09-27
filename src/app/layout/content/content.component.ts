import { Component, HostBinding, Input, OnChanges, SimpleChanges } from "@angular/core";


@Component({
    selector: "app-content",
    templateUrl: "./content.component.html"
})
export class ContentComponent implements OnChanges{
    
    @Input('darkMode') darkMode!: boolean;
    @HostBinding('class') className = ''

    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.enableDarkMode(changes['darkMode'].currentValue);
    }


    enableDarkMode = (value:boolean) => {
        const darkClassName ='darkMode'
        this.className = value ? darkClassName : '';
        this.darkMode = value;
    }

}