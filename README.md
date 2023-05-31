# React Portfolio

My portfolio built using React

## Website

[Click here to visit the app](https://ohsweetwampum.github.io/react-portfolio/)

## Description

This is my React portfolio, It utilizes React.js for navigation and interactive UI, it features key sections: About Me, Portfolio, Contact, and Resume. Its modular design demonstrates use cases for reusable React components and modern hooks.

## Table of Contents

- [Website](#website)
- [Description](#description)
- [Technology](#technology)
- [Usage](#usage)
- [Image](#image)
- [Code](#code)
- [Learning](#learning)
- [Author](#author)
- [Credits](#credits)
- [Contributing](#Contributing)
- [Questions](#questions)
- [License](#license)

## Technology

- Express.js
  [Learn about Express.js](https://expressjs.com/)

- Node.js
  [Learn about Node.js](https://nodejs.org/en)

- React
  [Learn about React](https://react.dev/)

- JavaScript
  [Learn about JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- CSS
  [Learn about CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Usage

This portfolio offers an insight into my skills, projects, and experiences as a web developer. You can learn about my journey, view my projects, download my resume, or even contact me directly from within the application.

# Image

![Alt Text](src/images/Screenshot.png)

## Code

I wanted to highlight this code snippet because it showcases a React hooks. useState is used to track name, email, message, and errors. useEffect validates the user inputs, running whenever name, email, or message changes. The emailValidator utility function is used to validate the email format. Errors are stored in a state object and are updated dynamically based on the user input validity.

```JavaScript

import React, { useState, useEffect } from "react";

import emailValidator from "../utils/emailValidator";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    if (!name)
      setErrors((errors) => ({ ...errors, name: "Name is required." }));
    if (!email)
      setErrors((errors) => ({ ...errors, email: "Email is required." }));
    else if (!emailValidator(email))
      setErrors((errors) => ({ ...errors, email: "Invalid email address." }));
    if (!message)
      setErrors((errors) => ({ ...errors, message: "Message is required." }));
  }, [name, email, message]);

```

## Learning

- React.js
- State Management
- Component Design
- Form Validation in React

## Author

Matthew Gibson

- [Portfolio](https://github.com/ohSweetWampum)
- [LinkedIn](https://www.linkedin.com/in/matthew-gibson-6b9b12237/)
- [Github](https://github.com/ohSweetWampum)

## Credits

- Thanks to all the instructors and the in-class examples/activities they provided were especially helpful for this application.

## Contributing

If you would like to contribute, please contact me at [mtgibson888@gmail.com](mailto:mtgibson888@gmail.com)

## Questions

If you have any questions about this application, please contact me at [mtgibson888@gmail.com](mailto:mtgibson888@gmail.com) or check out my [GitHub Profile](https://github.com/ohSweetWampum)

## License

This application is covered by the MIT license

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

```

```
