import React, { useEffect, useState } from 'react'

export default function RecipeFind({ seeDetails }) {

    const [food, setFood] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);



    const timer = () => {
        setLoading(true); // show loading spinner
        setTimeout(() => {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
                .then(res => res.json())
                .then(data => {
                    setFood(data.meals || []);
                    setLoading(false);
                })
                .catch(error => {
                    console.log(`Error while fetching data: ${error}`);
                    setLoading(false);
                });
        }, 1000);
    };


    useEffect(() => {
        timer();
    }, []);


    return (
        <>
            <div className="container mx-auto my-[100px]">

                {/* Search */}
                <div className='text-center inputBox'>
                    <h1 className='w-full text-[#fff] font-[800] sm:text-[40px] text-[25px] mb-4'>
                        Find Any Recipe
                    </h1>
                    <div className="flex justify-center items-center w-full mt-[30px]">
                        <input
                            type="text"
                            placeholder='Search Any Recipe'
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    timer();
                                }
                            }}
                            className="h-12 sm:h-14 px-4 rounded-l-md border-none outline-none w-2/3"
                        />
                        <button
                            className='searchBtn h-12 sm:h-14 px-6 rounded-r-md bg-[#EC3D08] text-white font-semibold'
                            onClick={timer}
                        >
                            Search
                        </button>
                    </div>
                </div>



                <div className="relative grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:gap-[30px] mx-[20px] gap-[50px] mt-[100px]">

                    {/* Data */}

                    {loading ? (
                        // Loader only inside container
                        <div className="absolute inset-0 flex justify-center items-center bg-white/80 z-10">
                            <div role="status">
                                <svg
                                    aria-hidden="true"
                                    className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-[#EC3D08]"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                    />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>


                    ) :

                        (
                            Array.isArray(food) && food.map((meal, index) => (

                                <div key={index} className="w-full max-w-sm border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up" data-aos-duration="2000">

                                    <img className="rounded-t-lg" src={meal.strMealThumb} alt="" />

                                    <div className="p-5">

                                        <h3 className="mb-4 text-[25px] font-[700] tracking-tight text-gray-900 dark:text-white">
                                            {meal.strMeal}
                                        </h3>
                                        <p className="mb-2 tracking-tight text-gray-900 dark:text-white">
                                            <b>Category:</b> {meal.strCategory}
                                        </p>

                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            This recipe is very delicious, quick to prepare, healthy, and perfect for any meal or occasion.

                                        </p>
                                        <button
                                            onClick={() => seeDetails(meal)}
                                            className=" cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#EC3D08]"                                        >
                                            View Instructions
                                            <svg
                                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            ))
                        )
                    }
                </div>
            </div>
        </>
    )
}
