let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()

    let height = parseInt(querySelector("#height").value)
    let weight = parseInt(querySelector("#weight").value)
    let results = document.querySelector("#results")
    
    if(height === "" || height < 0 || isNaN(height)){
        results.innerHTML = "enter valid value"
    }
    else if(weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = "enter valid value"
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}<span>`
    }
})