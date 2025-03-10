# Test Plan for Jewelry Store

## 1. Test Cases Executed
- **Functionality Testing:**
    - Verify user registration via `/api/signup`
    - Verify user login via `/api/login`
    - Verify product fetching via `/api/products`
    - Verify adding a product via `/api/admin/products` by an admin user
    - Verify the shopping cart functionality

- **Usability Testing:**
    - Assess navigation ease on the homepage
    - Evaluate the design layout of product listings
    - Verify responsiveness on various devices

- **Performance Testing:**
    - Test site response time for loading pages (should be less than 3 seconds)
    - Check server response time for API endpoints (should be less than 2 seconds)

## 2. Bugs and Issues Found
- Registration page occasionally fails to show success message on form submission.
- Product listing does not display correctly when filtered.
- Performance issue identified: loading time exceeds 5 seconds during peak traffic conditions.

## 3. Performance Metrics
- Average page load time: 3.5 seconds
- Average server response time for API: 2.5 seconds
- Maximum concurrent users before performance degradation: 8,000 users

## 4. Usability Feedback
- Users found the shopping cart icon hard to locate.
- The font size for product descriptions needs to be larger for better readability.

## 5. Recommendations for Improvements
- Improve the error handling in user registration and login.
- Optimize images to reduce load times.
- Make UI adjustments to enhance the visibility of important features like the shopping cart.