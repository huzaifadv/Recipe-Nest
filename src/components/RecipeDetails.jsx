import React, { useState } from 'react'
import Model from 'react-modal'

export default function RecipeDetails({ model, setModel, product }) {

  return (
    <>
      <Model isOpen={model} onRequestClose={() => setModel(false)} style={{
        overlay: {
          background: "#000000e6"
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          backgroundColor: "#0f1620",
          color: "#fff",
          border: "none",
          padding: "20px 10px",
          width: '90%',
          maxWidth: '800px',
          maxHeight: '90vh',
          overflow: 'auto',
          borderRadius: '10px',
        }
      }} >

        
        <div className="relative ModelContent p-6 rounded-md bg-opacity-50" data-aos="zoom-in"  data-aos-duration="700">
          <button
            onClick={() => setModel(false)}
            className="absolute top-0 right-0 cursor-pointer text-white bg-[#EC3D08] px-[10px] py-[5px] mr-[10px] rounded-[50%]"
          ><i class="fa-solid fa-xmark"></i></button>

          <div>
            {product ? (

              <>

                <div className='text-center mb-[20px]'>
                  <img width="300px" src={product.strMealThumb} />
                </div>

                <div>
                  <h1 className="sm:text-[35px] text-[30px] font-bold mb-4">{product.strMeal}</h1>
                  <p className="mb-4"><strong>Category:</strong> {product.strCategory}</p>
                  <p className="mb-[30px] text-[15px]"><strong>Instructions:</strong> <br /> {product.strInstructions}</p>
                  {product.strYoutube && (
                    <a
                      href={product.strYoutube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[white] bg-red-500 px-[20px] py-[15px]"
                    >
                      <i className="fa-brands fa-youtube text-[18px]"></i> Watch on YouTube
                    </a>
                  )}
                </div>

              </>

            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>

      </Model>
    </>
  )
}
