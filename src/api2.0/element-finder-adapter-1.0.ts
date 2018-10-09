import { ElementFinder } from "./element-finder";
import { IElementFinder } from "../interfaces/i-element-finder";


export class ElementFinderAdapter implements IElementFinder {
    private finder:ElementFinder;

    constructor(){
        this.finder = new ElementFinder();
    }

    find(value:string):Array<HTMLElement>{
        let firstChar:string = value.charAt(0);
        if(firstChar ==="."){
            let className:string = value.substr(1, value.length);
            return this.finder.findByClassName(className)
        } else if(firstChar === "#") {
            let idName:string = value.substr(1, value.length);
            return this.finder.findById(idName);
        }
        return this.finder.findByTagName(value);
    }
}