async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (!username || !email || !password) {
    alert("Please fill in all the fields.");
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
      alert("Account created! Logging you in now.");
      document.location.replace("/profile");
    } else {
      const data = await response.json();
      if (data.message) {
        alert(`Error: ${data.message}`);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    }
  } catch (error) {
    alert("An error occurred. Please try again later.");
    console.error(error);
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
