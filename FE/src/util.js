import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
  // console.log(dayjs().month());
  // console.log(dayjs().date());
  month = Math.floor(month);
  const year = dayjs().year();
  // console.log(year);
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  // console.log(firstDayOfTheMonth);
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}
export function getWeek(week = dayjs().day()) {
  const year = dayjs().year();
  const month = dayjs().month();
  const firstDayOfTheWeek = dayjs(new Date(year, month, 1, 0)).day();
  let currentMonthCount = 0 - firstDayOfTheWeek;
  const daysMatrix = new Array(7).fill(null).map(() => {
    currentMonthCount++;
    return dayjs(new Date(year, month, currentMonthCount));
  });
  return daysMatrix;
}
