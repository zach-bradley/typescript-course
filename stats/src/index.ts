import { MatchReader } from './MatchReader';
import {CsvFileReader} from './CsvFileReader';
import {MatchResult} from './MatchResult';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);

matchReader.load()

let manUnitedWins = 0;



console.log(manUnitedWins)