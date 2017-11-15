{

    let fn=document.getElementById("firstName").nodeValue;
    let ln=document.getElementById("lastName").nodeValue;
    let mail=document.getElementById("email").nodeValue;
    let selection=document.getElementById("mediaChannelSelect").nodeValue;
    let nwslttr=document.getElementById("checkbox");
    let disable=true;


    if(fn !== null){
        document.getElementById("firstNameMandatory").style.display="none";
    }else{
        document.getElementById("firstNameMandatory").style.display="block";
        disable=false;
    }

    if(ln !== null){
        document.getElementById("lastNameMandatory").style.display="none";
    }else{
        document.getElementById("lastNameMandatory").style.display="block";
        disable=false;
    }

    if(mail !== null){ //if I added the exception with nwslttr here I would get and Error TS2365
        document.getElementById("emailMandatory").style.display="none";
    }else{
        document.getElementById("emailMandatory").style.display="block";
        disable=false;
    }
    
    if(selection==="Other"){
        document.getElementById("otherMediaChannel").style.display="none";
    }else{
        document.getElementById("otherMediaChannel").style.display="block";
        disable=false;
    }

   /* if(disable===false){//if I added the exception with disabling a button, I would get and Error TS2339
        document.getElementById("submit").disable=true;
    }else{
        document.getElementById("submit").disable=false;
    }
*/
}