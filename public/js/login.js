async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value;

  if (email && password) {
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        // Clear password field and redirect to the profile page
        document.querySelector("#password-login").value = "";
        document.location.replace("/profile");
      } else {
        const data = await response.json();
        alert(data.message || "An error occurred. Please try again later.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.error(error);
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
