async function logout() {
  try {
    const confirmed = await Swal.fire({
      title: 'Logout Confirmation',
      text: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!',
    });

    if (confirmed.isConfirmed) {
      const response = await fetch("/api/users/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        Swal.fire({
          title: 'Logged Out',
          text: 'You have been logged out successfully!',
          icon: 'success',
          timer: 2000, // Automatically close the alert after 2 seconds
          timerProgressBar: true,
        }).then(() => {
          document.location.replace("/");
        });
      } else {
        const data = await response.json();
        if (data.error) {
          Swal.fire({
            title: 'Error',
            text: `Error: ${data.error}`,
            icon: 'error',
          });
        } else {
          Swal.fire({
            title: 'Unknown Error',
            text: 'An unknown error occurred. Please try again later.',
            icon: 'error',
          });
        }
      }
    }
  } catch (error) {
    Swal.fire({
      title: 'Error',
      text: 'An error occurred. Please try again later.',
      icon: 'error',
    });
    console.error(error);
  }
}

document.querySelector("#logout").addEventListener("click", logout);
