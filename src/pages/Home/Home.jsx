

import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import ChefCard from "../ChefCard/ChefCard";
import FindRecipe from "../FindRecipe/FindRecipe";
import PopularMenu from "../PopularMenu/PopularMenu";
import ReviewCard from "../Review/ReviewCard";



const Home = () => {
   
    return (
        <div>
          <Banner></Banner>
          <Categories></Categories>
          <FindRecipe></FindRecipe>
          <ChefCard></ChefCard>
          <PopularMenu></PopularMenu>
          <ReviewCard></ReviewCard>
        </div>
    );
};

export default Home;