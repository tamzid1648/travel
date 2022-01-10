var na ,expr;

function readform(){
na=document.getElementById("name").value;
expr=document.getElementById("ex").value;
console.log(na,expr);
}

document.getElementById("insert").onclick=function(){

readform();
firebase
.database()
.ref("database/"+  na)
.set({
    commentetor:na,
    comment:expr,
});
alert("Review Shared");
document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("address").value="";
document.getElementById("number").value="";
document.getElementById("ex").value="";
};

let ref = firebase.database().ref(infos);
ref.on("value",gotdata);

function gotdata(data){
let info =data.val();
let keys =Object.keys(info);
 for (let i = 0;i<keys.length;i++)
 {

let i = keys[i]
let name= info[i].name
let comment=info[i].comment
console.log(name,comment);
 }
}