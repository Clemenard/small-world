const JS_FILES_LIST=[
    'Class/Display.js',
    'index.js',

];

function htmlInsert(newElement,parent="body",text=false,misc=null){
    let para = document.createElement(newElement);
    if(text){
        let node = document.createTextNode(text);
        para.appendChild(node);}
    switch (newElement){
            case "script" :
        para.setAttribute("type","text/javascript");
        para.setAttribute("src","js/"+misc);
        break;
            case "button" : console.log(misc);
            para.onclick=misc;
            console.log(para);
            break;
    }
    let element = document.getElementById(parent);
    element.appendChild(para);
}


for(i=0;i<JS_FILES_LIST.length;i++){
    htmlInsert("script","body",false,JS_FILES_LIST[i])
}