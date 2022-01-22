var marginTop3=350;
var box3=setInterval(() => {
        var margin3=marginTop3-10;
        if(margin3>5){
        document.getElementsByClassName("ballon")[2].style.marginTop=margin3+"px";
        marginTop3=margin3;
}
},1000);
var ballon31=document.getElementById("ballon3");
var time3=0,second3=0,third3=0,fourth3=0;
var firstbox3,secondtime3,thirdtime3,fourthtime3,fifthtime3,sixthtime3,seventhtime3;
ballon31.addEventListener("click",()=>{
    time3++;
    clearInterval(box3);
    if(time3==1){
        console.log("first if");
    var marginTop3=350;
     firstbox3= setInterval(()=>{
        var a=document.getElementById("ballon3").style.marginTop==10+"px";
        if(a)
        {
            alert("😥very bad trial😥");
            clearInterval(firstbox3);
            location.href="index.html";
        }
            var margin3=marginTop3-10;
            if(margin3>5){
            document.getElementById("ballon3").style.marginTop=margin3+"px";
            marginTop3=margin3;
            }
    },1000);
}
else if(time3==2){
      console.log("second3 if");
    marginTop3=350;
 clearInterval(firstbox3);
 secondtime3= setInterval(()=>{
    var a=document.getElementById("ballon3").style.marginTop==10+"px";
    if(a)
      {
          alert("😌 bad trial😌");
          clearInterval(secondtime3);
          location.href="index.html";
      }
    var margin3=marginTop3-10;
    if(margin3>5){
    document.getElementById("ballon3").style.marginTop=margin3+"px";
    marginTop3=margin3;
    }
},700);
}
else if(time3==3)
{
      console.log("third3 if");
    clearInterval(secondtime3);
    marginTop3=350;
    thirdtime3=setInterval(() => {
        var a=document.getElementById("ballon3").style.marginTop==10+"px";
        if(a)
          {
              alert("😊good trial😊");
              clearInterval(thirdtime3);
              location.href="index.html";
          }
    var margin3=marginTop3-10;
    if(margin3>5){
    document.getElementById("ballon3").style.marginTop=margin3+"px";
    marginTop3=margin3;
    }
   },400);
}
else if(time3==4)
{
    console.log("fourth3 bug");
    clearInterval(thirdtime3);
    marginTop3=350;
     fourthtime3=setInterval(() => {
        var a=document.getElementById("ballon3").style.marginTop==10+"px";
        if(a)
          {
              alert("👍better trial👍");
              clearInterval(fourthtime3);
              location.href="index.html";

          }
    var margin3=marginTop3-10;
    if(margin3>5){
    document.getElementById("ballon3").style.marginTop=margin3+"px";
    marginTop3=margin3;
    }
   },200);
}
else if(time3==5)
   {
    console.log("fifth bug");
    clearInterval(fourthtime3);
    marginTop3=350;
     fifthtime3=setInterval(() => {
        var a=document.getElementById("ballon3").style.marginTop==10+"px";
        if(a)
          {
              alert("✨best trial✨");
              clearInterval(fifthtime3);
              location.href="index.html";
          }
    var margin3=marginTop3-10;
    if(margin3>5){
    document.getElementById("ballon3").style.marginTop=margin3+"px";
    marginTop3=margin3;
    }
   },100);
   }
   else if(time3==6)
      {
          console.log("sixth time3");
          clearInterval(fifthtime3);
          marginTop3=350;
           sixthtime3=setInterval(() => {
            var a=document.getElementById("ballon3").style.marginTop==10+"px";
            if(a)
              {
                  alert("🎉fantastic trial🎉");
                  clearInterval(sixthtime3);
                  location.href="index.html";
              }
          var margin3=marginTop3-10;
          if(margin3>5){
          document.getElementById("ballon3").style.marginTop=margin3+"px";
          marginTop3=margin3;
          }
         },70);
      }
      else if(time3==7)
         {
        console.log("seventh bug");
        clearInterval(sixthtime3);
        marginTop3=350;
        seventhtime3=setInterval(() => {
            var a=document.getElementById("ballon3").style.marginTop==10+"px";
            if(a)
              {
                  alert("✨🎉awesome trial✨🎉");
                  clearInterval(seventhtime3);
                  location.href="index.html";
              }
        var margin3=marginTop3-10;
        if(margin3>5){
        document.getElementById("ballon3").style.marginTop=margin3+"px";
        marginTop3=margin3;
        }
         },50);
         }
    else 
    { 
        {
            console.log("eight bug");
            clearInterval(seventhtime3);
            marginTop3=350;
            eightthtime3=setInterval(() => {
                var a=document.getElementById("ballon3").style.marginTop==10+"px";
                if(a)
                {
                    alert("✨🎉awesome trial✨🎉");
                    clearInterval(eighttime3);
                    location.href="index.html";
                }
            var margin3=marginTop3-10;
            if(margin3>5){
            document.getElementById("ballon3").style.marginTop=margin3+"px";
            marginTop3=margin3;
            }
             },40);
             }   
    }  
});