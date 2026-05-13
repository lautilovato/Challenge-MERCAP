import { Call } from './call';

export class LocalCall extends Call {
    
    calculateCost(): number {
        if (this.isWeekend() || !this.isBusinessHour()) {
            return this.durationInMinutes * 0.10;
        }

        return this.durationInMinutes * 0.20;
    }

    private isWeekend(): boolean {
        const day = this.date.getDay();
        return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
    }

    private isBusinessHour(): boolean {
        const hour = this.date.getHours();
        return hour >= 8 && hour < 20;
    }
}