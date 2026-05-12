export class Country {
    constructor(
        private name: string,
        private pricePerMinute: number
    ) {}

    // The country knows its rate, so it calculates the cost based on duration
    calculateCostFor(durationInMinutes: number): number {
        return durationInMinutes * this.pricePerMinute;
    }
}