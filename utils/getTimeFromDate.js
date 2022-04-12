const pad = num => ("0" + num).slice(-2);
const getTimeFromDate = timestamp => {
  const date = new Date(timestamp);
  let hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
};
module.exports = getTimeFromDate;
