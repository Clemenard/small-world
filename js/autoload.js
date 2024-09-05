const JS_FILES_LIST=[
    'Class/Display.js',
    'Class/Human.js',
    'Class/World.js',
    'Class/Init.js',
    'index.js',

];

function htmlInsert(newElement,parent="body",text=false,id=null,addClass=null,misc=null){
    let para = document.createElement(newElement);
    if(text){
        let node = document.createTextNode(text);
        para.appendChild(node);}
        if(id){
            para.setAttribute("id",id);
        }
        if(addClass){
            for(let i=0;i<addClass.length;i++){
                para.classList.add(addClass[i]);
            }
        }
    switch (newElement){
        case "script" :
            para.setAttribute("type","text/javascript");
            para.setAttribute("src","js/"+misc);
            break;
        case "button" :
            para.onclick=misc;
            break;
    }
    let element = document.getElementById(parent);
    element.appendChild(para);
}

function randInt(min,max){
    return Math.round(Math.random()*max)+min
}


for(i=0;i<JS_FILES_LIST.length;i++){
    htmlInsert("script","body",false,false,false,JS_FILES_LIST[i])
}