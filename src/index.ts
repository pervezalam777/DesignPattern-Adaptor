import { IElementFinder } from "./interfaces/i-element-finder";
import { ElementFinder } from "./api1.0/element-finder";
import { ElementFinderAdapter } from "./api2.0/element-finder-adapter-1.0";

class Bootstrap {

    constructor(){  }

    initialize(){
        let api1p0Finder:IElementFinder = new ElementFinder();
        this.appendText(" Using v1.0 api for ID ref ", api1p0Finder, "#greeting");
        this.appendText(" Using v1.0 api for class ref", api1p0Finder, ".greet");
        this.appendText(" Using v1.0 api for tag ref", api1p0Finder, "a");

        let api2p0Finder:IElementFinder = new ElementFinderAdapter();

        this.appendText(" Using v2.0 api for ID ref ", api2p0Finder, "#greeting2");
        this.appendText(" Using v2.0 api for class ref", api2p0Finder, ".greet2");
        this.appendText(" Using v2.0 api for tag ref", api2p0Finder, "u");

    }

    appendText(text:string, finder:IElementFinder, keyword:string){
        let list:Array<HTMLElement> = finder.find(keyword);
        list.forEach((value:HTMLElement) => {
            value.innerText = text;
        })
    }
}   

let boot = new Bootstrap();
boot.initialize();  