const INSS_TABLE = [
  {
    id: 1,
    minValue: 0,
    maxValue: 1100,
    difference: 1 - 0,
    discountPercentage: 0.075,
    discountValue: -1,
  },
  {
    id: 2,
    minValue: 1100.01,
    maxValue: 2203.48,
    difference: 2203.48 - 1100,
    discountPercentage: 0.09,
  },
  {
    id: 3,
    minValue: 2203.49,
    maxValue: 3305.22,
    difference: 3305.22 - 2203.48,
    discountPercentage: 0.12,
  },
  {
    id: 4,
    minValue: 3305.23,
    maxValue: 6433.57,
    difference: 6433.57 - 3305.22,
    discountPercentage: 0.14,
  },
];

function round(value) {
  return +value.toFixed(2);
}

function calculateDiscountINSS(baseINSS) {
  let discountINSS = 0;

  if (baseINSS > 6433.57) {
    return 751.99;
  }

  for (var i = 0; i < INSS_TABLE.length; i++) {
    var currentItem = INSS_TABLE[i];
    let discountValue = 0;

    if (baseINSS > currentItem.maxValue) {
      // prettier-ignore
      discountValue = 
        round(currentItem.difference * currentItem.discountPercentage);

      discountINSS += discountValue;
    } else {
      // prettier-ignore
      discountValue = 
        round((baseINSS - currentItem.minValue) * currentItem.discountPercentage);

      discountINSS += discountValue;
      break;
    }
  }

  discountINSS = round(discountINSS);

  return discountINSS;
}

function calculateDiscountIRPF(baseIRPF) {
  let discountIRPF =
    baseIRPF < 1903.98
      ? 0
      : baseIRPF < 2826.65
      ? round(baseIRPF * 0.075) - 142.8
      : baseIRPF < 3751.05
      ? round(baseIRPF * 0.15) - 354.8
      : baseIRPF < 4664.68
      ? round(baseIRPF * 0.225) - 636.13
      : round(baseIRPF * 0.275) - 869.36;

  discountIRPF = round(discountIRPF);

  return discountIRPF;
}

function calculateSalaryFrom(fullSalary) {
  const baseINSS = fullSalary;
  const discountINSS = calculateDiscountINSS(baseINSS);

  const baseIRPF = baseINSS - discountINSS;
  const discountIRPF = calculateDiscountIRPF(baseIRPF);

  const netSalary = baseINSS - discountINSS - discountIRPF;

  const inssPercent = fullSalary > 0 ? (discountINSS / fullSalary) * 100 : 0;
  const irpfPercent = fullSalary > 0 ? (discountIRPF / fullSalary) * 100 : 0;
  const netSalaryPercent = fullSalary > 0 ? (netSalary / fullSalary) * 100 : 0;

  return {
    baseINSS,
    inssPercent,
    discountINSS,
    baseIRPF,
    irpfPercent,
    discountIRPF,
    //netSalary,
    //netSalaryPercent,
  };
}

console.log(calculateSalaryFrom(2000.00))


//export { calculateSalaryFrom };