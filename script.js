let str = "";
console.log(str.slice(0,str.length-1))
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            str = eval(str);
            document.querySelector("#display").value = str
        }
        else if (e.target.innerHTML == "AC") {
            str = ""
            document.querySelector("#display").value = str
        }
        else if (e.target.innerHTML == "C") {
            str = str.slice(0,str.length-1)
            document.querySelector("#display").value = str
        }
        else {
            console.log(e.target)
            str = str + e.target.innerHTML;
            // console.log(str)
            document.querySelector("#display").value = str

        }

    })
})