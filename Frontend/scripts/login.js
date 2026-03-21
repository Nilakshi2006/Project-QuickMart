

// Pre-fill email if "Remember Me" was checked
window.addEventListener('DOMContentLoaded', () => {
  const rememberedEmail = localStorage.getItem('remembered_email');
  if (rememberedEmail) {
    document.getElementById('email').value = rememberedEmail;
    document.getElementById('remember').checked = true;
  }
});

const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("remember").checked;

  // Basic validation
  if (!email || !password) {
    showToast("Please fill in all fields", "error");
    return;
  }

  // Disable button during request
  const btn = document.getElementById("btn");
  btn.disabled = true;
  btn.textContent = "Logging in...";

  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
      // Save token and user data (will overwrite previous session)
      localStorage.setItem('quickmart_token', data.token);
      localStorage.setItem('quickmart_user', JSON.stringify(data.user));

      // Handle "Remember Me"
      if (rememberMe) {
        localStorage.setItem('remembered_email', email);
      } else {
        localStorage.removeItem('remembered_email');
      }

      showToast(data.message || "Login successful!", "success");

      // Redirect to home page after 1 second
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    } else {
      showToast(data.message || "Login failed", "error");
      btn.disabled = false;
      btn.textContent = "Login";
    }
  } catch (error) {
    console.error("Login Error:", error);
    showToast("Unable to connect to server", "error");
    btn.disabled = false;
    btn.textContent = "Login";
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

// Redirect to signup page
function signup() {
  window.location.href = "signup.html";
}
