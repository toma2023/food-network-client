import { useContext } from "react";
import ReviewCard from "../Review/ReviewCard";
import { AuthContext } from "../../Providers/AuthProvider";

const ReviewData = () => {
    const { chefAllData } = useContext(AuthContext)
console.log(chefAllData)
    return (
        <div>
           <div>
            <h2 className='text-6xl text-white font-bold text-center mb-16'>Our Clients Review</h2>
            <div className='grid gap:4 md:gap-8 mb-16 lg:grid-cols-3 sm:grid-cols-2'>
                {
                    chefAllData.map(chefData => <ReviewCard
                        key={chefData.id}
                        chefData={chefData}
                    ></ReviewCard>)

                }
            </div>

        </div>
        </div>
    );
};

export default ReviewData;