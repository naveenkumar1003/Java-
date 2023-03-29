 var nu=[];
 var num=0;
  function log()
  {
     var num=document.getElementById("number").value
     nu.push(num);
     document.getElementById("number").value="";

     get_data();
  }
  function get_data()
  {

  var string=" ";
  var sno=0;

  nu.forEach(function(value,index){
  
    
    sno+=1;
    string += '<tr><td>'+sno+'</td><td>'+value+'</td></tr>';
 })
 var a= document.getElementById("tbodyid").innerHTML=string;

}
function add(){
alert("acsfG")
var sum=nu.forEach((value )=> { num+value; });   
console.log(sum);

}
function to()
{
   var num1=document.getElementById("total").value
}

// function remove()
// {
//     nu.splice(id,1)
//     get_data();
// }
