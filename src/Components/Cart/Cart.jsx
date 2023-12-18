import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

const Cart = () => {
    const dispatch = useDispatch();
    const { } = useSelector((state) => state);


    return (
        <div>
            <h1>Your order</h1>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody></tbody>
            </Table>

        </div>
    );
}

export default Cart;
