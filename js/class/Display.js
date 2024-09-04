console.log("Display.js loaded");
const RESERVED_ID=[
    'head','body','html','header','main','footer','autoloadScript'
]

class Display{
    constructor(){};
menuDisplay(){
    htmlInsert('button','header','Town',display.townDisplay);
    htmlInsert('button','header','Logs',display.logsDisplay);
};
humanDisplay(){};
logsDisplay(){
    console.log('logsDisplay');
};
townDisplay(){
    console.log('townDisplay');
};
}