let profile_details={
    title:"nave",
    imgSrc:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "Ravi",
    age: 25
 };
 
 let hd=document.getElementById("head");
 let image=document.getElementById("img");
 let n=document.getElementById("pa");
 let p=document.getElementById("ag");
 
 hd.textContent=profile_details.title;
 image.setAttribute("src",profile_details.imgSrc);
 pa.textContent=profile_details.name;
 ag.textContent=profile_details.age;


 




