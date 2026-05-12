import { Call } from './call';

export class LocalCall extends Call {
    
    calculateCost(): number {
        const dayOfWeek = this.date.getDay();
        const hour = this.date.getHours();
        
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        const isBusinessHour = hour >= 8 && hour < 20;

        if (isWeekend || !isBusinessHour) {
            return this.durationInMinutes * 0.10;
        }

        return this.durationInMinutes * 0.20;
        
    }
}