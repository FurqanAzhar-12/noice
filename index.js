


const button=document.getElementById('Register')









//Main FUnction

button.addEventListener("click",function f()
{
   var userName = document.getElementById('fName').value; console.log(userName);
   var userLastName = document.getElementById('lName').value;
   var password= document.getElementById('password').value;
   var cPassword= document.getElementById('cPassword').value;
   var emailAddress=document.getElementById('eAddress').value;
   var everything=['userLastName','userName','password','cPassword','emailAddress'];
   //var gender= document.getElementByName('Gender');
   
  

//Validation Process
  
if(userName==='') {
      alert('Enter Name')}
                           else if(userLastName===''||userLastName===null)
                             {alert('Enter Last Name')}
                           else if(password===''||password!=cPassword)   
                              {alert('Invalid Password')}
                           else if(emailAddress===''||emailAddress===null)
                              {alert('Enter Email')}
 else
     {alert('Registration Successful')}
           
});

         

 
   
       
   


   