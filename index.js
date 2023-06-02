const firstPara = document.querySelector("p");
console.log(firstPara);

const firstParaID = document.querySelector("firstP");
const secondParaID = document.querySelector("secondP");
const thirdParaID = document.querySelector("thirdP");
const fourthParaID = document.querySelector("fourthP");

console.log(firstParaID);
console.log(secondParaID);
console.log(thirdParaID);
console.log(fourthParaID);

const allPara = document.querySelectorAll("p");
console.log(allPara);

for(let i = 0; i < allPara.length; i++){
    console.log(allPara[i].textContent);
}


firstParaID[0].id = "firstP";
firstParaID[0].className = "para1";
firstParaID[0].setAttribute("id", "firstP");
firstParaID[0].setAttribute ("class", "para1");
secondParaID[1].id = "secondP";
secondParaID[1].className = "para2";
secondParaID[1].setAttribute ("id", "secondP");
secondParaID[1].setAttribute("class", "para2");
thirdParaID[2].id = "thirdP";
thirdParaID[2].className = "para3";
thirdParaID[2].setAttribute("id", "thirdP");
thirdParaID[2].setAttribute("class", "para3");
fourthParaID[3].id = "fourthP"
fourthParaID[3].className = "para4";
fourthParaID[3].setAttribute("id", "fourthP");
fourthParaID[3].setAttribute("class", "para4");


firstParaID.style.color = "red";
secondParaID.style.color = "blue";
thirdParaID.style.color = "green";
fourthParaID.style.colr = "black"

firbstParaID.style.background = "black";
secondParaID.style.background = "red";
thirdParaID.style.background = "green";
fourthParaID.style.background = "blue";

firstParaID.style.border = "solid1px blue";
secondParaID.style.border = "solid1px red";
thirdParaID.style.border = "solid1px black";
fourthParaID.style.border = "solid1px grey";


firstParaID.style.fontsize = "25px";
secondParaID.style.fontsize = "15px";
thirdParaID.style.fontsize = "18px";
fourthParaID.style.fontsize = "20px";

firstParaID.style.fontfamily = "poppins";
secondParaID.style.fontfamily = "poppins";
thirdParaID.style.fontfamily = "poppins";
fourthParaID.style.fontfamily = "Arial";

firstParaID.style.color = "green";
thirdParaID.style.color = "green";

secondParaID.style.color = "red";
fourthParaID.style.color = "red";

for(let i = 0; i < allPara.length; i++){
    firstParaID.style.color = "green";
    thirdParaID.style.color = "green";
    secondParaID.style.color = "red";
    fourthParaID.style.color = "red";
    console.log(allPara[i]);
}

for(let i = 0; i < allPara.length; i++){
    firstParaID.setAttribute.id = "firstP";
    secondParaID.setAttribute.id = "secondP";
    thirdParaID.setAttribute.id = "thirdP";
    fourthParaID.setAttribute.id = "fourthP";
    console.log(allPara[i]);
}
