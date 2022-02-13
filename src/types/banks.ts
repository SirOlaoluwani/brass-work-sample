export interface Bank {
  name: string;
  slug: string;
  code: string;
  longcode?: string;
  gateway?: string;
  pay_with_bank: boolean;
  active: boolean;
  is_deleted: boolean;
  country: string;
  currency: string;
  type: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface BankServerData {
  data: Array<Bank>;
  status: boolean;
  message: string;
}

export interface BankAccountDetails {
  account_name: string;
  account_number: string;
  bank_id: number;
}
