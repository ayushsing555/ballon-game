var margintop4=350;
var box4=setInterval(() => {
        var margin4=margintop4-10;
        if(margin4>5){
        document.getElementsByClassName("ballon")[3].style.marginTop=margin4+"px";
        margintop4=margin4;
}
},1000);
var ballon32=document.getElementById("ballon4");
var time4=0,second4=0,third4=0,fourth4=0;
var firstbox4,secondtime4,thirdtime4,fourthtime4,fifthtime4,sixthtime4,seventhtime4;
ballon32.addEventListener("click",()=>{
    time4++;
    clearInterval(box4);
    if(time4==1){
        console.log("first if");
    var margintop4=350;
     firstbox4= setInterval(()=>{
        var a=document.getElementById("ballon4").style.marginTop==10+"px";
        if(a)
        {
            alert("😥very bad trial😥");
            clearInterval(firstbox4);
            location.href="index.html";
        }
            var margin4=margintop4-10;
            if(margin4>5){
            document.getElementById("ballon4").style.marginTop=margin4+"px";
            margintop4=margin4;
            }
    },1000);
}
else if(time4==2){
      console.log("second4 if");
    margintop4=350;
 clearInterval(firstbox4);
 secondtime4= setInterval(()=>{
    var a=document.getElementById("ballon4").style.marginTop==10+"px";
    if(a)
      {
          alert("😌 bad trial😌");
          clearInterval(secondtime4);
          location.href="index.html";
      }
    var margin4=margintop4-10;
    if(margin4>5){
    document.getElementById("ballon4").style.marginTop=margin4+"px";
    margintop4=margin4;
    }
},700);
}
else if(time4==3)
{
      console.log("third4 if");
    clearInterval(secondtime4);
    margintop4=350;
    thirdtime4=setInterval(() => {
        var a=document.getElementById("ballon4").style.marginTop==10+"px";
        if(a)
          {
              alert("😊good trial😊");
              clearInterval(thirdtime4);
              location.href="index.html";
          }
  var margin4=margintop4-10;
    if(margin4>5){
    document.getElementById("ballon4").style.marginTop=margin4+"px";
    margintop4=margin4;
    }
   },400);
}
else if(time4==4)
{
    console.log("fourth4 bug");
    clearInterval(thirdtime4);
    margintop4=350;
     fourthtime4=setInterval(() => {
        var a=document.getElementById("ballon4").style.marginTop==10+"px";
        if(a)
          {
              alert("👍better trial👍");
              clearInterval(fourthtime4);
              location.href="index.html";

          }
    margin4=margintop4-10;
    if(margin4>5){
    document.getElementById("ballon4").style.marginTop=margin4+"px";
    margintop4=margin4;
    }
   },200);
}
else if(time4==5)
   {
    console.log("fifth bug");
    clearInterval(fourthtime4);
    margintop4=350;
     fifthtime4=setInterval(() => {
        var a=document.getElementById("ballon4").style.marginTop==10+"px";
        if(a)
          {
              alert("✨best trial✨");
              clearInterval(fifthtime4);
              location.href="index.html";
          }
    var margin4=margintop4-10;
    if(margin4>5){
    document.getElementById("ballon4").style.marginTop=margin4+"px";
    margintop4=margin4;
    }
   },100);
   }
   else if(time4==6)
      {
          console.log("sixth time4");
          clearInterval(fifthtime4);
          margintop4=350;
           sixthtime4=setInterval(() => {
            var a=document.getElementById("ballon4").style.marginTop==10+"px";
            if(a)
              {
                  alert("🎉fantastic trial🎉");
                  clearInterval(sixthtime4);
                  location.href="index.html";
              }
          var margin4=margintop4-10;
          if(margin4>5){
          document.getElementById("ballon4").style.marginTop=margin4+"px";
          margintop4=margin4;
          }
         },70);
      }
      else if(time4==7)
         {
        console.log("seventh bug");
        clearInterval(sixthtime4);
        margintop4=350;
        seventhtime4=setInterval(() => {
            var a=document.getElementById("ballon4").style.marginTop==10+"px";
            if(a)
              {
                  alert("✨🎉awesome trial✨🎉");
                  clearInterval(seventhtime4);
                  location.href="index.html";
              }
        var margin4=margintop4-10;
        if(margin4>5){
        document.getElementById("ballon4").style.marginTop=margin4+"px";
        margintop4=margin4;
        }
         },50);
         }
    else 
    { 
            console.log("eight bug");
            clearInterval(seventhtime4);
            margintop4=350;
            eightthtime4=setInterval(() => {
                var a=document.getElementById("ballon4").style.marginTop==10+"px";
            if(a)
              {
                  alert("✨🎉awesome trial✨🎉");
                  clearInterval(seventhtime4);
                  location.href="index.html";
              }
            var margin4=margintop4-10;
            if(margin4>5){
            document.getElementById("ballon4").style.marginTop=margin4+"px";
            margintop4=margin4;
            }
             },40);
             }   
    }  
);