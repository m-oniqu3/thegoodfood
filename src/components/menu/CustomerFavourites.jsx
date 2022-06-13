import React from "react";
import styled from "./CustomerFavourites.module.css";
import Button from "../button/Button";
import Heading from "../header/Heading";
import Wrapper from "../helpers/Wrapper";
import { favorites } from "./favourites";

const CustomerFavourites = () => {
  const text = (
    <>
      Customer <span>Favourites</span>
    </>
  );

  const faves = favorites.map((item) => {
    return (
      <article key={item.id} className={styled.faves}>
        <figure>
          <img src={item.url} alt={item.name} />
        </figure>

        <div>
          <p className={styled.name}> {item.name}</p>

          <div>
            <p className={styled.price}>$ {item.price}</p>
            <Button>order</Button>
          </div>
        </div>
      </article>
    );
  });
  return (
    <section className={styled.favourites}>
      <Wrapper>
        <article className={styled.intro}>
          <Heading text={text} className="heading-md" />
          <p className="paragraph">
            Some of our most popular dishes include the Barbecue Pizza, the
            Cream Cheese Pasta, and the Double Deluxe Burger. Our guests can't
            get enough of these classic mouth-watering dishes!
          </p>
        </article>

        <section className={styled["faves-container"]}>{faves}</section>
      </Wrapper>
    </section>
  );
};

export default CustomerFavourites;
