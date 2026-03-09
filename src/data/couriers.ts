import dhlLogo from '../assets/dhl.png';
import aramexLogo from '../assets/aramex.png';
import fedexLogo from '../assets/fedex.png';
import type { Courier } from '../types/types';

export const courierData: Courier[] = [
  { 
    id: '1', 
    name: 'DHL Express', 
    basePrice: 45, 
    tax: 5, 
    estimatedDays: 2, 
    isFastest: true, 
    logo: dhlLogo 
  },
  { 
    id: '2', 
    name: 'Aramex', 
    basePrice: 20, 
    tax: 2, 
    estimatedDays: 5, 
    isCheapest: true, 
    logo: aramexLogo 
  },
  { 
    id: '3', 
    name: 'FedEx', 
    basePrice: 38, 
    tax: 4, 
    estimatedDays: 3, 
    logo: fedexLogo 
  },
];