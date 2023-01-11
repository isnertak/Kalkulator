let a;
let b;
let c;
let a2;
let b2;
let c2;

document.getElementById("submitBtn").onclick = function(){

    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);a

    c = a/2*b;

    document.getElementById("cLabel").innerHTML = ("Pole wynosi: ") + c;
    console.log(c);


};

document.getElementById("submitBt").onclick = function(){

    a2 = document.getElementById("aTextBo").value;
    a2 = Number(a2);

    b2 = document.getElementById("bTextBo").value;
    b2 = Number(b2);

    c2 = a2*a2 + b2*b2;

    document.getElementById("cLabe").innerHTML = ("c2 wynosi: ") + c2;
    console.log(c2);


};
