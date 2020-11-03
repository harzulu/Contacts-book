# Contact Book

## Overview, 11-03-2020
This project was created using curriculum documents from Epicodus on making an Address Book. It hopes to teach about classes and objects.

### Ben McFarland, Tyler Sinks

Takes in contact information and shows, edits, deletes, and adds contacts on page.

## Setup/Installation Requirements

#### Using Terminal/Command Line:
* Open your machine's Terminal or Command line
* Using the Terminal/Command line, navigate to the location you would like this project
* Enter the command: `git clone https://github.com/harzulu/Contacts-book`
* To open the project in your default browser, enter the command: `open index.html`

#### Downloading From GitHub:
* Click the green "code" button to the top right
* Click "Download ZIP"
* Open the zip file in your downloads folder
* Move the folder "Contacts-book" to your desired location
* Double click the "index.html" file to open the project in your default browser

## Known Bugs/Issues

No known bugs or issues.

## Support and Contact Details

* benrmcfarland@gmail.com
* tyler.sinks@gmail.com

## Tests

Describe: addNewContact()
Test: "It should take in a Contact and add it to the array of contacts and give it its own id number."
Expect: contactBook.addNewContact(contact).toEqual(contactBook.contacts = [contact], contact.id = 1);

Describe: findContact()
Test: "It should take an id number and find the corresponding contact index in the array with that id"
Expect: contactBook.findContact(3).toEqual(index of 2);

Describe: removeContact()
Test: "It should take an id number and find the corresponding contact index in the array with that id then delete that contact from the main contacts array"
Expect: contactBook.deleteContact(3).toEqual(contactBook.contacts = [contact, contact, _empty_, contact]);

## Technology Used

* Visual Studio Code
* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

## Licenseing and Copyright

This project is licensed under the GPL license.

Copyright (c) 2020 Ben McFarland, Tyler Sinks