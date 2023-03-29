var d=document.getElementById("divid");


function sample()
{
      var us=document.getElementById("user").value
      var ma=document.getElementById("email").value
      var pa=document.getElementById("pass").value
      var ph=document.getElementById("phone").value
      var zp=document.getElementById("zip").value

      if(us==null||us=='')
{
      alert('enter the username');

}

else if(pa==null||pa=='')
{
     alert('enter the password');

}

else if(pa.length>=5){
      alert('sucessfullly uploaded');
      d.innerHTML="user:"+us+"<br>"+"mail:"+ma+"<br>"+"pass:"+pa+"<br>"+"phone:"+ph+"<br>"+"zip:"+zp+"<br>"

}

else{
      alert('enter the password must ');
}

      

}



