function talk(){
    var know = {
        "hello": "hi there &#128540",
        "who are you": "my name ,is Alice",
        "how are you? ": "i am good:-",
        "what can i do for you?" : "give us a follow and a like",
        'your followers?': 'i have 1000 likes,no followers yet',
        'bye ': 'okay ! we will meet soon,it was nice chatting with you'
    } 

    var user = document.getElementById('userbox').value;
    document.getElementById('chatlog').innerHTML= user + ' </br>';
    
    if (user in know){
        document.getElementById('chatlog').innerHTML=know[user]+ "</br>";

    }else{
        document.getElementById('chatlog').innerHTML= 'sorry i didnt understand </br>';
    }
}