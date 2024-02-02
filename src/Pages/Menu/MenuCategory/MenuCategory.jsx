import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "../../../components/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items, title, coverImg }) => {
  // console.log(items)
  return (
    <div className="pt-8">
      {title && <Cover img={coverImg} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center">
      <Link to={`/order/${title}`}><button className="btn btn-primary">Order Now</button></Link>
      </div>
    </div>
  );
};

export default MenuCategory;
