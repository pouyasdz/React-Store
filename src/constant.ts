import React from "react";
import {MenuOutlined, LocalFireDepartmentOutlined as FireIcon
    , LocalOfferOutlined as OfferIcon} from "@mui/icons-material";

export const initialLang = {
  lang: "",
  diraction: "",
  search: {
    placeHolder: "",
    result: {
      "404": "",
      waiting: "",
    },
  },
  bottomNav: {
    category: "",
    bestSeller: "",
    discount: "",
    help: "",
  },
};
export const initialBottomNav = {
  name: "",
  icon: React.Fragment,
  path: "",
  primary: false,
};
export const brandName = "بلوط";

const urlParamID = ":id";

export const Routing = {
  home: "/",
  category: {
    all: "category/all",
    singlePageCagegory: `category/${urlParamID}`,
  },
  product: {
    singlePageProduct: `product/${urlParamID}`,
    topSeller: `product/best-seller`,
    discountProduct: "product/discount",
  },
  cart: `cart/${urlParamID}`,
};

export const bottomNavItems = [
  {
    name:"دسته بندی",
    icon:MenuOutlined,
    path:Routing.category.all,
    primary:true,
  },
  {
    name:"بیشترین فروش",
    icon:FireIcon,
    path:Routing.product.topSeller,
    primary:false,
  },
  {
    name:"تخفیف",
    icon:OfferIcon,
    path:Routing.product.discountProduct,
    primary:false,
  },
] 