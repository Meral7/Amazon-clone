import moment from 'moment/moment'
import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import { NumericFormat } from 'react-number-format'

export default function Order({ order }) {
    return (
        <div>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM DO YYYY h:mma')}</p>
            <p><small>{order.id}
                </small></p>
                {order.data.basket?.map((item) => (<CheckoutProduct key={item.id} id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                hiddenButton />))}
                       <NumericFormat prefix="$" allowLeadingZeros thousandSeparator="," decimalScale={2} renderText={(value) => (
                <>
                    <p>
                        Subtotal({basket.length} items) :<strong>{value}</strong>
                    </p>
                </>
            )}
            value={order.data.amount *100} // Assuming basket is an array of items with a price property
            displayType="text"
            />
        </div>
    )
}
