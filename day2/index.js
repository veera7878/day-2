let inputSearchEl = document.querySelector(".inputSearh")
let recentInput = []
let formInputEl = document.getElementById("inutform")
const listofRecentEl = document.querySelector(".listofRecent")

inputSearchEl.addEventListener("keydown", () => {
    //console.log(inputsearchEl)*/
    if (inputsearchEl.value) {
        document.getElementById("closeSearch").style.display = "block";
    } else {
        document.getElementById("closeSearch").style.display = "none";
    }
})
formInputEl.addEventListener("submit", (e)) => {
    e.preventDefault()
    let listofRecent = ""
    recentInput.push(inputsearchEl.value)
    console.log(recentInput)

    if (recentInput.length > 0) {
        for (let i = 0; i < recentInput.length; i++) {
            listofRecentHTML +=
                <
                div class = "recentItem" >
                <
                div class = "recentIcon" >
                <
                img src = "./recent.png" >
                <
                <
                /div> <
            p > $ { recentinput[i] } < /p>  < /
            div >
        }
    }
    listof

}