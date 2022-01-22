var marginTop2=350;
var box2=setInterval(() => {
        var margin2=marginTop2-10;
        if(margin2>5){
        document.getElementsByClassName("ballon")[1].style.marginTop=margin2+"px";
        marginTop2=margin2;
}
},1000);
var ballon2=document.getElementById("ballon2");
var time2=0,second2=0,third2=0,fourth2=0;
var firstbox2,secondtime2,thirdtime2,fourthtime2,fifthtime2,sixthtime2,seventhtime2,eighttime2;
ballon2.addEventListener("click",()=>{
    time2++;
    clearInterval(box2);
    if(time2==1){
        console.log("first if");
    var marginTop2=350;
     firstbox2= setInterval(()=>{
    var a=document.getElementById("ballon2").style.marginTop==10+"px";
        if(a)
        {
            alert("😥very bad trial😥");
            clearInterval(firstbox2);
            location.href="index.html";
        }
            var margin2=marginTop2-10;
            if(margin2>5){
            document.getElementById("ballon2").style.marginTop=margin2+"px";
            marginTop2=margin2;
            }
    },1000);
}
else if(time2==2){
      console.log("second2 if");
    marginTop2=350;
 clearInterval(firstbox2);
 secondtime2= setInterval(()=>{
    var a=document.getElementById("ballon2").style.marginTop==10+"px";
    if(a)
      {
          alert("😌 bad trial😌");
          clearInterval(secondtime2);
          location.href="index.html";
      }
    var margin2=marginTop2-10;
    if(margin2>5){
    document.getElementById("ballon2").style.marginTop=margin2+"px";
    marginTop2=margin2;
    }
},700);
}
else if(time2==3)
{
      console.log("third2 if");
    clearInterval(secondtime2);
    marginTop2=350;
    thirdtime2=setInterval(() => {
        var a=document.getElementById("ballon2").style.marginTop==10+"px";
        if(a)
          {
              alert("😊good trial😊");
              clearInterval(thirdtime2);
              location.href="index.html";
          }
    var margin2=marginTop2-10;
    if(margin2>5){
    document.getElementById("ballon2").style.marginTop=margin2+"px";
    marginTop2=margin2;
    }
   },400);
}
else if(time2==4)
{
    console.log("fourth2 bug");
    clearInterval(thirdtime2);
    marginTop2=350;
     fourthtime2=setInterval(() => {
        var a=document.getElementById("ballon2").style.marginTop==10+"px";
        if(a)
          {
              alert("👍better trial👍");
              clearInterval(fourthtime2);
              location.href="index.html";

          }
    var margin2=marginTop2-10;
    if(margin2>5){
    document.getElementById("ballon2").style.marginTop=margin2+"px";
    marginTop2=margin2;
    }
   },200);
}
else if(time2==5)
   {
    console.log("fifth bug");
    clearInterval(fourthtime2);
    marginTop2=350;
     fifthtime2=setInterval(()=>{
        var a=document.getElementById("ballon2").style.marginTop==10+"px";
        if(a)
          {
              alert("✨best trial✨");
              clearInterval(fifthtime2);
              location.href="index.html";
          }
    var margin2=marginTop2-10;
    if(margin2>5){
    document.getElementById("ballon2").style.marginTop=margin2+"px";
    marginTop2=margin2;
    }
   },100);
   }
   else if(time2==6)
      {
          console.log("sixth time2");
          clearInterval(fifthtime2);
          marginTop2=350;
           sixthtime2=setInterval(() => {
            var a=document.getElementById("ballon2").style.marginTop==10+"px";
            if(a)
              {
                  alert("🎉fantastic trial🎉");
                  clearInterval(sixthtime2);
                  location.href="index.html";
              }
          var margin2=marginTop2-10;
          if(margin2>5){
          document.getElementById("ballon2").style.marginTop=margin2+"px";
          marginTop2=margin2;
          }
         },70);
      }
      else if(time2==7)
         {
        console.log("seventh bug");
        clearInterval(sixthtime2);
        marginTop2=350;
        seventhtime2=setInterval(() => {
            var a=document.getElementById("ballon2").style.marginTop==10+"px";
            if(a)
              {
                  alert("✨🎉awesome trial✨🎉");
                  clearInterval(seventhtime2);
                  location.href="index.html";
              }
        var margin2=marginTop2-10;
        if(margin2>5){
        document.getElementById("ballon2").style.marginTop=margin2+"px";
        marginTop2=margin2;
        }
         },50);
         }
    else 
    {
        {
            console.log("eight bug");
            clearInterval(seventhtime2);
            marginTop2=350;
            eighttime2=setInterval(() => {
                var a=document.getElementById("ballon2").style.marginTop==10+"px";
                if(a)
                {
                    alert("✨🎉awesome trial✨🎉");
                    clearInterval(eighttime2);
                    location.href="index.html";
                }
            var margin2=marginTop2-10;
            if(margin2>5){
            document.getElementById("ballon2").style.marginTop=margin2+"px";
            marginTop2=margin2;
            }
             },50);
             }   
    }
});