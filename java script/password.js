// function sub()
// {
//     var user=document.getElementById("user").value;
//     var dob=document.getElementById("dob").value;
//     var first_name=user.slice(0,4);
//     var date=new Date(dob)
//      var last_name=date.getDate();
//      var full_name=first_name+last_name;
//      document.getElementById("sp").innerHTML=full_name;

// }

// function pass()
// {
//     var dob=document.getElementById("dob").value
//     var  now_date=new Date();
//     var date=now_date.getDate();
//     alert(date)
//     var month=now_date.getMonth();
//     alert(month)
//     var year=now_year.getfullyear();
//     alert(year)

//     var dob1=(month+1)+'/'+date+'/'+year;
// ocument.getElementById("divid").innerHTML=dob1;
    
// }

localStorage.setItem("city", "Noida"); 







// var a="nave"
//  localStorage.setItem("first_name",a);
//  var mydata=localStorage.getItem("first_name")
//  alert(mydata)
function sub()
{
   var user=document.getElementById("user").value;
   var pass=document.getElementById("pass").value;
   var gmail=document.getElementById("gmail").value


   localStorage.setItem("NAME",user);
   alert(localStorage.getItem("NAME"))
   localStorage.setItem("password",pass);
   alert(localStorage.getItem("password"))
   localStorage.setItem("mail",gmail);
   alert(localStorage.getItem("mail"))




// var card=document.getElementById("user").value;
//  var ul=document.getElementById("ullist");
//  var li=document.createElement("li");
//  li.innerText=card;
//  ul.append(li);

   
   
}

// var myData = localStorage.setItem("myData");

// document.getElementById("myData").innerHTML = myData;
