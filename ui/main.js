//Counter Code
var button = document.getElementById('counter');
button.onclick = function()
{
    //Create a request Object
    var request = new XMLHttpRequest();
    //Capture the response and store it in the variable
    request.onreadystatechange = function()
    {
      if(request.readyState === XMLHttpRequest.DONE)
      {
        //Take some action  
        if(request.status === 200)
        {
         var counter = request.responseText;
         var span = document.getElementById('count');
         span.innerHTML = counter.toString();
        }
      }
      //Not done yet then don't do anything
    };
    //Make the request
    request.open('GET','http://pneel813.imad.hasura-app.io/counter', true);
    request.send(null);
};
//Submit name

var Submit = document.getElementById('Submit_btn');
Submit.onclick = function()
{
   var request = new XMLHttpRequest();
    //Capture the response and store it in the variable
    request.onreadystatechange = function()
    {
      if(request.readyState === XMLHttpRequest.DONE)
      {
        //Take some action  
        if(request.status === 200)
        {
         var names = request.responseText;
         names = JSON.parse(names);
         var list = '';
         for(i=0;i<names.length;i++)
         {
             list += '<li>' + names[i] + '</li>';
         }
         var Ul = document.getElementById('namelist');
         Ul.innerHTML = list;
        }
      }
      //Not done yet then don't do anything
    };
    //Make the request
    var nameInput = document.getElementById('name'); 
    var n1 = nameInput.value;
    request.open('GET','http://pneel813.imad.hasura-app.io/submit-name?name=' + n1, true);
    request.send(null);

  //Make a request to the server and send a name
 //Capture a list  of names and render it as a list
 
 
};
