import { useState } from 'react'
import RecipeFind from './RecipeFind'
import RecipeDetails from './RecipeDetails'

export default function RecipeProduct() {

    const [isOpenModel, setIsOpenModel] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handle = (product) => {
        setIsOpenModel(true);
        setSelectedProduct(product);
    }

  
    return (
        <>  
            <RecipeFind seeDetails={handle} />
            <RecipeDetails model={isOpenModel} setModel={setIsOpenModel} product={selectedProduct} />
        </>
    )
}


