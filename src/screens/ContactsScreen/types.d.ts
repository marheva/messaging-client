interface CategoryPropsTypes {
  _id: string;
  name: string;
}

interface ContactPropsTypes {
  _id: string;
  first_name: string;
  last_name?: string;
  company_name?: string;
  address?: string;
  city?: string;
  country?: string;
  state?: string;
  zip?: string;
  phone: string;
  phone_1?: string;
  email?: string;
  email_1?: string;
  category?: CategoryPropsTypes;
  customerId?: string;
}

type CSVFiles = string[];
