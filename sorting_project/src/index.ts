import { NumbersCollection } from './NumbersCollection';
import {CharactersCollection} from './CharactersCollection';


const numbersCollection = new NumbersCollection([10, 3, -5, 4]);
const charCollection = new CharactersCollection('asdgaexgob');

charCollection.sort()
numbersCollection.sort()

console.log(charCollection.data)
console.log(numbersCollection.data)

