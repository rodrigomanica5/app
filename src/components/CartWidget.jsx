import { ShoppingCart } from '@material-ui/icons'
import { Badge } from '@mui/material'
import { IconButton } from '@mui/material'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function CartWidget() {

    const { getItemQty } = useContext(CartContext)

    return (
        <>
            <div className='cartWidget'>
                <IconButton style={{ color: 'white' }}>
                    <Badge badgeContent={getItemQty()} color="success">
                        <ShoppingCart></ShoppingCart>
                    </Badge>
                </IconButton>
            </div>
        </>
    )
}

export default CartWidget