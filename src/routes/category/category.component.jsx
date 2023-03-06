import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import { Title, CategoryContainer } from './category.styles';

const Category = () => {

    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
   
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [categoriesMap, category])

    return (
        <>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
                {/* Only when or products !== undefined we want to use map */}
                {
                    products &&
                    products.map((product) => {
                        const { id } = product;
                        return <ProductCard key={id} product={product} />
                    })
                }
            </CategoryContainer>
        </>
    )
}

export default Category;