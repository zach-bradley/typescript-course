
//Gets an index of an array of numbers
class ArrayOfNumbers {
  constructor(public collection: number[]){}

  get(index: number): number {
    return this.collection[index];
  }
}

//Get an index of an array of strings
class ArrayOfStrings {
  constructor(public collection: string[]){}
  get(index: number): string {
    return this.collection[index];
  }
}

//Generic class for retrieving an index from any collection 
class ArrayOfAnything<T> {
  constructor(public collection: T[]){}
  get(index: number): T {
    return this.collection[index]
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

class Car {
  print() {
    console.log('This is a car')
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void{
  for(let i = 0; i < arr.length; i++){
    arr[i].print()
  }
}