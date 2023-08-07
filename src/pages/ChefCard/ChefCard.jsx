import { FaThumbsUp } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } = chef;
    
    return (
        <div className="">

            <div className="p-3 card card-compact w-full md:w-[400px] bg-gray-900 shadow-xl">
                <figure><LazyLoadImage
                    alt={''}
                    className="max-w-sm  rounded-lg shadow-2xl"
                    src={chefPicture} /></figure>

                <div className="card-body">
                            <h2 className="card-title text-2xl font-semibold">{chefName}</h2>
                            <p className='text-lg mb-0'>Year of Experience : {yearsOfExperience}</p>
                            <p className='text-lg mt-0'>Number of Recipes : {numberOfRecipes}</p>
                            <p className='flex'>{likes} <span className='ms-2'><FaThumbsUp></FaThumbsUp></span> </p>
                            <div className="card-actions justify-end">
                                <Link to={`showRecipe/${id}`}><button className="bg-purple-600 px-5 py-2 rounded-md">View Recipes</button></Link>

                            </div>
                        </div>

            </div>

        </div>
    );
};

export default ChefCard;