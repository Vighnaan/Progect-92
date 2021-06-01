player1score=0
player2score=0
function send(){
    number1=document.getElementById("n1").value;
    number2=document.getElementById("n2").value;
    actualans= parseInt(number1) * parseInt(number2);
    question_number="<h4>" + number1 + "X" + number2 + "</h4>";
    input="<br>ANS :<input type'text' id='input_check'>";
    check="<br><br><button class='btn btn-success' onclick='check()'>CHECK</button>";
    row= question_number + input + check;
    document.getElementById("output").innerHTML=row;
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
}
question_turn="player1";
ans_turn="player2";
function check(){
    get_ans=document.getElementById("input_check").value;
    if(get_ans==actualans){
        if(ans_turn="player2"){
            updatescore2=player2score+1;
            ans_turn="player1";
            document.getElementById("player2_spam").innerHTML=updatescore2;
            document.getElementById("turna").innerHTML=ans_turn;
        }
        else{
            updatescore1=player1score+1;
            ans_turn="player2";
            document.getElementById("player1_spam").innerHTML=updatescore1;
            document.getElementById("turna").innerHTML=ans_turn;
        }
        if(question_turn="player2"){
            question_turn="player1";
            document.getElementById("turnq").innerHTML=question_turn;
        }
        else{
            question_turn="player2";
            document.getElementById("turnq").innerHTML=question_turn;
        }  
    }
}
