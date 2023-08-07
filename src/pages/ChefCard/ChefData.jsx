import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ChefCard from "./ChefCard";
//import ChefCard from "./ChefCard";


const ChefData = () => {
    const { chefAllData } = useContext(AuthContext);
    console.log(chefAllData)
    return (
        <div>
            <div className=' '>
                
                <h1 className='text-6xl font-bold text-center text-white'>Our's Qualified chefs</h1>
                <div className="grid md:grid-cols-3 gap-8 my-10 text-white p-7 md:p-0">
                {
                        chefAllData?.map(chef => <ChefCard
                            key={chef?.id}
                            chef={chef}
                        >

                        </ChefCard>

                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default ChefData;