
function cong(){
    var addition1 = Number(document.getElementById("left").value);
    var addition2 = Number(document.getElementById("right").value);
    var result = addition1 + addition2;
    document.getElementById("result").innerHTML = result;
    
}

function tru(){
    var addition1 = Number(document.getElementById("left").value);
    var addition2 = Number(document.getElementById("right").value);
    var result = addition1 - addition2;
    document.getElementById("result").innerHTML = result;
    
}
function nhan(){
    var addition1 = Number(document.getElementById("left").value);
    var addition2 = Number(document.getElementById("right").value);
    var result = addition1 * addition2;
    document.getElementById("result").innerHTML = result;
    
}
function chia(){
    var addition1 = Number(document.getElementById("left").value);
    var addition2 = Number(document.getElementById("right").value);
    var result = addition1 / addition2;
    document.getElementById("result").innerHTML = result;
    
}

// let addition_btn=document.getElementById("addition")
// console.log(addition_btn)
// addition_btn.addEventListener("click", addition);