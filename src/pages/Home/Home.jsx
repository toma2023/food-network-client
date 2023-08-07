import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import ChefData from "../ChefCard/ChefData";
import FindRecipe from "../FindRecipe/FindRecipe";
import PopularMenu from "../PopularMenu/PopularMenu";
import ReviewData from "../Review/ReviewData";

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <FindRecipe></FindRecipe>
      <ChefData></ChefData>
      <PopularMenu></PopularMenu>
     <ReviewData></ReviewData>
    </div>
  );
};

export default Home;