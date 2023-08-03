async function logout() {
  try {
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      const data = await response.json();
      if (data.error) {
        alert(`Error: ${data.error}`);
      } else {
        alert("An unknown error occurred. Please try again later.");
      }
    }
  } catch (error) {
    alert("An error occurred. Please try again later.");
    console.error(error);
  }
}

document.querySelector("#logout").addEventListener("click", () => {
  const confirmed = confirm("Are you sure you want to log out?");
  if (confirmed) {
    logout();
  }
});
