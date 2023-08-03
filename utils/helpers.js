module.exports = {
  format_date: (date) => {
    if (!date || isNaN(new Date(date))) {
      throw new Error("Invalid date input");
    }

    const formattedDate = new Date(date);
    return `${
      formattedDate.getMonth() + 1
    }/${formattedDate.getDate()}/${formattedDate.getFullYear()}`;
  },

  highest_bid: (bids) => {
    if (!bids || bids.length === 0) {
      return "No bids";
    }

    const highestBid = Math.max(...bids.map((bid) => bid.bid_price));
    return `${highestBid}`;
  },

  highest_bid_object: (bids) => {
    if (!bids || bids.length === 0) {
      return null;
    }

    const sortedBids = bids.slice().sort((a, b) => b.bid_price - a.bid_price);
    return sortedBids[0];
  },
};
