import { Call } from './call';
import { Locality } from './locality';

export class NationalCall extends Call {
    constructor(
        date: Date, 
        durationInMinutes: number, 
        private locality: Locality,
    ) {
        super(date, durationInMinutes);
    }

    calculateCost(): number {
        return this.locality.calculateCostFor(this.durationInMinutes);
    }
    

}