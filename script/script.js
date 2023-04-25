// let button = document.querySelector(".post")
// button.addEventListener("click", () => post())

let api = "https://6411c0685d0c49b7c5b8fb8c.mockapi.io/yanki/market";

// function post(){
//     axios.post(api,{
//         title: "hello",
//         password: 1234,
//     })
// }

let login = document.forms.login;
let sign = document.forms.sign;

let reg = document.querySelector("#reg");
let log = document.querySelector("#log");

reg.onclick = () => {
  login.classList.add("none");
  sign.classList.remove("none");
};
log.onclick = () => {
  login.classList.remove("none");
  sign.classList.add("none");
};

let signin_btn = document.querySelector("#signin");
let login_btn = document.querySelector("#login");
let login_username = document.querySelector("#login_username");
let login_password = document.querySelector("#login_password");
let arr = []

login_btn.onclick = () => {
    checkout(login_username.value,login_password.value);
};
async function checkout(username,password) {
  await axios.get(api).then((response) => arr = response.data);
  for(let i of arr){
    if(username == i.username && password == i.password){
        reload_interface(i)
    }
  }
}

/////////////////////
// sign

let sign_username = document.querySelector("#sign_username");
let sign_age = document.querySelector("#sign_age");
let sign_skills = document.querySelector("#sign_skills");
let sign_number = document.querySelector("#sign_number");
let sign_inst = document.querySelector("#sign_inst");
let sign_password = document.querySelector("#sign_password");

let signin = document.querySelector("#signin");
signin.onclick = () => {
    let obj = {
        username: sign_username.value,
        age: sign_age.value,
        skills: sign_skills.value,
        number: sign_number.value,
        inst: sign_inst.value,
        password: sign_password.value,
    }
    createUser(obj)
    login.classList.remove("none");
    sign.classList.add("none");
};



async function createUser(obj){
    await axios.post(api, obj)
}


// nextSibling
// previousSibling



function reload_interface(obj){
    let wrp = document.querySelector(".wrp")
    login.style.display = "none"
    sign.style.display = "none"

    wrp.innerHTML = `
    <h1>USERNAME: ${obj.username} </h1>
    <h1>AGE: ${obj.age} 22</h1>
    <h1>SKILLS: ${obj.skills}</h1>
    <h1>NUMBER: ${obj.number}</h1>
    <h1>INSTAGRAM: ${obj.inst}</h1>
    `

}