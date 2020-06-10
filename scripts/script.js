var messages = document.getElementById('messages');
//get messages from server
window.onload = getMessagesFromServer();

async function getMessagesFromServer(){
  
  var response = await fetch('https://fchatiavi.herokuapp.com/get/IncredibleDonutsRoom/?offset=0&limit=10');
  response = await response.json();
  var allMessagesHTML = '';
  
   for (var i = 0; i < response.length; i++) {
     
   var messageData = response[i];
   console.log(messageData); 
       var message = `    
    <div class="container" style="margin-top:30px;">
      <div><p style="color:white; position:relative; left:-10px; top:17px; background-color:#1C1E25; border-radius:7px; "> ${messageData.Name} </p></div>
      <div class="alert alert-danger" role="alert" style="background-color:#212529; color:white; border:solid 1px #DC3545; border-radius:5px;">
      <p> ${messageData.Message} </p>
      </div>
    </div>
`
       allMessagesHTML = allMessagesHTML + message;
  
    }
  messages.innerHTML = allMessagesHTML;
}
async function sendUserMessage(){
 var nicknamevar = document.getElementById('nickname').value;
 var messagevar = document.getElementById('message').value;
 if (nickname.length === 0){
 alert("You need to chose a nickname!");
 return;
 }
  if (message.length === 0){
 alert("Type thomething. You can't just send an empty message!");
  return;
 }
  await fetch('https://fchatiavi.herokuapp.com/send/IncredibleDonutsRoom', {
  method: 'POST',
  body: JSON.stringify({
  Name: nicknamevar ,
  Message: messagevar
  })
  });
  getMessagesFromServer();
}

