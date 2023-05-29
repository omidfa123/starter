export interface IRegions {
  status: string;
  regions: RegionsEntity[] | null;
}
interface RegionsEntity {
  id: number;
  name: string;
  country_id: number;
  created_at: string;
  updated_at: string;
  cities?: CitiesEntity[] | null;
}
interface CitiesEntity {
  id: number;
  name: string;
  region_id: number;
  created_at: string;
  updated_at: string;
}

export type AddressInputs = {
  mobile: string;
  name: string;
  telephone: string;
  post_code: string;
  city_id: any;
  state: string;
  street: string;
  is_default: string;
};

export type userInfoInputs = {
  mobile: string;
  first_name: string;
  last_name: string;
  telephone: string;
  gender: string;
  email: string;
  national_code: string;
  password: string;
  password_confirmation: string;
};

export type routes = {
  'change-information': {
    slug: string;
    index: number;
    label: string;
  };
  orders: {
    slug: string;
    index: number;
    label: string;
  };
  credit: {
    slug: string;
    index: number;
    label: string;
  };
  address: {
    slug: string;
    index: number;
    label: string;
  };
  comments: {
    slug: string;
    index: number;
    label: string;
  };
  favorites: {
    slug: string;
    index: number;
    label: string;
  };
  wallet: {
    slug: string;
    index: number;
    label: string;
  };
};
