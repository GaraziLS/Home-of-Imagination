# Intro

This project is the DevCamp Full Stack Capstone project, and allows the user to CRUD their own random generators. The frontend is built using React, and the backend using Flask. All the icons have text by their side, to allow screen readers work and to make the site accessible to everyone. 

The site is fully responsive. Some pages, such as the login or the generators, don't have media queries because there are few elements there and they already look good during tests.

Please feel free to read the READMEs for the Frontend and the Backend to know how the site was built.

### Considerations to navigate the site without bugs

* For some reason, when the chrome console is open and you're on the error page (when trying to access the creation page but you're unlogged) the login button doesn't respond. Use the link in that page instead.

* When the console is open and you refresh the page to see the changes that were made, the connection will be refused despite having wifi available. Re-start the server or close the console and reload the page to fix the issue.

* When seeing the page from the responsive mobile view in Chrome, the log in gets refused. Exit the console and log in from the outside to fix the bug.

* Don't panic if the data doesn't load right away, wait a little.

* iOS phones can't display the web properly despite media queries. Tests confirmed that Androids run it as it should though.
