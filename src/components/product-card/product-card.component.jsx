import './product-card.styles.scss'
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/toggleCart.context';

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCard} = useContext(CartContext);
    const addProductToCard = () => addItemToCard(product);

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCard} >Add to card</Button>
        </div>
    )
}

export default ProductCard;