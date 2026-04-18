# VWO Login Page Test Plan

## Application Overview

The VWO (Visual Website Optimizer) application login page provides multiple authentication methods including email/password login, Google Sign-in, SSO, and Passkey authentication. This test plan covers basic functionality testing of the primary login form, including field validation, error handling, UI interactions, and alternative authentication options.

## Test Scenarios

### 1. Email and Password Field Validation

**Seed:** `tests/seed.spec.ts`

#### 1.1. Login with empty email and password fields

**File:** `tests/login/empty_fields.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The login page is displayed
    - expect: Email address input field is visible
    - expect: Password input field is visible
    - expect: Sign in button is visible
  2. Click the Sign in button without entering any credentials
    - expect: An error message appears: 'Your email, password, IP address or location did not match'
    - expect: The form is not submitted
    - expect: The page remains on the login page

#### 1.2. Login with valid email format but empty password

**File:** `tests/login/email_only.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The login page is displayed
    - expect: All form fields are empty
  2. Enter test@example.com in the email address field
    - expect: The email address is entered correctly
    - expect: The email field accepts the input
  3. Leave the password field empty
    - expect: The password field remains empty
  4. Click the Sign in button
    - expect: An error message appears
    - expect: The form is not submitted
    - expect: The page remains on the login page

#### 1.3. Login with empty email and valid password

**File:** `tests/login/password_only.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The login page is displayed
    - expect: All form fields are empty
  2. Leave the email field empty
    - expect: The email field remains empty
  3. Enter testPassword123 in the password field
    - expect: The password is masked (shown as dots or asterisks)
  4. Click the Sign in button
    - expect: An error message appears
    - expect: The form is not submitted
    - expect: The page remains on the login page

#### 1.4. Login with invalid email format

**File:** `tests/login/invalid_email_format.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The login page is displayed
  2. Enter 'invalidemail' (without @ symbol) in the email field
    - expect: The email field accepts the input
  3. Enter 'password' in the password field
    - expect: The password is masked
  4. Click the Sign in button
    - expect: An error message appears (either format validation error or authentication error)
    - expect: The form is not submitted

#### 1.5. Login with SQL injection attempt in email field

**File:** `tests/login/sql_injection.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The login page is displayed
  2. Enter 'admin' OR '1'='1'@example.com in the email field
    - expect: The email field accepts the input
  3. Enter 'password' in the password field
    - expect: The password is masked
  4. Click the Sign in button
    - expect: The application handles it securely without bypassing authentication
    - expect: An error message appears
    - expect: The user is not logged in

### 2. Password Field Interactions

**Seed:** `tests/seed.spec.ts`

#### 2.1. Toggle password visibility on

**File:** `tests/login/password_visibility_on.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The login page is displayed
  2. Enter 'mySecurePassword123' in the password field
    - expect: The password is masked (displayed as dots/asterisks)
  3. Click the Toggle password visibility button (eye icon)
    - expect: The password is now visible as plain text: 'mySecurePassword123'
    - expect: The eye icon changes to indicate visibility is on

#### 2.2. Toggle password visibility off

**File:** `tests/login/password_visibility_off.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The login page is displayed
  2. Enter 'mySecurePassword123' in the password field
    - expect: The password is masked
  3. Click the Toggle password visibility button to make password visible
    - expect: The password is now visible
  4. Click the Toggle password visibility button again to hide the password
    - expect: The password is masked again
    - expect: The eye icon changes back to indicate visibility is off

#### 2.3. Password field accepts special characters

**File:** `tests/login/password_special_chars.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The login page is displayed
  2. Enter 'P@$$w0rd!#%&*()' in the password field
    - expect: The password field accepts special characters
    - expect: Special characters are masked (not visible as plain text)
  3. Click the Toggle password visibility button
    - expect: All special characters are visible: 'P@$$w0rd!#%&*()'

### 3. Form Interactions and Options

**Seed:** `tests/seed.spec.ts`

#### 3.1. Remember me checkbox functionality

**File:** `tests/login/remember_me_checkbox.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The login page is displayed
    - expect: The Remember me checkbox is unchecked
  2. Click the Remember me checkbox
    - expect: The checkbox becomes checked
    - expect: Visual indication of checked state is shown
  3. Click the checkbox again
    - expect: The checkbox becomes unchecked
    - expect: Visual indication of unchecked state is shown

#### 3.2. Forgot Password link navigation

**File:** `tests/login/forgot_password_link.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The login page is displayed
    - expect: The Forgot Password link is visible
  2. Click the Forgot Password link
    - expect: User is navigated to the password reset page OR a modal/dialog opens for password recovery
    - expect: The URL or page title changes appropriately

#### 3.3. Start a Free Trial link for new users

**File:** `tests/login/free_trial_link.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The login page is displayed
    - expect: The Start a FREE TRIAL link is visible
  2. Click the Start a FREE TRIAL link
    - expect: User is navigated to the VWO free trial signup page at https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage
    - expect: The page loads successfully

### 4. Alternative Authentication Methods

**Seed:** `tests/seed.spec.ts`

#### 4.1. Sign in with Google button visibility and clickability

**File:** `tests/login/google_signin_button.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The login page is displayed
    - expect: The Sign in with Google button is visible
    - expect: Button displays Google logo and text
  2. Click the Sign in with Google button
    - expect: Either: Google OAuth login page loads OR a Google authentication popup appears
    - expect: The button is interactive and clickable

#### 4.2. Sign in using SSO button visibility and clickability

**File:** `tests/login/sso_button.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The login page is displayed
    - expect: The Sign in using SSO button is visible
  2. Click the Sign in using SSO button
    - expect: User is navigated to SSO authentication page OR a form for SSO configuration appears
    - expect: The button is interactive and clickable

#### 4.3. Sign in with Passkey button visibility and clickability

**File:** `tests/login/passkey_button.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The login page is displayed
    - expect: The Sign in with Passkey button is visible
  2. Click the Sign in with Passkey button
    - expect: Browser's passkey authentication dialog appears OR user is directed to passkey setup page
    - expect: The button is interactive and clickable

### 5. UI and Accessibility

**Seed:** `tests/seed.spec.ts`

#### 5.1. Page title and heading verification

**File:** `tests/login/page_title_heading.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The page title in browser tab shows 'Login - VWO'
    - expect: The page displays 'Sign in to VWO platform' as the main heading
    - expect: VWO logo is visible at the top

#### 5.2. Legal links verification

**File:** `tests/login/legal_links.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The login page is displayed
    - expect: Privacy Policy link is visible and clickable
    - expect: Terms link is visible and clickable
  2. Click the Privacy Policy link
    - expect: User is navigated to https://vwo.com/privacy-policy/...
  3. Navigate back to https://app.vwo.com
    - expect: Login page is displayed again
  4. Click the Terms link
    - expect: User is navigated to https://vwo.com/terms/...

#### 5.3. Email and Password field labels are properly associated

**File:** `tests/login/field_labels.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The Email address label is visible above the email input field
    - expect: The Password label is visible above the password input field
    - expect: Labels indicate these are required fields (if applicable)
  2. Click on the Email address label
    - expect: Focus moves to the email input field
  3. Click on the Password label
    - expect: Focus moves to the password input field

#### 5.4. Placeholder text in input fields

**File:** `tests/login/placeholder_text.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: Email field shows placeholder: 'Enter email ID'
    - expect: Password field shows placeholder: 'Enter password'
  2. Click on the email field and start typing
    - expect: The placeholder text disappears
    - expect: User input is visible
  3. Clear the email field
    - expect: The placeholder text reappears

### 6. Invalid Credentials Testing

**Seed:** `tests/seed.spec.ts`

#### 6.1. Login with non-existent user credentials

**File:** `tests/login/nonexistent_user.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The login page is displayed
  2. Enter 'nonexistent@example.com' in the email field
    - expect: The email is entered successfully
  3. Enter 'someRandomPassword123' in the password field
    - expect: The password is masked
  4. Click the Sign in button
    - expect: An error message appears: 'Your email, password, IP address or location did not match'
    - expect: The user is not logged in
    - expect: The page remains on the login page

#### 6.2. Login with correct email but wrong password

**File:** `tests/login/wrong_password.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The login page is displayed
  2. Enter a valid email address in the email field
    - expect: The email is entered successfully
  3. Enter an incorrect password in the password field
    - expect: The password is masked
  4. Click the Sign in button
    - expect: An error message appears: 'Your email, password, IP address or location did not match'
    - expect: The user is not logged in
    - expect: The page remains on the login page

#### 6.3. Multiple failed login attempts

**File:** `tests/login/multiple_failed_attempts.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The login page is displayed
  2. Enter wrong credentials and click Sign in
    - expect: Error message appears
  3. Do this two more times (3 failed attempts total)
    - expect: Error message appears each time
    - expect: After 3 failed attempts, observe if account is locked or captcha appears

### 7. Edge Cases and Special Scenarios

**Seed:** `tests/seed.spec.ts`

#### 7.1. Email field accepts very long email address

**File:** `tests/login/long_email.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The login page is displayed
  2. Enter a very long email address (e.g., 'verylongemailaddressexample12345678901234567890@example.com') in the email field
    - expect: The field accepts the input without truncation or errors
    - expect: The entire email is visible or can be scrolled within the field
  3. Enter password and click Sign in
    - expect: Form submits the long email address without issues

#### 7.2. Email field with leading and trailing spaces

**File:** `tests/login/email_with_spaces.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The login page is displayed
  2. Enter ' test@example.com ' (with leading and trailing spaces) in the email field
    - expect: The field accepts the input
  3. Enter password and click Sign in
    - expect: The application either: (1) trims the spaces and processes the email, OR (2) shows an error for invalid format

#### 7.3. Page responsiveness check on mobile viewport

**File:** `tests/login/mobile_responsiveness.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com on a mobile device (or resize browser to mobile width)
    - expect: The login form is displayed responsively
    - expect: All form fields are properly sized for mobile
    - expect: The Sign in button is clickable and sized appropriately
  2. Interact with form fields on mobile
    - expect: Input fields are easily accessible
    - expect: No elements are hidden or cut off
    - expect: Keyboard appears when tapping input fields

#### 7.4. Verify page loads without JavaScript errors

**File:** `tests/login/no_js_errors.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: The page loads completely
    - expect: No console errors or critical warnings are displayed
  2. Check browser console for errors
    - expect: No JavaScript errors that would prevent functionality
    - expect: Only non-critical warnings or info messages may appear
