let temp = document.querySelector(".temp");
let loc = document.querySelector(".loc");
let datime = document.querySelector(".dt");
let image = document.querySelector("img");
let condit = document.querySelector(".condi");
let inp = document.querySelector("input");
let form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    fetchData(inp.value);
})
async function fetchData(city){
    let url = `https://api.weatherapi.com/v1/current.json?key=cbc6fe459fc04eb991a145504252309&q=${city}&aqi=no`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    temp.innerHTML = data.current.temp_c + "&#176;C";
    loc.innerHTML = data.location.name;
    datime.innerHTML = data.location.localtime;
    image.src = data.current.condition.icon;
    condit.innerHTML = data.current.condition.text;
}
fetchData("mumbai");