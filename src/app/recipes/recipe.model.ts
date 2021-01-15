export class Recipe {

    public name: string;
    public desc: string;
    public imgSrc: string;

    constructor(name: string, desc: string, imgSrc: string){
        this.name = name;
        this.desc = desc;
        this.imgSrc = imgSrc;
    }

}