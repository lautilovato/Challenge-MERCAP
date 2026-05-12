export abstract class Call {
    constructor(
        protected date: Date, 
        protected durationInMinutes: number
    ) {}

    abstract calculateCost(): number;

}