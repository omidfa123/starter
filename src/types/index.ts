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
  city: string;
  state: string;
  street: string;
  isDefault: string;
};
