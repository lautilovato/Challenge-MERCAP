export class Country {
    constructor(
        private name: string,
        private pricePerMinute: number
    ) {}

    calculateCostFor(durationInMinutes: number): number {
        return durationInMinutes * this.pricePerMinute;
    }
}