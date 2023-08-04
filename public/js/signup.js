function displayAlert(message, icon, timer) {
  Swal.fire({
    title: message,
    icon: icon,
    timer: timer,
    timerProgressBar: true,
    toast: true,
    position: "mid",
    showConfirmButton: false,
  });
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  // Validate password length (minimum 8 characters)
  if (password.length < 8) {
    displayAlert("Password must be at least 8 characters long.", "error", 3000);
    return;
  }

  if (!username || !email || !password) {
    displayAlert("Please fill in all the fields.", "error", 3000);
    return;
  }

  try {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      displayAlert("Account created! Logging you in now.", "success", 3000);
      document.location.replace("/profile");
    } else {
      const data = await response.json();
      if (data.message) {
        displayAlert(`Error: ${data.message}`, "error", 3000);
      } else {
        displayAlert(
          "Something went wrong. Please try again later.",
          "error",
          3000
        );
      }
    }
  } catch (error) {
    displayAlert("An error occurred. Please try again later.", "error", 3000);
    console.error(error);
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
