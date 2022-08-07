import { Component } from "react";
import CategoryItem from "./components/category-item/category-item.component";
// import "./categories.styles.scss";

class App extends Component {
  render() {
    const categories = [
      {
        id: 1,
        title: "Adult Skis",
        subtitle: "Book Now",
        imageUrl:
          "https://www.gessato.com/wp-content/uploads/2014/12/bomber-ski-luxury-skis-that-perform-on-the-slopes-11.jpg",
      },
      {
        id: 2,
        title: "Kids Skis",
        subtitle: "Book Now",
        imageUrl:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Feuomkw9idn6.exactdn.com%2Fwp-content%2Fuploads%2F2018%2F11%2Fjunior-buyback-program-banff-2.jpg%3Fstrip%3Dall%26lossy%3D1%26quality%3D70%26ssl%3D1&f=1&nofb=1",
      },
      {
        id: 3,
        title: "Used Goods",
        subtitle: "Shop Now",
        imageUrl:
          "https://www.oxygene.ski/wp-content/uploads/2018/10/ox-website-equipment-ski-hire-location.jpg",
      },

      {
        id: 4,
        title: "Other Stuff",
        subtitle: "Check Now",
        imageUrl:
          "https://static.pexels.com/photos/306002/pexels-photo-306002.jpeg",
      },
    ];
    return (
      <div className='categories-container'>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    );
  }
}

export default App;
