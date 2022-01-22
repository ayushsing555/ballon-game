let marginTop1=350;
let box1=setInterval(() => {
        let margin1=marginTop1-10;
        if(margin1>5){
        document.getElementsByClassName("ballon")[0].style.marginTop=margin1+"px";
        marginTop1=margin1;
}
},1000);
let ballon1=document.getElementById("ballon1");
let time=0,second=0,third=0,fourth=0;
let firstbox,SECONDTIME,thirdtime,fourthtime,fifthtime,sixthtime,seventhtime,eighttime,ninethtime;
ballon1.addEventListener("click",()=>{
    time++;
    clearInterval(box1);
    if(time==1){
        console.log("first if");
    let marginTop1=350;
     firstbox= setInterval(()=>{
         var a=document.getElementById("ballon1").style.marginTop==10+"px";
          if(a)
            {
                alert("😥very bad trial😥");
                clearInterval(firstbox);
                location.href="index.html";
            }
            let margin=marginTop1-10;
            if(margin>5){
            document.getElementById("ballon1").style.marginTop=margin+"px";
            marginTop1=margin;
            }
    },1000);
}
else if(time==2){
      console.log("second if");
    marginTop1=350;
 clearInterval(firstbox);
 SECONDTIME= setInterval(()=>{
    var a=document.getElementById("ballon1").style.marginTop==10+"px";
    if(a)
      {
          alert("😌 bad trial😌");
          clearInterval(SECONDTIME);
          location.href="index.html";
      }
    let margin=marginTop1-10;
    if(margin>5){
    document.getElementById("ballon1").style.marginTop=margin+"px";
    marginTop1=margin;
    }
},700);
}
else if(time==3)
{
      console.log("third if");
    clearInterval(SECONDTIME);
    marginTop1=350;
    thirdtime=setInterval(() => {
        var a=document.getElementById("ballon1").style.marginTop==10+"px";
        if(a)
          {
              alert("😊good trial😊");
              clearInterval(thirdtime);
              location.href="index.html";
          }
    let margin=marginTop1-10;
    if(margin>5){
    document.getElementById("ballon1").style.marginTop=margin+"px";
    marginTop1=margin;
    }
   },400);
}
else if(time==4)
{
    console.log("fourth bug");
    clearInterval(thirdtime);
    marginTop1=350;
     fourthtime=setInterval(() => {
        var a=document.getElementById("ballon1").style.marginTop==10+"px";
        if(a)
          {
              alert("👍better trial👍");
              clearInterval(fourthtime);
              location.href="index.html";
          }
    let margin=marginTop1-10;
    if(margin>5){
    document.getElementById("ballon1").style.marginTop=margin+"px";
    marginTop1=margin;
    }
   },200);
}
else if(time==5)
   {
    console.log("fifth bug");
    clearInterval(fourthtime);
    marginTop1=350;
     fifthtime=setInterval(() => {
        var a=document.getElementById("ballon1").style.marginTop==10+"px";
        if(a)
          {
              alert("✨best trial✨");
              clearInterval(fifthtime)
              location.href="index.html";
          }
    let margin=marginTop1-10;
    if(margin>5){
    document.getElementById("ballon1").style.marginTop=margin+"px";
    marginTop1=margin;
    }
   },100);
   }
   else if(time==6)
      {
          console.log("sixth time");
          clearInterval(fifthtime);
          marginTop1=350;
           sixthtime=setInterval(() => {
            var a=document.getElementById("ballon1").style.marginTop==10+"px";
            if(a)
              {
                  alert("🎉fantastic trial🎉");
                  clearInterval(sixthtime);
                  location.href="index.html";
              }
          let margin=marginTop1-10;
          if(margin>5){
          document.getElementById("ballon1").style.marginTop=margin+"px";
          marginTop1=margin;
          }
         },70);
      }
      else if(time==7)
        {
        console.log("seventh bug");
        clearInterval(sixthtime);
        marginTop1=350;
        seventhtime=setInterval(() => {
            var a=document.getElementById("ballon1").style.marginTop==10+"px";
            if(a)
              {
                  alert("✨🎉awesome trial✨🎉");
                  clearInterval(seventhtime);
                  location.href="index.html";
              }
        let margin=marginTop1-10;
        if(margin>5){
        document.getElementById("ballon1").style.marginTop=margin+"px";
        marginTop1=margin;
        }
    },100);
        }
    else 
    {
        {
            console.log("eight bug");
            clearInterval(seventhtime);
            marginTop1=350;
            seventhtime=setInterval(() => {
            let margin=marginTop1-10;
            if(margin>5){
            document.getElementById("ballon1").style.marginTop=margin+"px";
            marginTop1=margin;
            }
             },100);
             }   
    }
});