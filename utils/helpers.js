module.exports = {
  format_date: (date) => {
    const formattedDate = new Date(date);
    return `${
      formattedDate.getMonth() + 1
    }/${formattedDate.getDate()}/${formattedDate.getFullYear()}`;
  },
  highest_bid: (bids) => {
    const bidArray = [];
    for (var i = 0; i < bids.length; i++) {
      bidArray.push(bids[i].bid_price);
    }
    console.log(bidArray);
    const greatestBid = Math.max(...bidArray)
    return `${greatestBid}`
  }
};

