let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  let response = await fetch(`https://official-joke-api.appspot.com/random_ten`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
  document.querySelector("#setup").innerHTML =`<div id="style">Set Up: ${data[0].setup}</div>`
   document.querySelector("#punchline").innerHTML =`<div id="style1">Punchline: ${data[0].punchline}</div>`
   document.querySelector("#setup1").innerHTML =`<div id="style2">Set Up: ${data[1].setup}</div>`
   document.querySelector("#punchline1").innerHTML =`<div id="style3">Punchline: ${data[1].punchline}</div>`
    document.querySelector("#setup2").innerHTML =`<div id="style4">Set Up: ${data[2].setup}</div>`
   document.querySelector("#punchline2").innerHTML =`<div id="style5">Punchline: ${data[2].punchline}</div>`
    document.querySelector("#setup3").innerHTML =`<div id="style6">Set Up: ${data[3].setup}</div>`
   document.querySelector("#punchline3").innerHTML =`<div id="style7">Punchline: ${data[3].punchline}</div>`
    document.querySelector("#setup4").innerHTML =`<div id="style8">Set Up: ${data[4].setup}</div>`
   document.querySelector("#punchline4").innerHTML =`<div id="style9">Punchline: ${data[4].punchline}</div>`
    document.querySelector("#setup5").innerHTML =`<div id="style10">Set Up: ${data[5].setup}</div>`
   document.querySelector("#punchline5").innerHTML =`<div id="style11">Punchline: ${data[5].punchline}</div>`
}

let Reload = document.querySelector("#reload")

Reload.addEventListener("click",()=>{
sendApiRequest()

})

