const timeDifference = (date1, date2) => {
  var difference = date1.getTime() - date2.getTime();

  var days = Math.floor(difference / 1000 / 60 / 60 / 24);
  difference -= days * 1000 * 60 * 60 * 24;

  var hours = Math.floor(difference / 1000 / 60 / 60);
  difference -= hours * 1000 * 60 * 60;

  var minutes = Math.floor(difference / 1000 / 60);
  difference -= minutes * 1000 * 60;

  var seconds = Math.floor(difference / 1000);

  return { days, hours, minutes, seconds };
};
module.exports = timeDifference;
