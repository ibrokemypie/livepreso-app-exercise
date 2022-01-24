/**
 * If number is divisible by 2, return "Live"
 * If number is divisble by 3, return "Preso"
 * If number is divisible by 2 and 3, return "LivePreso"
 * otherwise return the number
 * @param {number} num
 */
export function livePresoGame(num) {
  let returnString = "";

  if (num % 2 == 0) {
    returnString += "Live";
  }

  if (num % 3 == 0) {
    returnString += "Preso";
  }

  return (returnString !== "" ? returnString : num);
}

