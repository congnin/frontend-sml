/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_51HixFuGskkzfD3hA2khy5cn0afJzoWbWJHiDt1oiwObdKJRrBPKsj0xF2B6HbrdzQQJ6jQrhNJfiTvNtlkFWXd4C009hyQjDJb');

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    console.log(session);

    // 2) Create checkout form + change credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
