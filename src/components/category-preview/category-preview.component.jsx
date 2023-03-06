import './category-preview.styles.scss';
import ProductCard from '../product-card/product-card.component';
import { Link } from 'react-router-dom';

const CategoryPreview = ({ title, products }) => {

    const urlToGo = title.toLowerCase();

    return (
        <div className='category-preview-container'>
            <h2>
                <Link to={urlToGo} >
                    <span className='title'>{title.toUpperCase()}</span>
                </Link>
            </h2>
            <div className='preview'>
                {
                    products.filter((_, idx) => {
                        return idx < 4;
                    }).map((product) => {
                        const { id } = product;
                        return <ProductCard key={id} product={product} />
                    })
                }
            </div>
        </div>
    )
}

export default CategoryPreview;