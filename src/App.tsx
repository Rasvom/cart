import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import Cart from "./Cart";

export interface CartData {
  name: string;
  text: string;
  image: string,
  price: string;
}

function App() {
  const [products, setProducts] = useState<CartData[]>([
    {
      name: "AKE Sneaker",
      price: "$120",
      image:
        "https://static01.nyt.com/images/2022/03/17/us/08xpsatan-shoe/merlin_186039729_cdb846bf-dc3f-49cf-8552-e3992140338b-superJumbo.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,consectetur.",
    },
    {
      name: "Nike Snikers",
      price: "$120",
      image:
        "https://static01.nyt.com/images/2022/03/17/us/08xpsatan-shoe/merlin_186039729_cdb846bf-dc3f-49cf-8552-e3992140338b-superJumbo.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,consectetur.",
    },
    {
      name: "Nikes Sneaker",
      price: "$120",
      image:
        "https://static01.nyt.com/images/2022/03/17/us/08xpsatan-shoe/merlin_186039729_cdb846bf-dc3f-49cf-8552-e3992140338b-superJumbo.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,consectetur.",
    },
    {
      name: "Niku",
      price: "$120",
      image:
        "https://static01.nyt.com/images/2022/03/17/us/08xpsatan-shoe/merlin_186039729_cdb846bf-dc3f-49cf-8552-e3992140338b-superJumbo.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,consectetur.",
    },
    {
      name: "Nikee",
      price: "$120",
      image:
        "https://static01.nyt.com/images/2022/03/17/us/08xpsatan-shoe/merlin_186039729_cdb846bf-dc3f-49cf-8552-e3992140338b-superJumbo.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,consectetur.",
    },
  ]);
  const [value, setValue] = useState("");

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const items = products.filter((item) =>
    item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );

  return (
    <div className={styles.wrapper}>
      <input className={styles.input} value={value} onChange={onChangeInput} />
      <div className={styles.main}>
        {items.map((item, index) => {
          return <Cart key={index} {...item} />;
        })}
      </div>
    </div>
  );
}

export default App;
