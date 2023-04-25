let button = document.querySelector(".post")
button.addEventListener("click", () => post())



let api = "https://6411c0685d0c49b7c5b8fb8c.mockapi.io/yanki/market"

function post(){
    axios.post(api,{
        title: "hello",
        password: 1234,
    })
}


