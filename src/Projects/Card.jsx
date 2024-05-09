import React from "react";
import Menu from "../UIUX/Menubar";
import Cards from "../UIUX/Cards";

const Card = () => {
  return (
    <>
      <Menu />
      <Cards
        imgSrc="https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&w=600"
        userName="Sai Sashreek D"
        post="Front End Developer"
      />
      <Cards
        imgSrc="https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&w=600"
        userName="Himakshi"
        post="AI / ML Engineer"
      />
      <Cards
        imgSrc="https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&w=600"
        userName="Mounika"
        post="Deeplearning Architect"
      />
    </>
  );
};

export default Card;
