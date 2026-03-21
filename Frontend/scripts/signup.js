
const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const phoneNumber = document.getElementById("phoneNumber").value.trim();
  const age = document.getElementById("age").value;
  const termsAccepted = document.getElementById("terms").checked;

  // Validation
 if (!name || !email || !password) {
  showToast("Please fill in all required fields", "error");
  return;
}

  if (!termsAccepted) {
    showToast("Please accept the terms and conditions", "error");
    return;
  }

  if (password.length < 6) {
    showToast("Password must be at least 6 characters", "error");
    return;
  }

  // Disable button during request
  const btn = document.getElementById("btn");
  btn.disabled = true;
  btn.textContent = "Creating Account...";

  try {
    const response = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phoneNumber,
        age: age ? parseInt(age) : undefined
      }),
    });

    const data = await response.json();

    if (data.success) {
      // Save token and user data (will overwrite previous session)
      localStorage.setItem('quickmart_token', data.token);
      localStorage.setItem('quickmart_user', JSON.stringify(data.user));

      showToast(data.message || "Account created successfully!", "success");

      // Redirect to home page after 1 second
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    } else {
      showToast(data.message || "Signup failed", "error");
      btn.disabled = false;
      btn.textContent = "Sign Up";
    }
  } catch (error) {
    console.error("Signup Error:", error);
    showToast("Unable to connect to server", "error");
    btn.disabled = false;
    btn.textContent = "Sign Up";
  }
});

// Toast notification function
function showToast(message, type = "success") {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "top",
    position: "right",
    style: {
      background: type === "success" ? "#28a745" : "#dc3545",
    },
  }).showToast();
}

// Redirect to login page
function login() {
  window.location.href = "login.html";
}

