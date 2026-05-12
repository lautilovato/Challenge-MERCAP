export abstract class Call {
    constructor(
        protected date: Date, 
        protected durationInMinutes: number
    ) {}

    abstract calculateCost(): number;

    getDuration(): number { 
        return this.durationInMinutes; 
    }

    getDate(): Date { 
        return this.date; 
    }
}