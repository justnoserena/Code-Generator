//--Assignment Code
  var generateBtn = document.querySelector("#generate");

//--Defined Variables
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var special = "'!@#$%^&*()_{}<>?-";
  var number = "1234567890";
//--Blank Variables
  var combined ="";
  var result="";
  var password= "";

function generatePassword() 
{
//--Random uppercase letter confirmation and generator
  var includeUp = confirm("Would you like to include\n uppercase letters within your password? CLick 'Okay' to apply and 'Cancel' to deny.")

  if(includeUp) 
  {
    result+= upper[Math.floor(Math.random()*lower.length)];
    combined+=combined.concat(upper);
  }

//--Rand om lowercase letter confirmation and generator
  var includeLow = confirm("Would you like to include\nlowercase letters within your password? CLick 'Okay' to apply and 'Cancel' to deny.")

  if(includeLow) 
  {
    result+= lower[Math.floor(Math.random()*lower.length)];
    combined+=combined.concat(lower);
  }

//--Random special characters confirmation and generator 
  var includeSpec = confirm("Would you like to include\nspecial characters within your password? CLick 'Okay' to apply and 'Cancel' to deny.")

  if(includeSpec) 
  {
    result+=special[Math.floor(Math.random()*special.length)];
    combined+=combined.concat(special);
  }

//--Random number confirmation and generator
  var includeNum =confirm("Would you like to include\nnumber characters within your password? CLick 'Okay' to apply and 'Cancel' to deny.")

  if(includeNum) 
  {
      result+= number[Math.floor(Math.random()*number.length)];
      combined+=combined.concat(number);
      // console.log(combined);
  }

//--Validating user input
  if(!includeUp&&!includeLow&&!includeNum&&!includeSpec)
  {
    alert("Error: Please select at least one character type")
    generatePassword();
  }

//--Introduces and calls the length function, that checks to make sure the length given meets the given requirements. Then adds length to the password
  function checkLength()
  {
    passLength = parseInt(prompt("Please enter the desired password length:\n(Must be within 8-128):"))
  if (passLength >=8 && passLength<=128)
    {
      for (let i=0; i<passLength-(result.length); i++) 
      {
          var random = combined[Math.floor(Math.random()*combined.length)];
          console.log(random);
          password += random;
      }
      password +=result;
      console.log(password);
    }
  else 
    {
    alert("Error:Please enter a numerical number between 8-128")
    checkLength(); 
    }
  }
  checkLength();
  alert("Your password is: "+password);
}


//--Write password to the #password input
function writePassword() 
{
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

//--Add event listener to generate button
generateBtn.addEventListener("click", writePassword);