const imgbox = document.getElementById("imgbox");
const qr_image = document.getElementById("qr_image");
const qr_text = document.getElementById("qr_text")
const hide = document.getElementsByClassName("hide")
const second = document.getElementsByClassName("second")
const generate = document.getElementById("generate")
const reset = document.getElementById("reset")



generate.addEventListener("click", () => {
    if (qr_text.value === "") {
        alert("PLease Enter Input!")
        return
    }


    qr_image.setAttribute("src", `https://api.qrserver.com/v1/create-qr-code/?data=${qr_text.value}&amp;size=100x100`)
    console.log(hide)
    Array.from(hide).forEach((ele) => {
        ele.style.display = "none"
    })

    Array.from(second).forEach((ele) => {
        ele.style.display = "block"
    })

})

reset.addEventListener("click", () => {
    Array.from(hide).forEach((ele) => {
        ele.style.display = "block"
    })
    Array.from(second).forEach((ele) => {
        ele.style.display = "none"
    })
})

