# M & N Fashions Website

Open `index.html` in a browser.

## Included
- Round M & N Fashions logo on the first interface
- Login page with phone number + 6 OTP boxes
- Resend OTP button
- Hamburger menu after login
- Profile, Addresses, Orders, Cart and Logout menu items
- 5 categories: T-Shirts, Shirts, Pants, Jackets, Inner Wear
- Product images/cards (sample SVG placeholders)
- Product page with colour and size buttons
- Add to Cart / Buy Now
- Cart -> Place Order -> Payment Mode -> Bill -> Track Order

## IMPORTANT: Real SMS OTP
The included OTP page is a front-end demo. A real OTP cannot be sent from plain HTML/CSS/JS alone.
For real phone OTP, connect Firebase Phone Authentication (or another SMS OTP provider), enable the provider, configure the web app, and replace the demo OTP functions in `login.html` with the provider's verification flow.

The supplied logo image is placed in `assets/mn-logo.png` and displayed inside circular frames using CSS.
