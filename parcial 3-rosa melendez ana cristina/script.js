


let containerFlag = document.getElementById("setFlag");
let containerCountry = document.getElementById("nameCountry");
let containernativeName = document.getElementById("nativeNamecountry");
let containercapital= document.getElementById("capital");

function getCountry() {
  getPost()
    .then((data) => data.json())
    .then((country) => {
      getflag(country);
      
    });
}

function getPost() {
  return fetch("https://restcountries.com/v3.1/all");
}

function getflag(countries) {
  containerFlag.innerHTML = "";
  containerCountry.innerHTML = "";
  containernativeName.innerHTML="";
  containercapital.innerHTML = "";

  countries.map((country, i) => {
    let flagShow = document.createElement("img");
    let nameShow = document.createElement("p");
   let nativeNameShow = document.createElement("p");
  let capitalShow = document.createElement("p");


    flagShow.src = country.flags.png;
    flagShow.height = "75";
    flagShow.width = "100";
    containerFlag.appendChild(flagShow);


    nameShow.innerHTML = country.name.common;
  
    containerCountry.appendChild(nameShow);

  nativeNameShow.innerHTML = country.name.official;
  containernativeName.appendChild(nativeNameShow);

  capitalShow.innerHTML = country.name.capital;
  containercapital.appendChild(capitalShow);
   
  });
}
