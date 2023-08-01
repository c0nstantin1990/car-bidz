async function newFormHandler(event) {
  event.preventDefault();

  const make = document.querySelector('input[name="car-make"]').value;
  const model = document.querySelector('textarea[name="car-model"]').value;
  const year = document.querySelector('textarea[name="car-year"]').value;
  const price = document.querySelector('textarea[name="car-price"]').value;
  const start_bid = document.querySelector('textarea[name="car-lbid"]').value;
  const image_url = document.querySelector('textarea[name="car-image"]').value;

  const response = await fetch(`/api/cars`, {
    method: "POST",
    body: JSON.stringify({
      make,
      model,
      year,
      price,
      start_bid,
      image_url,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-car-form")
  .addEventListener("submit", newFormHandler);
