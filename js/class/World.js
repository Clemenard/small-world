console.log("World.js loaded");
class World{
    constructor(numberHuman=20){
        let listHumans=[];
for(i=0;i<numberHuman;i++){
    let human= new Human(false);
    listHumans.push(human);
}
this.calendar=0;
this.listHumans=listHumans;
    };
    tick(){
        for(i=0;i<this.listHumans.length;i++){
            this.listHumans[i].action(); 
    }

}
}
let world=new World();