import React, { useContext, useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const ViewRecipes = () => {
    const recipeDetails = useLoaderData()
    const { chefPicture, chefName, description, likes, numberOfRecipes, yearsOfExperience, recipe_1, recipe_2, recipe_3, image_1, image_2, image_3, ingredients_1, ingredients_2, ingredients_3, cookingMethod_1, cookingMethod_2, cookingMethod_3, rating_1, rating_2, rating_3 } = recipeDetails;

    const notify = (e) => {
        toast("Added to favorite!");
        e.target.disabled = true;
    }


    return (
        <div className='text-white  '>
           
            <h2 className='text-5xl font-bold text-center'>Chef Recipes</h2>
            <div className='my-10 '>
                <div className="hero  bg-gray-700 p-8 rounded-md">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <LazyLoadImage
                            alt={''}
                            effect="blur" className="w-full md:max-w-sm  rounded-lg shadow-2xl"
                            src={chefPicture} />

                        <div>
                            <h1 className="text-5xl font-bold">{chefName}</h1>

                            <p className="py-6 ">{description}</p>
                            <p className='mb-3 flex align-items-center'>{likes}k <span className='ms-2'><FaThumbsUp></FaThumbsUp></span> </p>
                            <p className='text-xl mb-3'>Number of Recipes: {numberOfRecipes}</p>
                            <p className='text-xl mb-3'>Year of Experience: {yearsOfExperience}</p>
                            <button className="bg-purple-600 px-5 py-2 rounded-md">Hire Me</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-12 p-7 grid gap-5  md:grid-cols-3'>
                <div className="card mt-5 md:mt-0 w-full md:w-96 bg-gray-900 shadow-xl">
                    <figure><img className='md:h-[300px]' src={image_1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {recipe_1}

                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className='font-semibold'>Ingredients:</p>
                        {
                            ingredients_1?.map(int => <li>{int}</li>)
                        }
                        <p>{cookingMethod_1}</p>
                        <div className='flex-grow-1 flex align-items-center'>
                            <Rating
                                style={{ maxWidth: 140 }}
                                value={Math.round(rating_1 || 0)}
                                readOnly />
                            <span className='ms-2'> {rating_1}</span>
                        </div>
                        <div className="card-actions justify-end">
                            <button onClick={notify} className='btn btn-success'>Favorite</button>

                        </div>
                    </div>
                </div>

                <div className="card mt-5 md:mt-0 w-full md:w-96 bg-gray-900 shadow-xl">
                    <figure><img className='md:h-[300px]' src={image_2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {recipe_2}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className='font-semibold'>Ingredients:</p>
                        {
                            ingredients_2.map(int => <li>{int}</li>)
                        }
                        <p>{cookingMethod_2}</p>
                        <div className='flex-grow-1 flex align-items-center'>
                            <Rating
                                style={{ maxWidth: 140 }}
                                value={Math.round(rating_2 || 0)}
                                readOnly />
                            <span className='ms-2'> {rating_2}</span>
                        </div>
                        <div className="card-actions justify-end">
                            <button onClick={notify} className='btn btn-success'>Favorite</button>

                        </div>
                    </div>
                </div>
                <div className="card w-full mt-5 md:mt-0 md:w-96 bg-gray-900 shadow-xl">
                    <figure><img className='md:h-[300px]' src={image_3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {recipe_3}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className='font-semibold'>Ingredients:</p>
                        {
                            ingredients_3.map(int => <li>{int}</li>)
                        }
                        <p>{cookingMethod_3}</p>
                        <div className='flex-grow-1 flex align-items-center'>
                            <Rating
                                style={{ maxWidth: 140 }}
                                value={Math.round(rating_3 || 0)}
                                readOnly />
                            <span className='ms-2'> {rating_3}</span>
                        </div>
                        <div className="card-actions justify-end">
                            <button onClick={notify} className='btn btn-success'>Favorite</button>

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ViewRecipes;