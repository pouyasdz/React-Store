import React from "react";
import {
  MenuOutlined,
  LocalFireDepartmentOutlined as FireIcon,
  LocalOfferOutlined as OfferIcon,
  TabletMacOutlined,
  MemoryOutlined,
  LocalHospitalOutlined,
  WomanOutlined,
  WhatsApp,
  Telegram,
  Instagram,
  PhoneEnabled
} from "@mui/icons-material";


export const brandName = "بلوط";

const brandNameEng = "Balot"

const urlParamID = ":id";

const emailOne = "domain1@gmail.com";
const emailTow = "domain2@gmail.com";
const emailThree = "domain2@gmail.com";

const phoneNumberOne = "+98123456789";
const phoneNumberTow = "+98123456789";
const phoneNumberThree = "+98123456789";

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
    name: "دسته بندی",
    icon: MenuOutlined,
    path: Routing.category.all,
    primary: true,
  },
  {
    name: "بیشترین فروش",
    icon: FireIcon,
    path: Routing.product.topSeller,
    primary: false,
  },
  {
    name: "تخفیف",
    icon: OfferIcon,
    path: Routing.product.discountProduct,
    primary: false,
  },
];

export const menue = [
  {
    name: "موبایل",
    link: "/mobile",
    icon:TabletMacOutlined,
    submenu: [
      {
        name: "سامسونگ",
        link: "/samsong",
      },
      {
        name: "آیفون",
        link: "/iphone",
      },
      {
        name: "شیاومی",
        link: "/xiaome",
      },
    ],
  },
  {
    name: "کالای دیجیتال",
    link: "/digital",
    icon:MemoryOutlined,
    submenu: [
      {
        name: "لپتاپ",
        link: "/laptop",
      },
      {
        name: "اسپیکر",
        link: "/speaker",
      },
      {
        name: "مانیتور",
        link: "/monitor",
      },
    ],
  },
  {
    name: "لباس",
    link: "/swear",
    icon:WomanOutlined,
    submenu: [
      {
        name: "ورزشی",
        link: "/sport",
      },
      {
        name: "مردانه",
        link: "/means",
      },
      {
        name: "زنانه",
        link: "/women",
      },
    ],
  },
  {
    name: "سلامت",
    link: "/life",
    icon:LocalHospitalOutlined,
    submenu: [
      {
        name: "عطر و ادکلن",
        link: "/perfume",
      },
      {
        name: "مو",
        link: "/hair",
      },
      {
        name: "بدن",
        link: "/body",
      },
      {
        name: "پوست",
        link: "/skin",
      },
    ],
  },
];

export const slider = [
  {
    bgImage:"digital",
    link:"#"
  },
  {
    bgImage:"discount",
    link:"#"
  },
  {
    bgImage:"swear",
    link:"#"
  },
]

export const specialSuggestion = [
  {
    price:"",
    cover:"",
    link:""
  },
  {
    price:"",
    cover:"",
    link:""
  },
  {
    price:"",
    cover:"",
    link:""
  },
  {
    price:"",
    cover:"",
    link:""
  },
  {
    price:"",
    cover:"",
    link:""
  },
  {
    price:"",
    cover:"",
    link:""
  },
  {
    price:"",
    cover:"",
    link:""
  },
  {
    price:"",
    cover:"",
    link:""
  },
  {
    price:"",
    cover:"",
    link:""
  },
  {
    price:"",
    cover:"",
    link:""
  },
]

export const categoryOverView = [
  {
    name:"موبایل",
    path:"/mobile",
    cover:"/images/mbc.jpg",
  },
  {
    name:"کالای دیجیتال",
    path:"/digital",
    cover:"/images/categoryDigital.jpg",
  },
  {
    name:"پوشاک",
    path:"/swear",
    cover:"/images/categorySwear.jpg",
  },
  {
    name:"سلامت",
    path:"/life",
    cover:"/images/categoryLife.jpg",
  },
]

export const contact = {
  socialMedia:{
    title:"شبکه های اجتماعی",
    list:[
      {
        name:"whatsapp",
        link:`https://wa.me/${9800216583}`,
        icon:WhatsApp,
      },
      {
        name:"telegram",
        link:`https://t.me/${brandNameEng}`,
        icon:Telegram,
      },
      {
        name:"instagram",
        link:`https://www.instagram.com/${brandNameEng}`,
        icon:Instagram,
      },
    ]
  },
  emails:{
    title:"ایمیل ها",
    list:[
      {
        name:emailOne,
        link:`mailto:${emailOne}`,
      },
      {
        name:emailTow,
        link:`mailto:${emailTow}`,
      },
      {
        name:emailThree,
        link:`mailto:${emailThree}`,
      },
    ]
  },
  phoneNumber:{
    title:"تلفن تماس",
    list:[
      {
        name:phoneNumberOne,
        icon:PhoneEnabled,
      },
      {
        name:phoneNumberTow,
        icon:PhoneEnabled,
      },
      {
        name:phoneNumberThree,
        icon:PhoneEnabled,
      },
    ]
  }
}