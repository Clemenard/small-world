console.log("Display.js loaded");
const RESERVED_ID=[
    'head','body','html','header','main','footer','autoloadScript'
]
class Display{
    constructor(){};
menuDisplay(){
    htmlInsert('button','header','Town','headerTown',null,display.townDisplay);
    htmlInsert('button','header','Logs','headerLogs',null,display.logsDisplay);
};
cleanDisplay(element="main"){
    document.getElementById(element).innerHTML = "";
}
humanDisplay(){};
logsDisplay(){
    console.log('logsDisplay');
};
townDisplay(){
    display.cleanDisplay("main");
    console.log('townDisplay');
    htmlInsert('table','main',null,'table');

    htmlInsert('tr','table',null,'tableHeader',false,['name','age']);

    let propertiesList=['name','age'];
    for(let j=0;j<propertiesList.length;j++)
        {
            htmlInsert('th',"tableHeader",propertiesList[j],"tr"+i+"td"+j,false);}

    for(i=0;i<world.listHumans.length;i++){
         let addClass=world.listHumans[i].sex?["female"]:["male"];
        htmlInsert('tr','table',null,"tr"+i);
        propertiesList=[world.listHumans[i].name,world.listHumans[i].age];
        for(let k=0;k<propertiesList.length;k++)
            {
                 k?htmlInsert('td',"tr"+i,propertiesList[k],"tr"+i+"td"+k):htmlInsert('td',"tr"+i,propertiesList[k],"tr"+i+"td"+k,addClass); 
            } 
    }
};
}

let display=new Display();