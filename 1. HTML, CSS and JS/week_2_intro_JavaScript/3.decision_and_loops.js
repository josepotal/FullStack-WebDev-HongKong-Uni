//Lesson 4 of 9
// if statements
<script>
  var user_name;
  user_name = prompt("What is your name?");
  if (user_name == "dave")
    alert("Great name");
</script>

// use braces for more than one line of code
<script>
  var user_name;
  user_name = prompt("What is your name?");
  if (user_name == "dave"){
    alert("Great name");
    awesome_name  = ture;
  }
</script>

// if -elseif-else
<script>
  var user_name;
  user_name = prompt("What is your name?");
  if (user_name == "dave")
    alert("Great name");
  else if (user_name == "josep")
    alert ("Pretty good name");
  else if (user_name == "oz")
    alert ("excelent");
  else
    alert ("you are not in the list");
</script>

// switch
var user_name = prompt("What is your name?");
switch(user_name){
  case "dave":
    alert ("Great name");
      break;
  case "josep":
    alert ("Pretty good name");
      break;
  default:
    alert("you are not in the list");
}


//While loops --> checking texts
var response, finished;
finished = false;
alert ("Rossiter is a great name.");
while(!finished){
  response = prompt("Do you agree?");
  if (response.indexOf("yes") == 0)
    finished = true;
}


// do..while loops. First execute and then checks
var response, finished;
finished = false;
alert ("Rossiter is a great name.");
do {
  response = prompt("Do you agree?");
  if (response.indexOf("yes") == 0)
    finished = true;
} while(!finished);
