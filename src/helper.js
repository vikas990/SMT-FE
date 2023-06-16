// convert number number to words
const ones = [
  "",
  "One ",
  "Two ",
  "Three ",
  "Four ",
  "Five ",
  "Six ",
  "Seven ",
  "Eight ",
  "Nine ",
  "Ten ",
  "Eleven ",
  "Twelve ",
  "Thirteen ",
  "Fourteen ",
  "Fifteen ",
  "Sixteen ",
  "Seventeen ",
  "Eighteen ",
  "Nineteen ",
];
const tens = [
  "",
  "",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];

export function inWords(num) {
  if ((num = num.toString()).length > 9) return "overflow";
  var n = ("000000000" + num)
    .substr(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return;
  var str = "";
  str +=
    n[1] != 0
      ? (ones[Number(n[1])] || tens[n[1][0]] + " " + ones[n[1][1]]) + "crore "
      : "";
  str +=
    n[2] != 0
      ? (ones[Number(n[2])] || tens[n[2][0]] + " " + ones[n[2][1]]) + "lakh "
      : "";
  str +=
    n[3] != 0
      ? (ones[Number(n[3])] || tens[n[3][0]] + " " + ones[n[3][1]]) +
        "thousand "
      : "";
  str +=
    n[4] != 0
      ? (ones[Number(n[4])] || tens[n[4][0]] + " " + ones[n[4][1]]) + "hundred "
      : "";
  str +=
    n[5] != 0
      ? (str != "" ? "and " : "") +
        (ones[Number(n[5])] || tens[n[5][0]] + " " + ones[n[5][1]])
      : "";
  return str;
}
