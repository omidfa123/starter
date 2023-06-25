interface header {
  result: string;
  categories: CategoriesEntity[];
  menus: MenusEntityOrTopMenusEntity[];
  top_menus: MenusEntityOrTopMenusEntity[];
  info: Info;
}
interface CategoriesEntity {
  id: number;
  name: string;
  link: null;
  sub_category: SubCategoryEntity[];
}
interface SubCategoryEntity {
  id: number;
  name: string;
  parent_id: number;
  link: null;
  sub_category: SubCategoryEntity1[];
}
interface SubCategoryEntity1 {
  id: number;
  name: string;
  parent_id: number;
  link: null;
}
interface MenusEntityOrTopMenusEntity {
  id: number;
  title: string;
  link: string;
  position: number;
  type: number;
  status: number;
  created_at: string;
  updated_at: string;
}
interface Info {
  name: string;
  phone_number: string;
}

interface Page {
  result: string;
  seo: string;
  page: Page1;
  brands: string;
}
interface Page1 {
  headers?: null[] | null;
  original: Original;
  exception?: null;
}
interface Original {
  tag: string;
  children?: ChildrenEntity[] | null;
}
interface ChildrenEntity {
  tag: string;
  children?: ChildrenEntity1[] | null;
}
interface ChildrenEntity1 {
  tag: string;
  children?: ChildrenEntity2[] | null;
}
interface ChildrenEntity2 {
  tag: string;
  html: Html;
}
interface Html {
  type: string;
  pager_control?: null;
  pager_speed?: null;
  images?: Images | Entity[] | null;
  title?: string | null;
  has_banner?: number | null;
  auto_slide?: number | null;
  color?: string | null;
  banner?: Banner | null;
  products?: ProductsEntity[] | null;
  grid?: string | null;
}
interface Images {
  id: number;
  content?: ContentEntity[] | null;
  type: string;
  dir: string;
  created_at: string;
  updated_at: string;
}
interface ContentEntity {
  title: string;
  link: string;
  row: string;
  path: string;
}
interface Entity {
  id: number;
  content?: ContentEntity1[] | null;
  type: string;
  dir: string;
  created_at: string;
  updated_at: string;
}
interface ContentEntity1 {
  title?: string | null;
  link?: string | null;
  name: string;
  path: string;
  directory?: string | null;
}
interface Banner {
  title: string;
  link: string;
  image: string;
}
interface ProductsEntity {
  id: number;
  name: string;
  sku: string;
  en_name: string;
  new: number;
  price: number;
  special_price: SpecialPrice;
}
interface SpecialPrice {
  price: number;
  from_date: string;
  to_date: string;
}
interface Answers {
  categories: CategoriesEntity[] | null;
  products: ProductsEntity[] | null;
}
interface CategoriesEntity {
  detail: {
    name: string;
    en_name: null;
    id: number;
    position: number;
    sort_order: number;
  };
}
interface ProductsEntity1 {
  name: string;
  sku: string;
  en_name: string;
  new: boolean;
  new_from_date?: null;
  new_to_date?: null;
  prices: Prices;
  link?: null;
}
interface Prices {
  price: number;
  from_date?: null;
  to_date?: null;
}
interface ProductsEntity {
  product: {
    link: string;
    name: string;
    en_name: string;
    id: number;
  };
}
