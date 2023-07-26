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
    key: "management",
    label: "Management",
    path: "/management",
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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0ODYyMjU1NzQ1OTA3OTE2ODAiLCJlbWFpbCI6InBoYW50aGFuaGx1YW41NTNAZ21haWwuY29tIiwiY2xpZW50X2lkIjoiMGRiMzRiY2MzMjE1OGYwZGRmYTYyYWEzOWZiYzU0NmMiLCJ0eXBlIjoiYXV0aG9yaXphdGlvbl9jb2RlIiwiaWF0IjoxNjkwMTEwNzI1LCJleHAiOjE3MjE2NDY3MjV9.VH9RwydIp60dfDKf5Auh8gPdVK3DbC90xjcf0J0zsBE",
  REACT_APP_REDIRECT_URL: "http://localhost:3000",
  REACT_APP_CLIENT_SECRET: "9828dc93a6dd4ec0a449283189a7b97f",
  REFRESH_TOKEN:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0ODYyMjU1NzQ1OTA3OTE2ODAiLCJlbWFpbCI6InBoYW50aGFuaGx1YW41NTNAZ21haWwuY29tIiwiY2xpZW50X2lkIjoiMGRiMzRiY2MzMjE1OGYwZGRmYTYyYWEzOWZiYzU0NmMiLCJ0eXBlIjoicmVmcmVzaF90b2tlbiIsImlhdCI6MTY5MDExMDcyNSwiZXhwIjoxNzIxNjQ2NzI1fQ.FcVFMyKqVshFLDvjDi7G56ESNVEUWonM3RXvIWp5Yds",
};
