//find all elements
let cityName=document.getElementById("enter-city")
let city=document.getElementById("city")
let wCondition=document.getElementById("w-condition")
let temparature=document.getElementById("w-temperature")
console.log(city);

// functionality

let button=document.querySelector("button")
button.addEventListener("click" , (e)=>{
    city.innerHTML=cityName.value
    async function getCity(){
         let jsonFile= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=b4ce50351554f076fdf1f7b993a5dea3`)
         let data=jsonFile.json()
         return data;
    }
    
    getCity().then((result)=>{
      console.log(result);
      let li=document.querySelectorAll("li")
      li[0].innerHTML  ="humidity :"+ result.main.humidity;
      li[1].innerHTML  = "pressure :"+result.main.pressure;
      li[2].innerHTML  ="temperature :" +result.main.temp
      wCondition.innerHTML=result.weather[0].main
    })
    .catch((result)=>{
       alert("API is not supported for this city")
    })
})

