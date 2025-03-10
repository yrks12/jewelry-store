# Test Cases for Jewelry Store

## Functionality Testing
1. **User Registration**
   - **Endpoint**: `/api/signup`
   - **Test**: Attempt to register with valid and invalid data.
   - **Expected Result**: Success message for valid data, error message for invalid data.

2. **User Login**
   - **Endpoint**: `/api/login`
   - **Test**: Attempt to login with correct and incorrect credentials.
   - **Expected Result**: Success message for correct credentials, error for incorrect.

3. **Product Fetching**
   - **Endpoint**: `/api/products`
   - **Test**: Retrieve product list.
   - **Expected Result**: Return 200 status and a list of products.

4. **Add Product (Admin)**
   - **Endpoint**: `/api/admin/products`
   - **Test**: Admin attempts to add a new product.
   - **Expected Result**: Success message, product added to the database.

5. **Shopping Cart Functionality**
   - **Test**: Add product to cart and check cart contents.
   - **Expected Result**: Product appears in the cart.

## Usability Testing
1. **Navigation Ease**
   - **Criteria**: Users should navigate without confusion.
   - **Expected Result**: Positive user feedback.

## Performance Testing
1. **API Performance**
   - **Criteria**: API response time should be within 2 seconds.
   - **Expected Result**: All requests return within the expected timeframe.