import { faker } from "@faker-js/faker";

export const inventory = [];
for (let i = 0; i < 11; i++) {
  inventory.push({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(100, 200),
    url: "/assets/photo-" + (i + 1) + ".jpg",
  });
}

export const currency = [
  {
    id: faker.datatype.uuid(),
    name: "Dollar United States",
    abbrev: "USD",
  },
  {
    id: faker.datatype.uuid(),
    name: "Dollar Canada",
    abbrev: "CAD",
  },
  {
    id: faker.datatype.uuid(),
    name: "Euro",
    abbrev: "EUR",
  },
];
