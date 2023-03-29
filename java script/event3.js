function de() 
{
          var us=document.getElementById('text').value;
            var div=document.getElementById('opt');
            var cl='<option value="">number</option>'
             for (var st=1;st<=us;st++)
              {
                 cl+='<option value='+st+'>'+st+'</option>';
                }
                div.innerHTML=cl
 }         
  function me(){
    
    var div=document.getElementById('opt').value;
    var out='<option value="">select</option>'
    for(var i=0;i<=div;i++){
        out   +='<option value='+i+'>'+i+'</option>';
    }
    document.getElementById("des").innerHTML=out;
 }

 function fo()
 {
    
    var del=document.getElementById("des").value;
    var divid=document.getElementById("divid");
    var inter="";
    for( var t=0;t<=del;t++)
    {
         inter+='<input type="text" placeholder="Enter a value"><br/>'
    }
    document.getElementById("divid").innerHTML=inter;

 }
               