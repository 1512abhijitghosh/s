# MERN SEFKAM

# INFO

1. Introduction
2. Install Tools
3. Create React App
4. Create Git Repository
5. List Products
   i) create products array
   ii) add product images
   iii) render products
   iv) style products
6. Add page routing
   i) npm i react-router-dom
   ii) create route for home screen
   iii) create router for product screen

7. Create React Context For Add Item To Cart
   1. Create React Context
   2. define reducer
   3. create store provider
   4. implement add to cart button click handler
8. Complete Add To Cart
   1. check exist item in the cart
   2. check count in stock in backend
9. Create Cart Screen
   1. create 2 columns
   2. display items list
   3. create action column
10. Complete Cart Screen
    1. click handler for inc/dec item
    2. click handler for remove item
    3. click handler for checkout
11. Create Signin Screen
    1. create sign in form
    2. add email and password
    3. add signin button
12. Seed Sample Products
    1. create Product model
    2. create seed route
    3. use route in server.js
    4. seed sample product
13. Seed Sample Users
    1. create user model
    2. seed sample users
14. Create Signin Backend API
    1. create signin api
    2. npm install jsonwebtoken
    3. define generateToken
15. Complete Signin Screen
    1. handle submit action
    2. save token in store and local storage
    3. show user name in header
16. Create Shipping Screen
    1. create form inputs
    2. handle save shipping address
    3. add checkout wizard bar
17. Create Sign Up Screen
    1. create input forms
    2. handle submit
    3. create backend api
18. Implement Select Payment Method Screen
    1. create input forms
    2. handle submit
19. Create Place Order Screen
    1. show cart items, payment and address
    2. calculate order summary
20. Implement Place Order Action
    1. handle place order action
    2. create order create api
21. Create Order Screen
    1. create backend api for order/:id
    2. fetch order api in frontend
    3. show order information in 2 cloumns
22. Pay Order By PayPal
    1. generate paypal client id
    2. create api to return client id
    3. install react-paypal-js
    4. use PayPalScriptProvider in index.js
    5. use usePayPalScriptReducer in Order Screen
    6. implement loadPaypalScript function
    7. render paypal button
    8. implement onApprove payment function
    9. create pay order api in backend
23. Display Order History
    1. create order screen
    2. create order history api
    3. use api in the frontend
