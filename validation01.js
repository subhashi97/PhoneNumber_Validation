//alert("hello");
function validation(){
    let phone= document.getElementById("num").value;
   // console.log(phone);

    let numlength = phone.length;
    //console.log(numlength);
    let firstnums = phone.substr(0, 2);
    let lastnums = phone.substr(numlength-9 , 9);
    //console.log(lastnum);

    if(numlength < 9){
        alert("Numbers Missing! Please check again..");
        document.getElementById("msg").innerHTML = "invalid Number";
       
    } else if(numlength == 9){
        alert("Number Validation Successful!");
        document.getElementById("msg").innerHTML = "94" + phone;

    }else if(numlength == 10){
        alert("Number Validation Successful!");
        document.getElementById("msg").innerHTML = "94" + lastnums;

    }else if(numlength < 11){
        alert("Invalid Number! Please check again..");
        document.getElementById("msg").innerHTML = "invalid Number";
       
    }else if(numlength == 11 && firstnums != 94){
        alert("Invalid Number! Please check again..");
        document.getElementById("msg").innerHTML = "invalid Number";
       
    }else if(numlength == 11 && firstnums == 94){
        alert("Number Validation Successful!");
        document.getElementById("msg").innerHTML = "94" + lastnums;
       
    }else{
        alert("Invalid Number");
        document.getElementById("msg").innerHTML = "invalid Number";
    }

}