export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Car Name",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter Car Name",
  },
  {
    label: "Condition & Model Year",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter Condition & Model Year",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "Petrol", label: "Petrol" },
      { id: "Diesel", label: "Diesel" },
      { id: "Hybrid", label: "Hybrid" },
      { id: "EV", label: "EV" },
      { id: "Others", label: "Others" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "Audi", label: "Audi" },
      { id: "Mercedes", label: "Mercedes" },
      { id: "BMW", label: "BMW" },
      { id: "Mahindra", label: "Mahindra" },
      { id: "Maruti_Suzuki", label: "Maruti Suzuki" },
      { id: "Honda", label: "Honda" },
      { id: "Porche", label: "Porche" },
    ],
  },
  {
    label: "Rent Per Day",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter Rent Per Day",
  },
  {
    label: "Discounted Rent Per Day",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter Discounted Rent Per Day (optional)",
  },
  {
    label: "Total Cars In Inventory",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  Petrol: "Petrol",
  Diesel: "Diesel",
  Hybrid: "Hybrid",
  EV: "EV",
  Others: "Others",
};

export const brandOptionsMap = {
  Mercedes: "Mercedes",
  BMW: "BMW",
  Mahindra: "Mahindra",
  Maruti_Suzuki: "Maruti Suzuki",
  Honda: "Honda",
};

export const filterOptions = {
  category: [
    { id: "Petrol", label: "Petrol" },
    { id: "Diesel", label: "Diesel" },
    { id: "Hybrid", label: "Hybrid" },
    { id: "EV", label: "EV" },
    { id: "Others", label: "Others" },
  ],
  brand: [
    { id: "Mercedes", label: "Mercedes" },
    { id: "BMW", label: "BMW" },
    { id: "Mahindra", label: "Mahindra" },
    { id: "Maruti_Suzuki", label: "Maruti Suzuki" },
    { id: "Honda", label: "Honda" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Date of Pickup",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Format - DD/MM/YYYY",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "License_Number",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter Your License_Number",
  },
];
