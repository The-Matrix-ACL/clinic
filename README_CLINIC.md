# THE MATRIX TEAM

# Advanced Computer Lab Project

> This website is an integrated online medical servide consisting of a El7a2ni Pharmacy and El7a2ni Clinic. The application is built using the `MERN` stack.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#Motivation">Motivation</a></li>
    <li><a href="#Build-status">Build Status</a></li>
    <li><a href="#room-for-improvement">Room For Improvement</a></li>
    <li><a href="#Code-style">Code Style</a></li>
    <li><a href="#Code-Examples">Code Examples</a></li>
    <li><a href="#screenshots">Screenshots</a></li>
    <li><a href="#Tech-used">Tech/Framework used</a></li>
    <li><a href="#Features">Features</a></li>
    <li><a href="#API-References">API References</a></li>
    <li><a href="#Installation">Installation</a></li>
    <li><a href="#How-To-Use"> How to use</a></li>
    <li><a href="#Credits">Credits And License</a></li>
  </ol>
</details>

## Motivation

This is a projected created for the GUC `CSEN704 Advanced Computer lab` Winter 2023 Semester it teaches students :

- The creation of a 3-tier architecture that includes frontend, backend, and database using JavaScript and JSON.
- MERN stack which is a collection of technologies that enables faster application development.
- Software development process
- Web development

## Build Status

## Room For Improvement

## Code Style

The code style is enforced using eslint and prettier. The code style is enforced using pre-commit hooks and pre-commit github action.

## Code Examples

```typescript
const express = require("express");
const bodyParser = require("body-parser");
const Cart = require("../Models/Cart.js");
const Medicine = require("../Models/Medicine");
const router = express.Router();
const jsonParser = bodyParser.json();
const mongoose = require("mongoose");



## Screenshots

<details>
<summary>Home Page</summary>
  <img src="image.png" width="800">
</details>

## Tech/Framework used

<a name="Tech-used"></a>

- [![Mongo][Mongo.js]][Mongo-url]
- MongoDB was used to host the database of the software. MongoDB is a NOSQL database that is easy to use and understand.

- [![Express][Express.js]][Express-url]
- Express is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.

- [![React][React.js]][React-url]
- React is a frontend framework used to create compnents and pages that are reusable throughout the whole software.

- [![NodeJs][Node.io]][Node-url]
- Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.

- [![GitHub][GitHub.io]][GitHub-url]

* [Git](https://git-scm.com/)

- Github is a version control service used to save the different contributions of different team members and merge them into one branch.

* [Mongoose](https://mongoosejs.com/) is used with MongoDB to create schemas and enforce these schemas for the data entered and retrieved from the database.

* [Postman](https://www.postman.com/) is the testing software for the backend and routing of the software.
* [VSCode](https://code.visualstudio.com/) is the text editing software used to create this software and upload it to github.

## Features

This website can be accessed by admins, Pharmacists, Doctors and Patients where each of them has different functions to access across the website. The functionality of the Clinic website is independant of the Pharmacy website, as in they have different databases to hold their information and are linked by a single welcome page for users to choose which website to access. Users are requested to log in to the website to access their functionalities.

### An Admin Can :

- Create a profile for another admin.
- Remove a doctor or patient or admin from the system.
- View all of the information uploaded by a doctor to apply to join the platform.
- Accept or reject the request of a doctor to join the platform.
- Add, update or delete health packages.
- Change password.
- Accept a request for the registration of a doctor.

### A Doctor Can:

- Change password. 
- Edit and update profile details.
- View and accept the employment contract.
- Add their available time slots for appointments.
- Filter appointments by date or status.
- View information and health records of patient registered with them.
- View all prescriptions and their statuses of their patients.
- View a list of all their patients.
- Search for a patient by name.
- Filter patients based on upcoming appointments.
- Select a patient from the list of patients.
- Receive a notification of their appointment on the system and via email. 
- View a list of all appointments.
- Filter appointments by date or status.
- Reschedule or cancel an appointment for a patient.
- Receive a notification that appointment is cancelled or rescheduled on the system and via email. 
- Schedule a follow-up for a patient.
- Edit the prescription by adding or deleting medicine and their dosages.
- Download selected prescription (PDF). 
- Add new health records for a patient.
- Start and end a video call with the patient.
- Add a prescription for a patient.
- Accept or revoke a follow-up session request from a patient.
- View the amount in my wallet.
- Chat with a patient.

### A Patient Can:

- Change their password.
- Reset password through an OTP sent to the email.
- Upload or remove documents for medical history.
- Add family members and link them to account.
- Choose to pay for Appointments using wallet credit or credit card using Stripe.
- View registered family members.
- Filter appointments by date or status.
- View uploaded health records.
- View all new and old prescriptions and their statuses.
- View health package options and details
- Subscribe to a health package for themself and their family members.
- Choose to pay for the chosen health package using wallet or credit card 
- View subscribed package and the subscription status for themself and family members. 
- Cancel health package subscription for themself and family members.
- View a list of all doctors along with their speciality and session price based on subscribed health package.
- Search for a doctor by name or speciality.
- Filter a doctor by speciality and/or availability on a certain date and at a specific time.
- Select a doctor from the search/filter results. 
- View all details of selected doctor. 
- View all available appointments of a selected doctor.
- Select an appointment date and time for themself or for a family member.
- Receive a notification of appointment on the system and via email. 
- View a list of all appointments.
- Filter appointments by date or status.
- Reschedule an appointment for themself or for a family member.
- Cancel an appointment for themself or for a family member.
- Receive a notification that appointment is cancelled or rescheduled on the system and via email. 
- View a list of all their perscriptions.
- Filter prescriptions based on date or doctor or filled or unfilled.
- Select a prescription from their list of perscriptions.
- View the details of the selected prescription.
- Choose to pay directly for the prescription items using wallet or credit card.
- Download selected prescription (PDF). 
- Start and end a video call with the doctor.
- Request a follow-up to a previous appointment for themself or a family member.
- Receive a refund in wallet when a doctor cancels an appointment.
- View the amount in wallet.
- Chat with a doctor.


### A Guest Can :

- Sign up as a Patient
- Request to join as a doctor or a pharmacist by submitting the required documents.

## API References:

  <ol>
    <li>Admin</li>
      <ul>
        <li></li>
      </ul>
    <li>Patient</li>
    <li>Pharmacist</li>
    <li>Guest</li>
  </ol>

### Installation

How does one go about using it?

1. Download the project.
2. Open a terminal tab in server and client folders then run

`npm i`

If there are any installation errors please run npm i [missing library] you can find all the used libraries in the package.json file.

## How to use

Run two terminals simultaneously

To run backend

- Navigate to backend/src and run :

```bash
nodemon server
```

To run frontend

- Navigate to frontend/src and run :

```bash
npm start
```

Create an env file and add links to mongodb databases and port numbers in it before running the software.

## Credits and License

- [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

[Express.js]: https://img.shields.io/badge/express-4A4A55?style=for-the-badge&logo=express&logoColor=FFFFFF
[Express-url]: https://expressjs.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Mongo.js]: https://img.shields.io/badge/mongo%20DB-4A4A55?style=for-the-badge&logo=mongodb&logoColor=%2049da01
[Mongo-url]: https://www.mongodb.com/
[Node.io]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en/
[GitHub.io]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[GitHub-url]: https://github.com/
