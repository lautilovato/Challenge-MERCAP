import { Call } from './call';
import { Country } from './country';

export class InternationalCall extends Call {
    constructor(
        date: Date, 
        durationInMinutes: number, 
        private country: Country,
    ) {
        super(date, durationInMinutes);
    }

    calculateCost(): number {
        return this.country.calculateCostFor(this.durationInMinutes);
    }
}