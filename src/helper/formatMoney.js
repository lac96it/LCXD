import formatNumber from "./formatNumber";

export default function formatMoney(number) {
  return formatNumber(number, { round: 0 })
}