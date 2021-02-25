import './cart-icon.styles.scss'

import { connect } from 'react-redux'

import { ReactComponent as ShoppingCart } from '../../assests/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingCart className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(null, mapDispatchToProps)(CartIcon)
