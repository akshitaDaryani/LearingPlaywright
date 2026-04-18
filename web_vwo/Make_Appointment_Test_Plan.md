# CURA Healthcare - Make Appointment Test Plan

## Application Overview

The CURA Healthcare Service application allows logged-in users to make medical appointments. This test plan covers the complete appointment booking workflow including facility selection, healthcare program selection, date selection, optional readmission and comment fields, and successful appointment confirmation.

## Test Scenarios

### 1. Appointment Form - Facility Selection

**Seed:** `tests/seed.spec.ts`

#### 1.1. Default facility is pre-selected on appointment form

**File:** `tests/appointment/facility_default_selection.spec.ts`

**Steps:**
  1. Navigate to https://katalon-demo-cura.herokuapp.com/, click Make Appointment, login with John Doe/ThisIsNotAPassword
    - expect: User is logged in successfully
    - expect: Make Appointment page is displayed
    - expect: The form contains a Facility dropdown
  2. Observe the Facility dropdown without changing it
    - expect: Tokyo CURA Healthcare Center is the default selected facility

#### 1.2. Change facility to Hongkong CURA Healthcare Center

**File:** `tests/appointment/facility_change_hongkong.spec.ts`

**Steps:**
  1. Navigate to appointment form with credentials
    - expect: User is logged in and on the Make Appointment form
  2. Click on the Facility dropdown
    - expect: The dropdown opens showing all three options
  3. Select Hongkong CURA Healthcare Center
    - expect: Hongkong CURA Healthcare Center is selected
    - expect: The dropdown shows the new selection

#### 1.3. Change facility to Seoul CURA Healthcare Center

**File:** `tests/appointment/facility_change_seoul.spec.ts`

**Steps:**
  1. Navigate to appointment form with credentials
    - expect: User is logged in and on the Make Appointment form
  2. Click on the Facility dropdown
    - expect: The dropdown opens showing all three options
  3. Select Seoul CURA Healthcare Center
    - expect: Seoul CURA Healthcare Center is selected
    - expect: The dropdown shows the new selection

### 2. Appointment Form - Healthcare Program Selection

**Seed:** `tests/seed.spec.ts`

#### 2.1. Medicare is the default selected healthcare program

**File:** `tests/appointment/program_medicare_default.spec.ts`

**Steps:**
  1. Navigate to appointment form with credentials
    - expect: User is logged in and on the Make Appointment form
  2. Observe the Healthcare Program options without making changes
    - expect: Medicare radio button is checked by default

#### 2.2. Select Medicaid healthcare program

**File:** `tests/appointment/program_medicaid_selection.spec.ts`

**Steps:**
  1. Navigate to appointment form with credentials
    - expect: User is logged in and on the Make Appointment form
  2. Observe the default selection
    - expect: Medicare is initially selected
  3. Click on the Medicaid radio button
    - expect: Medicaid radio button becomes checked
    - expect: Medicare radio button becomes unchecked

#### 2.3. Select None if no healthcare program applies

**File:** `tests/appointment/program_none_selection.spec.ts`

**Steps:**
  1. Navigate to appointment form with credentials
    - expect: User is logged in and on the Make Appointment form
  2. Observe the default selection
    - expect: Medicare is initially selected
  3. Click on the None radio button
    - expect: None radio button becomes checked
    - expect: Medicare radio button becomes unchecked

### 3. Appointment Booking - Success Scenarios

**Seed:** `tests/seed.spec.ts`

#### 3.1. Book appointment with default facility and healthcare program

**File:** `tests/appointment/book_with_default_values.spec.ts`

**Steps:**
  1. Navigate to https://katalon-demo-cura.herokuapp.com/, click Make Appointment, login with John Doe/ThisIsNotAPassword
    - expect: User is logged in successfully
  2. Observe the Make Appointment form
    - expect: Make Appointment form is displayed with default Tokyo facility and Medicare program
  3. Click on the Visit Date field
    - expect: The date picker calendar appears showing April 2026
  4. Click on day 15 in the calendar
    - expect: Date 15 is selected and field shows 15/04/2026
  5. Click on the Comment field
    - expect: The Comment field is ready for input
  6. Type 'Regular checkup and consultation needed.'
    - expect: Comment text is entered successfully
  7. Click the Book Appointment button
    - expect: Page navigates to appointment confirmation
    - expect: URL changes to .../appointment.php#summary
    - expect: Heading shows 'Appointment Confirmation'
    - expect: Success message displays: 'Please be informed that your appointment has been booked as following:'

#### 3.2. Appointment confirmation displays all submitted data correctly

**File:** `tests/appointment/confirmation_displays_correct_data.spec.ts`

**Steps:**
  1. Complete appointment booking workflow
    - expect: Appointment has been successfully booked
  2. Verify all fields in the confirmation page display correct data
    - expect: Facility shows: Tokyo CURA Healthcare Center
    - expect: Healthcare Program shows: Medicare
    - expect: Hospital Readmission shows: No
    - expect: Visit Date shows: 15/04/2026
    - expect: Comment shows: Regular checkup and consultation needed.

#### 3.3. Book appointment with Medicaid and different facility

**File:** `tests/appointment/book_with_medicaid_facility.spec.ts`

**Steps:**
  1. Navigate to appointment form
    - expect: User is on appointment form
  2. Click Facility dropdown and select Hongkong CURA Healthcare Center
    - expect: Hongkong facility is selected from dropdown
  3. Click Medicaid radio button
    - expect: Medicaid radio button is checked
  4. Click Visit Date field and select a date (e.g., 20/04/2026)
    - expect: Date is selected from calendar
  5. Click Comment field and type 'Follow-up appointment'
    - expect: Comment entered
  6. Click Book Appointment
    - expect: Confirmation page shows: Facility=Hongkong, Program=Medicaid
    - expect: Date displays correctly

#### 3.4. Book appointment with hospital readmission checked

**File:** `tests/appointment/book_with_hospital_readmission.spec.ts`

**Steps:**
  1. Navigate to appointment form
    - expect: User is on appointment form
  2. Observe the checkbox state
    - expect: Readmission checkbox is NOT checked initially
  3. Click the Apply for hospital readmission checkbox
    - expect: Checkbox becomes checked with visible checkmark
  4. Select date and other fields
    - expect: All required fields are filled
  5. Submit and verify confirmation
    - expect: Confirmation shows Hospital Readmission: Yes

#### 3.5. Book appointment with None healthcare program

**File:** `tests/appointment/book_with_none_program.spec.ts`

**Steps:**
  1. Navigate to appointment form
    - expect: User is on appointment form
  2. Click the None radio button
    - expect: None radio button is selected
  3. Verify radio button state
    - expect: None program is visibly selected
  4. Select facility, date, and add comment
    - expect: Complete other required fields
  5. Submit and verify confirmation
    - expect: Confirmation shows Healthcare Program: None

### 4. Date Selection and Format

**Seed:** `tests/seed.spec.ts`

#### 4.1. Date picker shows current month and year

**File:** `tests/appointment/date_picker_displays_current_month.spec.ts`

**Steps:**
  1. Navigate to appointment form
    - expect: User is on appointment form
  2. Click on the Visit Date field
    - expect: Calendar popup appears showing April 2026
    - expect: Days of week headers displayed: Su, Mo, Tu, We, Th, Fr, Sa

#### 4.2. Selected date displays in dd/mm/yyyy format

**File:** `tests/appointment/date_field_format_validation.spec.ts`

**Steps:**
  1. Click Visit Date field and select any date
    - expect: User has selected a date from calendar
  2. Verify the date format displayed
    - expect: Date format in field is dd/mm/yyyy (e.g., 15/04/2026)

#### 4.3. Can select different dates sequentially

**File:** `tests/appointment/date_selection_multiple_dates.spec.ts`

**Steps:**
  1. Click Visit Date field and select date 5
    - expect: Date picker is open with first date selected
  2. Verify date displays correctly
    - expect: First date is saved (05/04/2026)
  3. Click date field again and select date 25
    - expect: Can reopen date picker and select new date
  4. Verify final date is correct
    - expect: New date replaces previous date (25/04/2026)

### 5. Form Validation and Required Fields

**Seed:** `tests/seed.spec.ts`

#### 5.1. Visit Date field is required to submit appointment

**File:** `tests/appointment/visit_date_required_field.spec.ts`

**Steps:**
  1. Fill facility, program, and comment but leave Visit Date empty
    - expect: User is on appointment form with all fields except date filled
  2. Click Book Appointment button without selecting a date
    - expect: Submission fails or error displays indicating date is required

#### 5.2. Comment field is optional for booking

**File:** `tests/appointment/optional_comment_field.spec.ts`

**Steps:**
  1. Navigate to appointment form
    - expect: User is on appointment form
  2. Fill all required fields but skip comment
    - expect: Select facility, program, and date but leave Comment empty
  3. Click Book Appointment
    - expect: Appointment books successfully
    - expect: Confirmation page displays

#### 5.3. Required field is clearly marked on the form

**File:** `tests/appointment/required_field_indicators.spec.ts`

**Steps:**
  1. Navigate to appointment form
    - expect: User views appointment form
  2. Observe the Visit Date field label
    - expect: Visit Date field is labeled 'Visit Date (Required)' indicating it's mandatory

### 6. Appointment Confirmation Page

**Seed:** `tests/seed.spec.ts`

#### 6.1. Confirmation page displays success message

**File:** `tests/appointment/confirmation_message_display.spec.ts`

**Steps:**
  1. Click Book Appointment after filling form
    - expect: Appointment has been submitted
  2. Verify confirmation page content
    - expect: Page navigates to confirmation URL (.../appointment.php#summary)
    - expect: 'Appointment Confirmation' heading is displayed
    - expect: 'Please be informed that your appointment has been booked as following:' message is shown

#### 6.2. Confirmation page displays all appointment details

**File:** `tests/appointment/confirmation_shows_appointment_details.spec.ts`

**Steps:**
  1. Complete appointment booking
    - expect: User is on confirmation page after successful booking
  2. View confirmation page
    - expect: All details are displayed: Facility, Hospital Readmission, Healthcare Program, Visit Date, Comment
  3. Verify data accuracy
    - expect: Each detail matches what was submitted
    - expect: No fields are missing or truncated

#### 6.3. Go to Homepage link on confirmation page

**File:** `tests/appointment/go_to_homepage_link.spec.ts`

**Steps:**
  1. Complete appointment booking
    - expect: User is on appointment confirmation page
  2. Locate link on confirmation page
    - expect: 'Go to Homepage' link is visible
  3. Click Go to Homepage link
    - expect: Navigation returns to home page
    - expect: URL is https://katalon-demo-cura.herokuapp.com/

### 7. User Experience and Navigation

**Seed:** `tests/seed.spec.ts`

#### 7.1. Form data persists while filling multiple fields

**File:** `tests/appointment/data_persists_during_form_fill.spec.ts`

**Steps:**
  1. Navigate to appointment form
    - expect: User is filling appointment form fields
  2. Click Facility dropdown and select Hongkong
    - expect: Select facility, then move to another field
  3. Click on Comment field and verify facility is still selected
    - expect: Facility selection remains when clicking on other fields

#### 7.2. User can book multiple appointments in sequence

**File:** `tests/appointment/multiple_appointments_in_session.spec.ts`

**Steps:**
  1. Complete first appointment booking
    - expect: First appointment is successfully booked and confirmed
  2. Navigate back to appointment form
    - expect: Click Go to Homepage and return to Make Appointment
  3. Observe fresh form state
    - expect: form is reset to default values for new booking
    - expect: Tokyo facility is default, Medicare is selected
  4. Fill form with different data and submit
    - expect: New appointment with different details can be booked

#### 7.3. All form fields have proper labels and are accessible

**File:** `tests/appointment/form_field_focus_and_labels.spec.ts`

**Steps:**
  1. Navigate to appointment form
    - expect: User is on appointment form
  2. Observe form labels
    - expect: All fields have visible and descriptive labels
    - expect: Labels identify required vs optional fields
  3. Click on 'Facility' label and verify focus
    - expect: Clicking on a label focuses the corresponding field
