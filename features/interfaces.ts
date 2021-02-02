interface Reportable {
  summary():string;
}

const oldCivic = {
  make: 'Civic',
  broken: true,
  summary(): string {
    return `Broken?  ${this.broken}`
  }
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `This soda has ${this.sugar}g of sugar`
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
}

printSummary(oldCivic);
printSummary(drink);