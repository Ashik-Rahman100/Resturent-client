import React from "react";
import { Helmet } from "react-helmet-async";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      {/* offerd */}
      <SectionTitle subHeading="Don't miss" heading="Today's offer" />
      <MenuCategory items={offered} ></MenuCategory>
      {/* dessert */}
      <MenuCategory items={dessert} title='dessert' coverImg={dessertImg} />
      <MenuCategory items={pizza} title='pizza' coverImg={pizzaImg} />
      <MenuCategory items={salad} title='salad' coverImg={saladImg} />
      <MenuCategory items={soup} title='soup' coverImg={soupImg} />
    </div>
  );
};

export default Menu;
