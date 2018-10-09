import { IElementFinder } from "../interfaces/i-element-finder";

export class ElementFinder implements IElementFinder{
    find(value:string):Array<HTMLElement>{
        let firstChar = value.charAt(0);
        let newCollection:Array<HTMLElement> = [];
        if(firstChar ===  "."){
            let className:string = value.substr(1, value.length);
            let collection:HTMLCollectionOf<Element> = document.getElementsByClassName(className);
            let len:number = collection.length;
            for (let index = 0; index < len; index++) {
                const element:HTMLElement = <HTMLElement>collection.item(index);
                newCollection.push(<HTMLElement>element);
            }
        } else if(firstChar === "#"){
            let idName:string = value.substr(1, value.length);
            let element:HTMLElement | null = document.getElementById(idName);
            if(element !== null){
                newCollection.push(element)
            }
        } else {
            let nodeList:NodeListOf<Element> = document.getElementsByTagName(value);
            let len:number = nodeList.length;
            for (let index = 0; index < len; index++) {
                const element:HTMLElement = <HTMLElement>nodeList[index];
                newCollection.push(element);
            }
        }
        return newCollection
    }
}