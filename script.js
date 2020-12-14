// alert("Hello Mr Alexios");

function ageInDays() {

    let dob = prompt("Please enter your Date Of Birth : DD-MM-YYY");

    const dobarr = dob.split("-");
    let cmp = new Array();

    cmp.push(dobarr[0]);
    cmp.push(dobarr[1]);
    let user_year = Number(dobarr[2]);
    const date = new Date();
    const year = date.getFullYear();
    const daysFromBirth = (year - user_year) * 365;

    const h1 = document.createElement("h1");
    h1.setAttribute("id","ageInDays");
  
    const textAnswer = document.createTextNode(`You are ${daysFromBirth} Days old.`);
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);

}

function reset(){
    document.getElementById("ageInDays").remove();

}





