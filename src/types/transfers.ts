export interface TransferRecipient {
  active: boolean;
  createdAt: string;
  currency: string;
  description: unknown | null;
  domain: string;
  email: unknown | null;
  id: number;
  integration: number;
  metadata: unknown | null;
  name: string;
  recipient_code: string;
  type: string;
  updatedAt: string;
  is_deleted: boolean;
  isDeleted: boolean;
  details: TransferRecipientDetails;
}

export interface TransferRecipientDetails {
  authorization_code: unknown | null;
  account_number: string;
  account_name: string;
  bank_code: string;
  bank_name: string;
}

export interface TransferSession {
  provider: unknown | null;
  id: unknown | null;
}

export interface Transfer {
  amount: number;
  createdAt: string;
  currency: string;
  domain: string;
  failures?: unknown | null;
  id: number;
  integration: number;
  reason: string;
  reference: string;
  source: string;
  source_details: unknown | null;
  status: "success" | "failed" | "abandoned" | "pending";
  titan_code: unknown | null;
  transfer_code: string;
  transferred_at: unknown | null;
  updatedAt: string;
  recipient: TransferRecipient;
  session: TransferSession;
  fee_charged: number;
}

export interface TransferServerData {
  data: Array<Transfer>;
  status: boolean;
  message: string;
  meta: TransferServerDataMeta;
}

export interface TransferServerDataMeta {
  total: number;
  skipped: number;
  perPage: number;
  page: number;
  pageCount: number;
}
