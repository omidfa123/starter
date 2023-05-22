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
