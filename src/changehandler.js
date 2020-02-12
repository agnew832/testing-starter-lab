/**
 * This class handles change for a vending machine.
 *
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
  constructor(amountDue) {
    this.amountDue = amountDue;
    this.cashTendered = 0;
   
  }

  /**
   * The customer inserts a coin, increasing the cashTendered.
   * The parameter "type" is a string that is either quarter, dime, nickel, or penny
   */
  insertCoin(typeOfCoin) {
    if (typeOfCoin === "quarter") {
      this.cashTendered += 25;
    } else if (typeOfCoin === "dime") {
      this.cashTendered += 10;
    } else if (typeOfCoin === "penny") {
      this.cashTendered += 1;
    }
  }

  /**
   * Returns true if enough coins have been inserted to at least meet the amountDue
   */
  isPaymentSufficient() {
    if (this.cashTendered >= this.amountDue) {
      return true;
    } else {
      return false;
    }
  }
  
  giveChange() {
   let changeDue = {quarters:0, dimes:0, nickels:0, pennies:0} ,   
    while (this.cashTendered > this.amountDue) {
      if ((this.cashTendered - this.amountDue)>= 25) {
        (this.cashTendered > this.amountDue)-= 25;
        quarters++;
      } else if ((this.cashTendered - this.amountDue)>= 10) {
        (this.cashTendered > this.amountDue) -= 10;
        dimes++;
      } else if ((this.cashTendered - this.amountDue) >= 5) {
        change -= 5;
        nickels++;
      } else {
        ((this.cashTendered > this.amountDue) < 5);
        pennies++;
      }
    }
    // TODO return the correct change in the following format...
    return {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
  }
}

module.exports = { ChangeHandler };
