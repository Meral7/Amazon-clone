import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/GlobalState';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import Order from './Order'; // Capitalized component import

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setOrders([]);
      return;
    }

    const collRef = collection(db, 'users', user.uid, 'orders');
    const orderedRef = query(collRef, orderBy('created', 'desc'));

    const unsubscribe = onSnapshot(orderedRef, (snapshot) => {
      setOrders(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => unsubscribe(); // Clean up listener when component unmounts or user changes
  }, [user]);

  return (
    <div>
      <h2>Your Orders</h2>
      <div>
        {orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}
