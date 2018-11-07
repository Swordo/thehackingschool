//a for column b for row
function cheeseboard(a , b){
var sharp = " #";
var count = "";
for(var i = 0; i < a; i++){
    for(var j = 0 ; j < b ;j++){
        count+=sharp;
    }
    
    console.log(count);
    count="";
    if(sharp == " #"){
        sharp = "# ";
    }
    else{
        sharp=" #";
    }   
}
}
cheeseboard(6,3);