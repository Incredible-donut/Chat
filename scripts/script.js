var messages = document.getElementById('messages');
var sendButton = document.getElementById('send-button');
var confirmNickname = document.getElementById('nickname');
var nickNameSet = false;

sendButton.AddEventListener('click', sendUserMessage);
sendButton.AddEventListener('click', confirmNickname);
//get messages from server
window.onload = getMessagesFromServer();

async function getMessagesFromServer(){
  
  var response = await fetch('https://fchatiavi.herokuapp.com/get/IncredibleDonutsRoomOne/?offset=0&limit=50');
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
function confirmNickname(){
var nicknamevar = document.getElementById('nickname').value;
var nickNameSet = true;
if (nicknamevar.length === 0){
 alert("You need to chose a nickname!");
 return;
}
}
async function sendUserMessage(){
 if (nickNameSet === true;){
 var messagevar = document.getElementById('message').value;
  if (nicknamevar.length === 0){
 alert("Type thomething. You can't just send an empty message!");
  return;
 }
  await fetch('https://fchatiavi.herokuapp.com/send/IncredibleDonutsRoomOne/', {
  method: 'POST',
  body: JSON.stringify({
  Name: nicknamevar,
  Message: messagevar
  })
  });
  getMessagesFromServer();
  }
  else {
  alert('Choose a nickname!')
  }
}

