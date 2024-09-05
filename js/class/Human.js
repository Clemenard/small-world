console.log("Human.js loaded");
const YEAR=400;
const CONSONNES=["b","c","d","f","g","h","j","l","m","n","p","r","s","t","v","x","z"];
const VOYELLES=["a","e","i","o","u"];
class Human{
    constructor(isBorn=true,mother=false){
let sex=randInt(0,1);
        isBorn?this.age=0:this.age=16*YEAR;
        this.sex=sex;
        this.name=this.naming(sex);
    };

    naming(sex){
let first=CONSONNES[randInt(0,CONSONNES.length)];
let second=VOYELLES[randInt(0,VOYELLES.length)];
let third=CONSONNES[randInt(0,5)];
let fourth="u";
let fifth=sex?"a":"i";
return first+second+third+fourth+fifth;
    };
}