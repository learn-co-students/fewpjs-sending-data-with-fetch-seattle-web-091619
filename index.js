// Add your code here

const USER_URL = "http://localhost:3000/users"
aaaaa()

function aaaaa(){

  let form = document.createElement("form")
  form.id = "form"
  let inputname = document.createElement("input")
  inputname.type = "text"
  inputname.name = "name"
  inputname.placeholder = "User Name"
  inputname.className = "input"
  let inputemail = document.createElement("input")
  inputemail.type = "text"
  inputemail.name = "email"
  inputemail.placeholder = "User Email"
  inputemail.className = "input"
  let inputsubmit = document.createElement("input")
  inputsubmit.type = "submit"
  inputsubmit.value = "Submit"

  form.addEventListener('submit', (ev)=>{
    ev.preventDefault()
    let input = document.getElementsByClassName("input")
    let inputName = input.name.value
    let inputEmail = input.email.value
    submitData(inputName, inputEmail)
  })

  form.append(inputname, inputemail, inputsubmit)
  document.body.append(form)
}
function submitData(userName, userEmail){
  console.log("in submit listener")

    return fetch(USER_URL, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail
        })
    })
    .then(resp => resp.json())
    .then(json => {
      console.log("heooooo")
      console.log(json)
      addDataToDOM(json)
    })
    .catch(function(error) {
      let message = document.createElement("p");
      message.textContent = error.message;
      console.log(error.message);
      document.body.append(message)
    });
}

function addDataToDOM(json){
  console.log("in displayData")

  let userDiv = document.createElement("div")
  let userUl = document.createElement("ul")

  let userId = document.createElement("li")
  userId.textContent = json.id
  // let username = document.createElement("Li")
  // let userEmail = document.createElement("Li")
  //
  // username.textContent = json.name
  // userEmail.textContent = json.email

  userUl.append(userId)
  userDiv.append(userUl)
  document.body.append(json.id)
}
