import React from "react";
import { connect } from "react-redux";

import "../assets/styles/App.scss";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselIten from "../components/CarouselItem";
import Header from "../components/Header";

const Home = (props) => {
  const { myList, trends, originals } = props;
  return (
    <div className="App">
      <Header />
      <Search isHome />

      {myList.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map((item, i) => (
              <CarouselIten
                key={item.id}
                id={item.id}
                cover={item.cover}
                title={item.title}
                year={item.year}
                contentRating={item.contentRating}
                duration={item.duration}
                isList
              />
            ))}
          </Carousel>
        </Categories>
      )}

      {trends.length > 0 && (
        <Categories title="Tendencias">
          <Carousel>
            {trends.map((item) => (
              <CarouselIten
                key={item.id}
                id={item.id}
                cover={item.cover}
                title={item.title}
                year={item.year}
                contentRating={item.contentRating}
                duration={item.duration}
              />
            ))}
          </Carousel>
        </Categories>
      )}

      {originals.length > 0 && (
        <Categories title="Originales de Platzi videos">
          <Carousel>
            {originals.map((item) => (
              <CarouselIten
                key={item.id}
                id={item.id}
                cover={item.cover}
                title={item.title}
                year={item.year}
                contentRating={item.contentRating}
                duration={item.duration}
              />
            ))}
          </Carousel>
        </Categories>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
