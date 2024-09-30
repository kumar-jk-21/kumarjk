

var fullname = document.getElementById('fullname').value;

var dob = document.getElementById('dob').value;

//gender
var my = document.forms.myform;
var myi = my.elements.ge;
var allgen =[...myi]

var gender = document.getElementById('gender');

var checking =    gender.addEventListener("change",(event)=>{
   var please = allgen.find((catogrie)=>{
    return catogrie.checked;
   });
   var  dio = please.value;
   localStorage.setItem('gend',dio);
  });
 
 
 //colose gender

var mobile = document.getElementById('mno').value;
var mpat = /^[0-9]{10}$/;

var mail = document.getElementById('mail').value;
var empat = /^[a-zA-Z0-9!@#$%^&*()]+@[A-Za-z0-9]+\.[a-zA-Z]{5,5}/;

var aadhar = document.getElementById('aadhar').value;
var apat = /^[0-9]{12}$/;

var address = document.getElementById('address').value;

var father = document.getElementById('fathername').value;

var mother = document.getElementById('mothername').value;

var qualifaction = document.getElementById('edu').value;


function valid()
{

    var fullname = document.getElementById('fullname').value;

    var dob = document.getElementById('dob').value;

//gender
    var my = document.forms.myform;
    var myi = my.elements.ge;
    var allgen =[...myi]
    
    var gender = document.getElementById('gender');
    
 var checking =  gender.addEventListener("change",(event)=>{
       var please = allgen.find((jk)=>{
        return jk.checked;
       });    

      
        
     });

     
     
     //colose gender
    
    var mobile = document.getElementById('mno').value;
    var mpat = /^[0-9]{10}$/;
    
    var mail = document.getElementById('mail').value;
    var empat = /^[a-zA-Z0-9!@#$%^&*()]+@[A-Za-z0-9]+\.[a-zA-Z]{3,}/;
    
    var aadhar = document.getElementById('aadhar').value;
    var apat = /^[0-9]{12}$/;
    
    var address = document.getElementById('address').value;
    
    var father = document.getElementById('fathername').value;
    
    var mother = document.getElementById('mothername').value;
    
    var qualifaction = document.getElementById('edu').value;
    
// validation

        if(fullname == "" || fullname == null){
            // document.getElementById('name-error').innerHTML="Please Enter Name";
            alert("Please Enter Name");

            return false;
        }

        else if(dob == "" || dob == null){
            // document.getElementById('dob-error').innerHTML="Please Enter Date OF Birth";
            alert("Please Enter Of Birth")
            return false;
        }

        else if (!mobile.match(mpat)){
            alert("Enter 10 Digit Mobile Number");
            return false;
        }

        else if(!mail.match(empat)){
            alert("Enter valid E-mail");
            return false;
        }

        else if(!aadhar.match(apat)){
            alert("Enter valid Aadhar number");
            return false;
        }
        
       else if(address == "" || address == null){
            alert("Enter Correct Address");
            return false;
        }

           else if(father == '' || father == null){
                alert("Enter Father Name");
                return false;
            }

           else if(mother == '' || mother == null){
                alert("Enter Mother Name");
                return false;
            }

          else  if(qualifaction == '' || qualifaction == null){
                alert("Enter Your Qualifaction");
                return false;
            }


        alert("Click Ok To Submit")
        
localStorage.setItem('user',fullname);
localStorage.setItem('birth',dob);
localStorage.setItem('gender',checking)
localStorage.setItem('num',mobile);
localStorage.setItem('gmail',mail);
localStorage.setItem('anum',aadhar);
localStorage.setItem('home',address);
localStorage.setItem('fname',father);
localStorage.setItem('mname',mother);
localStorage.setItem('education',qualifaction);



}





