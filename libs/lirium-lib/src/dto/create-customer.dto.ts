export class CreateCustomerDTO {
  reference_id: string;
  profile: ProfileDTO;
  contact: ContactDTO;
}

class ProfileDTO {
  label: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  date_of_birth: Date;
  national_id_country: string;
  national_id_type: string;
  national_id: string;
  citizenship: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
}

class ContactDTO {
    email: string; 
    cellphone: string;
}
