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
24. Create Profile Screen
    1. get user info from context
    2. show user information
    3. create user update api
    4. update user info
25. Publish To Heroku
    1. create and config node project
    2. serve build folder in frontend folder
    3. Create heroku account
    4. connect it to github
    5. Create mongodb atlas database
    6. Set database connection in heroku env variables
    7. Commit and push
26. Add Sidebar and Search Box
    1. add sidebar
    2. add search box
27. Create Search Screen
    1. show filters
    2. create api for searching products
    3. display results
28. Create Admin Menu
    1. define protected route component
    2. define admin route component
    3. add menu for admin in header
29. Create Dashboard Screen
    1. create dashboard ui
    2. implement backend api
    3. connect ui to backend
30. Create Product
    1. create products button
    2. implement backend api
    3. handle on click
31. Create Edit Product
    1. create edit button
    2. create edit product ui
    3. dispaly product info in the input boxes
32. Implement Update Product
    1. create edit product backend api
    2. handle update click
33. Upload Product Image
    1. create cloudinary account
    2. use the api key in env file
    3. handle upload file
    4. implement backend api to upload
34. Delete Product
    1. show delete button
    2. implement backend api
    3. handle on click
35. List Orders
    1. create order list screen
    2. implement backen api
    3. fetch and display orders
36. Deliver Order
    1. add deliver button
    2. handle click action
    3. implement backen api for deliver
37. Delete Order
    1. add delete button
    2. handle click action
    3. implement backen api for delete
38. List Users
    1. create user list screen
    2. implement backen api
    3. fetch and display users
