import { prepend } from "domutils";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const prependZero = (num) => {
  if (num < 10) return `0${num}`;
  return num;
};

const showDate = (day) => {
  let date = "";
  let suffix = "";

  date = prependZero(day);

  if (date[0] === "1") suffix = "th";
  else if (date[1] === "1") suffix = "st";
  else if (date[1] === "2") suffix = "nd";
  else if (date[1] === "3") suffix = "rd";
  else suffix = "th";
  return (
    <>
      {date}
      <sup>{suffix}</sup>
    </>
  );
};

const ShowTime = (time) => {
  const date = new Date(time);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  if (
    Date.now() - date.getTime() < 24 * 60 * 60 * 1000 &&
    day === new Date().getDate()
  ) {
    if (hours < 12) {
      return `${hours === 0 ? 12 : prependZero(hours)}:${prependZero(
        minutes
      )} am`;
    }
    return `${
      hours === 12 ? prependZero(hours) : prependZero(hours - 12)
    }:${prependZero(minutes)} pm`;
  }

  return (
    <>
      {showDate(day)} {months[month - 1]} {year}
    </>
  );
};

export default ShowTime;
