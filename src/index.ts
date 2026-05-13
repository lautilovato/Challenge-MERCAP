import { LocalCall } from './classes/localCall';
import { NationalCall } from './classes/nationalCall';
import { InternationalCall } from './classes/internationalCall';
import { Locality } from './classes/locality';
import { Country } from './classes/country';
import { Invoice } from './classes/invoice';

// 1. Setup Reference Mocking Data 
const cordoba = new Locality('Cordoba', 0.50);
const usa = new Country('USA', 1.20);

// 2. Simulate User Calls
// Business day at 14:00 (Business hour) -> 10 mins * 0.20 = $2.00
const localCall1 = new LocalCall(new Date('2026-05-12T14:00:00'), 10); 

// Business day at 22:00 (Off-hour) -> 5 mins * 0.10 = $0.50
const localCall2 = new LocalCall(new Date('2026-05-12T22:00:00'), 5);

// Weekend (Sunday) at 10:00 -> 20 mins * 0.10 = $2.00
const localCall3 = new LocalCall(new Date('2026-05-10T10:00:00'), 20);

// National Call -> 10 mins * 0.50 = $5.00
const nationalCall = new NationalCall(new Date('2026-05-12T15:00:00'), 10, cordoba);

// International Call -> 5 mins * 1.20 = $6.00
const internationalCall = new InternationalCall(new Date('2026-05-14T09:00:00'), 5, usa);

// Group all calls for the billing period
const userCalls = [
    localCall1, 
    localCall2, 
    localCall3, 
    nationalCall, 
    internationalCall
];

// 3. Generate Monthly Invoice
// Client: Lautaro Lovato, Basic Fee: $15.00, Month: 5 (May), Year: 2026
const mayInvoice = new Invoice("Lautaro Lovato", 15.00, userCalls, 5, 2026);

// 4. Print the final receipt
mayInvoice.printReceipt();