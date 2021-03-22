var stringers = [3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12];

function displayStatements(item){
  //Declaring the variables for the statement
  var that = this;
  this.ele = document.createElement("div");
  this.eleStatement = document.createElement("p");
  
  // Setting the variables to the product information
  if(typeof 00){
    if(item < 10){
      this.eleStatement.innerHTML = "The value is " + item + " and the number is below 10.";
    }
    else if(item == 15){
      this.eleStatement.innerHTML = "The value is " + item + " and the number is exactly equal to 15.";
    }
    else{
      this.eleStatement.innerHTML = "The value is " + item + " and the number is normal.";
    }
  }
  else{
    if(item.length > 5){
      this.eleStatement.innerHTML = "The value is " + item + " and the strings character length is more than 5.";
    }
    else{
      this.eleStatement.innerHTML = "The value is " + item + " and the string is normal.";
    }
  }
  
  // Appending the variables into the div
  this.ele.appendChild(this.eleStatement);
  
  // Event listeners in order to change the text color 
  this.ele.addEventListener("click", function(){
    that.ele.style.color = "blue";
  });
  
  // Appending the div into the body
  document.body.appendChild(this.ele);
}

// Function to create the statements
function createStatements(stringers){
  // Declaring variables
  var that = this;
  this.items = [];
  
  // For loop to loop through the stringers array
  for(var i = 0; i < stringers.length; i++){
    this.items.push(new displayStatements(stringers[i]));
  }
}

// Creating the variable cart to create items
var display = new createStatements(stringers)