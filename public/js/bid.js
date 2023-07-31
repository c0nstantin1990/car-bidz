async function bidFormHandler(event) {
    event.preventDefault();
  
    const bid_price = document
      .querySelector('textarea[name="bid-body"]')
      .value.trim();
  
    const car_id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
  
    if (bid_price) {
      const response = await fetch("/api/bids", {
        method: "POST",
        body: JSON.stringify({
          bid_price,
          car_id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector(".bid-form").addEventListener("submit", bidFormHandler);

  
  