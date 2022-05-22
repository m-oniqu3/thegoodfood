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
          <Heading text={text} className="heading-sml" />
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </article>

        <section>{faves}</section>
      </Wrapper>
    </section>
  );
};

export default CustomerFavourites;
