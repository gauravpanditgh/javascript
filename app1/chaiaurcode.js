let buttons = document.querySelectorAll(".button")
let body = document.querySelector("body")

buttons.forEach( (button) => {
    button.addEventListener("click", (e) => {
        // console.log(e)
        // console.log(e.target)

        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor = e.target.id
                break;
            case "white":
                body.style.backgroundColor = e.target.id
                break;
            case "blue":
                body.style.backgroundColor = e.target.id
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id
                break;
            case "green":
                body.style.backgroundColor = e.target.id
                break;
            case "purple":
                body.style.backgroundColor = e.target.id
                break;
            default:
                break;
        }
    })
})
