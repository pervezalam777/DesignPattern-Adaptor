export class ElementFinder {
    
    findById(value:string):Array<HTMLElement> {
        let collaction:Array<HTMLElement> = [];
        let element:HTMLElement | null = document.getElementById(value);
        if(element !== null){
            collaction.push(element);
        }
        return collaction;
    }

    findByClassName(value:string):Array<HTMLElement>{
        let collaction:Array<HTMLElement> = [];
        let lists:HTMLCollectionOf<Element> = document.getElementsByClassName(value);
        let len:number = lists.length
        for (let index = 0; index < len; index++) {
            const element = lists.item(index);
            collaction.push(<HTMLElement>element)
        }
        return collaction;
    }

    findByTagName(value:string):Array<HTMLElement>{
        let collaction:Array<HTMLElement> = [];
        let nodeList:NodeListOf<Element> = document.getElementsByTagName(value);
        let len:number = nodeList.length;
            for (let index = 0; index < len; index++) {
                const element:HTMLElement = <HTMLElement>nodeList[index];
                collaction.push(element);
            }
        return collaction;
    }
}