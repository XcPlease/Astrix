

cred = {
    username: "idan",
    password: "idan",
}


const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  

async function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


        if(password == cred.password && username == cred.username) {
            console.log("Yes")
            Swal.fire('Signed In successfully!', 'Redirecting..', 'success')    
            await sleep(700)
            window.location.href = "/index.html";


        } else {
            Swal.fire(`Couldn't Sign In..`, 'Try Again..', 'error')    

        }


    }




async function rev() {
    const password = document.querySelector("#password");
    const type = password.getAttribute("type");
    password.setAttribute("type", "text");

}






