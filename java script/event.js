function val()
{
    var ptn= RegExp(/^[A-Z]{1}[a-z]{1,20}$/);

    var user=document.getElementById("user").value
    
    if(user.match(ptn))
    {
     
    alert("user name valid");
    }

 else{
     
    alert("username invalid")

    }
   
}