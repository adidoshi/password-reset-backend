# Complete User Authentication - Forget & Reset password

#### Backend: NodeJs + ExpressJs + MongoDB

#### User Authentication: JWT

#### Forgot password (Sending email to user): Nodemailer & Sendgrid

### Entire flow-

- Register user - save in database
- Login user - check user exists || not & match hashed password by **bcrypt**

- Forgot password -

User enters their email -> check weather user exists in DB -> if user not present (error) -> if found generates a random string by **Crypto** module in Node -> storing that string in DB for further verification -> send email to user with resetpassword link -> when user proceeds on that page -> retrieving the random string & check weather it matches the string in DB -> if it matches reset Password page is visible to user.
If string doesn't matches then error (Invalid reset token)

- Reset password -

Now the new password entered by user is stored in the database and the random string is cleared.

All requests and endpoints description written in POSTMAN documentation -
https://documenter.getpostman.com/view/15329989/UVC9fQUB
