# Overview

- Get Started: `yarn && yarn dev`

#### Input

- **Validation:** field is required
- **Returns:** String

#### Email

- **Validation:** emails must formatted properly with supported domain extentions
- **Returns:** String

#### Phone

- **Validation:** phone number length
- **Returns:** String
- **Extras:** Formats phone numbers: (xxx) xxx-xxxx

#### Password

- **Validation:** Must be at least 6 characters long
- **Returns:** String
- **Extras:** Tests the strength of a password
  - _Medium:_ (1 lower case, 1 upper case) or (1 lower case, 1 number) or (1 upper case, one special character) && at least 7 characters long
  - _Strong:_ 1 lower case, 1 upper case, 1 number, one special character && at least 8 characters long

#### Checkbox

- **Returns:** Returns true or false

#### Checkbox Multiselect

- **Returns:** Returns array of strings

#### Radio

- **Returns:** Returns selected radio value
