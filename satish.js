const count=document.querySelector(".value1");
function Increment(){
    let value=parseInt(count.innerText);
    value=value+1;
    count.innerText=value;

};
 
function Decrement(){
    let value=parseInt(count.innerText);
    value=value-1;
    count.innerText=value;
};