//get messages from server
async function getMessagesFromServer(){
  var response = await fetch('https://fchatiavi.herokuapp.com/get/Incredibledonutsroom/?offset=0&limit=10');
  response = response.json();
  console.log(response);
}
