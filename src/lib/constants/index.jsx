import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "products",
    label: "Products",
    path: "/products",
    icon: <HiOutlineCube />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/customers",
    icon: <HiOutlineUsers />,
  },
  {
    key: "transactions",
    label: "Transactions",
    path: "/transactions",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/messages",
    icon: <HiOutlineAnnotation />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];

export const config = {
  REACT_APP_BACKEND_URL: "https://oauth.hanet.com",
  REACT_APP_RESPONSE_TYPE: "code",
  CLIENT_ID: "0db34bcc32158f0ddfa62aa39fbc546c",
  ACCESS_TOKEN:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0ODYyMjU1NzQ1OTA3OTE2ODAiLCJlbWFpbCI6InBoYW50aGFuaGx1YW41NTNAZ21haWwuY29tIiwiY2xpZW50X2lkIjoiMGRiMzRiY2MzMjE1OGYwZGRmYTYyYWEzOWZiYzU0NmMiLCJ0eXBlIjoiYXV0aG9yaXphdGlvbl9jb2RlIiwiaWF0IjoxNjkwMDE0Mjg2LCJleHAiOjE3MjE1NTAyODZ9.IMtbSkA6yxlgkTVwJn5YlU9quysmMdvzCJsS_7CIKW0",
  REACT_APP_REDIRECT_URL: "/",
  REACT_APP_CLIENT_SECRET: "9828dc93a6dd4ec0a449283189a7b97f",
  REFRESH_TOKEN:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0ODYyMjU1NzQ1OTA3OTE2ODAiLCJlbWFpbCI6InBoYW50aGFuaGx1YW41NTNAZ21haWwuY29tIiwiY2xpZW50X2lkIjoiMGRiMzRiY2MzMjE1OGYwZGRmYTYyYWEzOWZiYzU0NmMiLCJ0eXBlIjoicmVmcmVzaF90b2tlbiIsImlhdCI6MTY5MDAxNDI4NiwiZXhwIjoxNzIxNTUwMjg2fQ.XNt2fZmZ37E6qNX9Ts-l2iy1QzsduZEHP2KRDeEEzv0",
};
