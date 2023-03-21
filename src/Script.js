export const generateData = () => {
  var arr = new Array(101).fill(0);
  const today = new Date().getTime();
  arr = arr.map((value, index) => index).filter((value) => value % 2 === 0);
  arr = arr
    .map((value) => today - 86400000 * value)
    .map((value) => new Date(value));

  var randomValues = [];

  for (let i = 0; i < 51; i++) {
    var yPos = Math.floor(Math.random() * 51);
    randomValues.push({ Date: arr[i], yPos });
  }

  return randomValues;
};
