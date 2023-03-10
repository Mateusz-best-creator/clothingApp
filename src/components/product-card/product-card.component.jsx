import './product-card.styles.scss';
import { useContext } from 'react';

import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component.jsx';

import { DropdownContext } from '../../contexts/cart-dropdown.context';

const ProductCard = ({ product }) => {

    const { addItemToCart } = useContext(DropdownContext)
    const { name, price, imageUrl } = product;

    const addProductToCart = () => {
        return addItemToCart(product);
    }

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart} >Add</Button>
        </div>
    )
}

export default ProductCard;