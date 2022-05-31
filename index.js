
 var userName = document.getElementById('fName').value; console.log(userName);

const button=document.getElementById('Register')

button.addEventListener("click",function form(){
   console.log("hello");

   var userName = document.getElementById('fName').value; console.log(userName);
   var userLastName = document.getElementById('lName').value;
   var password= document.getElementById('password').value;
   var cPassword= document.getElementById('cPassword').value;
  // var mGender= document.getElementById('male');
  // var fGender= document.getElementById('female');
   var emailAddress=document.getElementById(eAddress);


if (userName==='') {
   alert('Enter Name')}
  else if(userLastName===''||userLastName===null){
         alert('Enter Last Name')}
         else if(password===''||password!=cPassword){
            alert('Invalid Password')}
            /*else if(gender){
               alert('Please Select Gender')*/
            //}
   else if(emailAddress===''||emailAddress===null){alert('Enter Email')}
else{
   alert('Registration Successful')
}
})
         



   
       
   


   