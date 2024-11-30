export interface CRMCustomer {
  store: string;
  location: string;
  name: string;
  email: string;
  phone: string;
}

export interface CRMTicket {
  id: string;
  subject: string;
  status: string;
  priority: string;
  customer: CRMCustomer;
  createdAt: string;
  updatedAt: string;
}
