
const button = document.getElementById("buton")

button.addEventListener('click',function(event){
    const data1 = document.getElementById("firstvalue").value
    const eRate = document.getElementById("targetrate")
    const dropdown = document.getElementById("rate").value
    console.log(data1, dropdown)

    fetch(`https://api.exchangerate.host/convert?to=TRY&from=${dropdown}&amount=${data1}`)
    .then((response) => response.json())
    .then((data) => {
        eRate.value = data.result
    });
})

