


const button=document.getElementById('Register')
//Main FUnction

button.addEventListener("click",function f()
{
   var userName = document.getElementById('fName').value;
   var userLastName = document.getElementById('lName').value;
   var password= document.getElementById('password').value;
   var cPassword= document.getElementById('cPassword').value;
   var emailAddress=document.getElementById('eAddress').value;
   var gender = '';
   console.log(document.getElementById('Male').checked);
   if(document.getElementById('Male').checked){
      gender = document.getElementById('Male').value;

   }else if(document.getElementById('Female').checked){
      gender = document.getElementById('Female').value;
   }
  console.log(gender);
//Validation Process
  
if(userName=='') {
      alert('Enter Name')}
                           else if(userLastName==''||userLastName===null)
                             {alert('Enter Last Name')}
                             else if(emailAddress==''||emailAddress===null)
                             {alert('Enter Email')}
                             else if(password==''||password!=cPassword)   
                                {alert('Invalid Password')}
                                else if(gender == ""){
                                 alert('Plz select gender')
                                }
 else
     {
        alert('Registration Successful') 
     }
           
});

         

 
   
       
   


   