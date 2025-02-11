/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dayCost = 40;
  let fullPrice = dayCost * days;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTurm = 3;
  const shortTurmDiscount = 20;

  if (days >= longTerm) {
    return (fullPrice -= longTermDiscount);
  }

  if (days >= shortTurm) {
    return (fullPrice -= shortTurmDiscount);
  }

  return fullPrice;
}

module.exports = calculateRentalCost;
