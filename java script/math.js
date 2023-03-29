console.log(Math.floor(Math.random()*20,1));
console.log(Math.floor(Math.random()*1,10));
console.log(Math.floor(Math.random()*6));
console.log(Math.floor(Math.random()));//task1

var a= 2.100212;
console.log(a.toFixed(2.100212,2));
console.log(a.toFixed(2.100212,3));
console.log(a.toFixed(     2));//task2

console.log(Math.max(12,34,56,1));
console.log(Math.max(-12,-34,0,-56,-1));//task3 


console.log(Math.min(12,34,56,1));
console.log(Math.min(-12,-34,0,-56,-1));//task4


function natural(n)
{
 return(n>=0.00)&& Math.floor(n)===n &&( n!=Infinity)
}
console.log(natural(-15));
console.log(natural(1));
console.log(natural(10.22));
console.log(natural(10/0));//task5




  var da=new Date();
        var date=da.getDate();
        var month=da.getMonth()+1;
        var year=da.getFullYear();
        console.log(date+"/"+month+"/"+year);

        function d(a){
            var da=new Date();
        var date=da.getDate();
        var month=da.getMonth()+1;
        var year=da.getFullYear();
        console.log(date+a+month+a+year);


        }
        d('-');


        var a= "robin_singh@example.com";
        console.log(a.replace("robin_singh@example.com"),("robin...@gmail.com"));

        var a= "JavaScript is client side scripting Language";
        console.log(a.indexOf("c"));
        console.log(a.lastIndexOf("c"));

        var a= "I eat apples the whole day";
        console.log(a.slice(6,12));

        var a= "Hello World";
        console.log(a.replace("Hello","Hi"));

        var a= "Hello World";
        console.log(a.toUpperCase());

        var a= "Hello World";
         console.log(a.toLowerCase());


         var a= "js string exercises";
         console.log(a.toUpperCase());

          var a= "Arun prasanth";
         console.log(a.split(" "));

