var countField  = document.getElementById('countfield');
var countLabel  = document.getElementById('countlabel');
var countNum    = document.getElementById('countnumber');
var btn    = document.getElementById('btn');

function handleKeyUp(e){
    var text    = this.value;
    countNum.textContent = text.length;
};
countField.addEventListener('keyup', handleKeyUp);
btn.onclick=()=>{
    countField.value="";
    countNum.textContent=0;
};