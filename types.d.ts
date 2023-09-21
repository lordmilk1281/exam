interface Applicant {
  id: number;
  name: string;
  age: number;
  email: string;
  address: {
    name: string;
    street: string;
  };
  phone: string;
  application: {
    position: string;
    startDate: string;
  };
}