# Audiophile

E-commerce website with Stripe integration for a fictional company called Audiophile.

## Stack

- Next.js, Redux, Typescript, Styled-components
- API: Stripe

## Others

Built mobile-first.

Stripe payments are fully integrated into the website. Since Audiophile isn't real e-commerce company and you can't buy a real product Stripe checkout is in a Test Mode.

To test that payments are functional use **4242 4242 4242 4242** as a credit card number and fill out the rest with whatever you want.

To remember users shopping cart I used localStorage.

In this project I'm using Redux Toolkit since it's the recommended toolset to write Redux logic. The reduction in boilerplate is nothing but amazing.

Checkout form is made with Formik and validated with Yup.
