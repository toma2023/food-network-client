

const Categories = () => {
    return (
        <div className="mt-12 p-7 md:p-0">
            <div className="text-center" >
                <p className="text-purple-600 mb-2">Choose a Category</p>
                <h2 className="text-white font-bold text-5xl">Recipe Categories</h2>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 ">
                <div className="flex flex-col items-center">
                <img className="rounded-[50%] w-60 h-60" src="https://i.ibb.co/YB68N7j/food-5.jpg" alt="" />
                <p className="text-center text-white mt-4 font-semibold text-lg">Appetizers</p>
                </div>
                <div className="flex flex-col items-center">
                <img className="rounded-[50%] w-60 h-60" src="https://i.ibb.co/k948RmX/food2.jpg" alt="" />
                <p className="text-center text-white mt-4 font-semibold text-lg">Vegetarian</p>
                </div>
                
                <div className="flex flex-col items-center">
                <img className="rounded-[50%] w-60 h-60" src="https://i.ibb.co/SRnVsZd/food-3.jpg" alt="" />
                <p className="text-center text-white mt-4 font-semibold text-lg">Pasta</p>
                </div>
                <div className="flex flex-col items-center">
                <img className="rounded-[50%] w-60 h-60" src="https://i.ibb.co/Rj9FV5N/food-4.jpg" alt="" />
                <p className="text-center text-white mt-4 font-semibold text-lg">Burger</p>
                </div>
               
              
               
            </div>

        </div>
    );
};

export default Categories;