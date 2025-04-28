//-------------------------------defi 1 ---------------------------------
/*let prenom="";
while (prenom =="") {
    prenom=prompt("votre prenom :");
}
function saluerUtilisateur(prenom;){
    console.log(`Bonjour ${prenom} !`);
}
saluerUtilisateur(prenom);*/
//-----------------------------defi 2 ----------------------------------------
/*let a=0; b=0;
a=parseInt(prompt(" a :"));
b=parseInt(prompt(" b :"));
function addition(a,b){
    let r=a+b;
    console.log("a + b = "+r);
}
addition(a,b);*/
//----------------------------defi 3----------------------------------------------
/*let n=0;
n=parseInt(prompt("nombre : "));

function estpair(n){
    m=n%2;
    if (m!==0){
        console.log(n+" est impaire");
    }else{
        console.log(n+" est pair");
    }
}
estpair(n);*/
//-----------------------------defi 4 ---------------------------------------------
/*let note1=parseInt(prompt("note 1"));
let note2=parseInt(prompt("note 2"));
let note3=parseInt(prompt("note 3"));
function calculerMoyenne(note1,note2,note3){
    total=note1+note2+note3;
    moyen=(total/3).toFixed(2);
    console.log(moyen);
}
calculerMoyenne(note1,note2,note3);*/
//---------------------------defi 5 ---------------------------------------------------
let n1=parseInt(prompt("nombre 1 :"));
let n2=parseInt(prompt("nombre 2 :"));
function plusGrand(n1,n2){
    if (n1>n2){
        console.log(n1+" > "+n2);
    }else{
        console.log(n2+" > "+n1);
    }
}
plusGrand(n1,n2);
//---------------------------------------------------------------------------------------