function int()
{
     var ptn=(/^[0-9 A-Z a-z]{1,9}$/);
     var pass=document.getElementById("pass");
    


     if(ptn.test(pass))
     {
        alert("password correct");
     }
     
     else
     {
        alert("password incorrect");
     }

     
}