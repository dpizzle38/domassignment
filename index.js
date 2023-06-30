// Question 1

const para = document.querySelector("p");
console.log(para);


// Question 2
const firstParaID = document.querySelector("#firstP");
const secondParaID = document.querySelector("#secondP");
const thirdParaID = document.querySelector("#thirdP");
const fourthParaID = document.querySelector("#fourthP");

console.log(firstParaID);
console.log(secondParaID);
console.log(thirdParaID);
console.log(fourthParaID);

// Question 3

const allPara = document.querySelectorAll("p");

for(let i = 0; i < allPara.length; i++){
    allPara[0].textContent = "Winners never quit";
    allPara[1].textContent = "Quitters never win";
    allPara[2].textContent = "Givers never lack";
    allPara[3].textContent = "Fourth Paragraph";
    
    allPara[0].setAttribute("id", "firstP");
    allPara[0].setAttribute("class", "para1");
    allPara[1].setAttribute("id", "secondP");
    allPara[1].setAttribute("class", "para2" );
    allPara[2].setAttribute("id", "thirdP");
    allPara[2].setAttribute("class", "para3");
    allPara[3].setAttribute("id", "fourthP");
    allPara[3].setAttribute("class", "para4");

    // Exercise : Level 2

    // 1
    allPara[0].style.color = "green";
    allPara[0].style.backgroundColor = "blue"
    allPara[0].style.border = "black"
    allPara[0].style.fontSize = "25px";
    allPara[0].style.fontFamily = "poppins";

    allPara[1].style.color = "black";
    allPara[1].style.backgroundColor = "orange";
    allPara[1].style.border = "grey";
    allPara[1].style.fontSize = "15px";
    allPara[1].style.fontfamily = "poppins";

    allPara[2].style.color = "green";
    allPara[2].style.backgroundColor = "blue";
    allPara[2].style.border = "black";
    allPara[2].style.fontSize = "15px";
    allPara[2].style.fontFamily = "poppins";

    allPara[3].style.color = "white";
    allPara[3].style.background = "black";
    allPara[3].style.border = "grey";
    allPara[3].style.fontSize = "15px";
    allPara[3].style.fontFamily = "poppins";
    console.log(allPara[i]);
}

// 2

const allParaID = document.querySelectorAll("p");

allParaID.forEach(allPar => {
   if(1 % 2 === 0 ){
    allPar.style.color = "red";
   } else {
    allPar.style.color = "green";
   }

   

});

