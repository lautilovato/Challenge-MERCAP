import { Call } from './call';

export class Invoice {
    constructor(
        private clientName: string,
        private basicFee: number,
        private calls: Call[],
        private month: number,
        private year: number
    ) {}

    private calculateTotalConsumption(): number {
        return this.calls.reduce((total, call) => total + call.calculateCost(), 0);
    }

    private calculateTotalToPay(): number {
        return this.basicFee + this.calculateTotalConsumption();
    }

    printReceipt(): void {
        console.log(`=======================================`);
        console.log(`INVOICE - Client: ${this.clientName}`);
        console.log(`Period: ${this.month}/${this.year}`);
        console.log(`=======================================`);
        console.log(`Basic Fee: $${this.basicFee.toFixed(2)}`);
        console.log(`Calls Consumption: $${this.calculateTotalConsumption().toFixed(2)}`);
        console.log(`---------------------------------------`);
        console.log(`TOTAL TO PAY: $${this.calculateTotalToPay().toFixed(2)}`);
        console.log(`=======================================`);
    }
}