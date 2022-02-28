export interface InboxData {
  vin: number;
  year: number;
  brand: string;
  color: string;
}

export interface AdviceSlip {
  slip: Advice;
}

export interface Advice {
  advice: string;
  id: number;
}
