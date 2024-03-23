export type LatestReservations = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};


export type LatestReservationsRaw = Omit<LatestReservations, 'amount'> & {
  amount: number;
};


export type ReservationsTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};


export type ReservationForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

