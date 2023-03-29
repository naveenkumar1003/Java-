
var span=document.getElementById("spid");
var span1=document.getElementById("spid1");
var span2=document.getElementById("spid2");
// var d=document.getElementById("divid");
var us="naveen";
var pass;
var conpass;
function sample()
{
    var us=document.getElementById("user").value;
    var us1=document.getElementById("user");
    us1.style.outlineColor="red"


    if(us.length<=5 || us.length>15)
    {
        span.innerHTML="username must be 8 character";
        span.style.color="red";
    }
    else{
        span.innerHTML="null"
    }

  
  }
   
  function sample1()
  {
    var pass=document.getElementById("pass").value;
    var pass1=document.getElementById("pass");
    pass1.style.outlineColor="red"
  
    if(pass.length<=5 )
    {
        span1.innerHTML="password must be &,*,@ character";
        span1.style.color="red";
    }
    // else{
    //     span1.innerHTML="null"
    // }
  }
  function sample2()
  {
    var mail=document.getElementById("mail").value;
     var mail2=document.getElementById("mail");
     mail2.style.outlineColor="green"
    
    if(mail.length<=5 )
    {
        
        
    }
    // else{
    //     span1.innerHTML="null"
    // }
  }
  function sample3()
{
    var conpass=document.getElementById("conpass").value;
    var conpass1=document.getElementById("conpass");
    conpass1.style.outlineColor="red"

    if(conpass.length<=5 || conpass.length>15)
    {
        span2.innerHTML="Password must be atleast 8 character that include at least 1 lowercase,1uppercase character,1 number,and 1 special character in(!@#$%^&*)";
        span2.style.color="red";
    }
    else{
        span2.innerHTML=""
    }

  
  }
  function demo()
{
  if(pass==conpass){
    alert("welcome"+" "+us);

  }
  else{
    alert("incorrect password")
  }
}