function home(){
    window.location.href = "index.html"
}

function login() {
    window.location.href = "login.html"
}

function signup() {
    window.location.href = "signup.html"
}

function products() {
    window.location.href = "products.html"
}


function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

 const statusMessage = localStorage.getItem("statusMessage");
  if (statusMessage) {
    // Show using Toastify
    Toastify({
      text: statusMessage,
      duration: 3000,
      close: true,
      gravity: "top", 
      position: "right",
      backgroundColor: "#008080",
    }).showToast();

    // Clear the message so it doesn’t repeat on refresh
    localStorage.removeItem("statusMessage");
 }