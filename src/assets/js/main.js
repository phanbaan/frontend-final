function getDay() {
  const today = new Date();
  let dayofweek = today.getDay();
  const dayname = [
    "Chủ nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
  ];
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  return (
    dayname[dayofweek] +
    "  Ngày " +
    day +
    "  Tháng " +
    month +
    "  Năm  " +
    year
  );
}
export default getDay