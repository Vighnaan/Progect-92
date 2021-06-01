function add_name(){
    player1_name=document.getElementsById("player_1_input").value;
    player2_name=document.getElementsById("player_2_input").value;
    localStorage("PLAYER1",player1_name);
    localStorage("PLAYER2",player2_name);
}