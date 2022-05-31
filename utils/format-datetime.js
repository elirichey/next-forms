export const combineDateTime = async (date, time) => {
  return await new Promise((resolve) => {
    const splitDate = date.split("-");
    const year = splitDate[0];
    const month = splitDate[1] - 1;
    const day = splitDate[2];
    const splitTime = time.split(":");
    const hours = splitTime[0];
    const minutes = splitTime[1];
    let dateTime = new Date();
    dateTime.setFullYear(year);
    dateTime.setMonth(month);
    dateTime.setDate(day);
    dateTime.setHours(hours);
    dateTime.setMinutes(minutes);
    dateTime.setSeconds(0);
    return resolve(dateTime);
  });
};

export const getDateMinimum = async () => {
  return await new Promise((resolve) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const res = `${year}-${month < 10 ? `0${month}` : month}-${day}`;
    return resolve(res);
  });
};
