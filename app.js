var input=document.querySelector("#i1");
var btn=document.querySelector("#i2");
var output=document.querySelector("#i3");

function rev(event){
    var a=event.split("");
    var b=a.reverse();
    var c=b.join("");
    return c;
}

function replace(){
    var a=input.value;
    var rep=a.replaceAll("-","");
    return rep;
}

function palindrome(){
    var a=input.value;
    if(a == ""){
       alert("Something went wrong")
    }
    else{
    a=replace();
    console.log(a)
    var b=rev(a);
    console.log(b)
    for(var i=0;i<a.length;i++)
    {
       if(a[i]!=b[i])
       {
           output.innerText="Your birthday is not a palindrome";
           break;
       }
    }
    if(i == a.length)
    {
        output.innerText="Yay!! your birthday is a palindrome";
    }
}
}

btn.addEventListener("click",palindrome)
