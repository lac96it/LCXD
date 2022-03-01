import _ from 'lodash';

function formatThousands(m) {
  let n = String(m),
    p = n.indexOf('.')
  return n.replace(
    /\d(?=(?:\d{3})+(?:\.|$))/g,
    (m, i) => p < 0 || i < p ? `${m},` : m
  )
}

function formatNumber(number, options) {

  if(Number.isNaN(Number(number))) return 0;

  // if (typeof number !== 'number') return 0;

  let numberPipeOptions = number;

  if (options?.round !== undefined) numberPipeOptions = _.round(numberPipeOptions, options?.round);

  return formatThousands(numberPipeOptions);
}

export default formatNumber;