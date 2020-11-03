$(document).ready(function() {
  // User Interface Logic here:
  // dummy userNames, etc... I like it
});


// Business Logic
function Contact(firstName, lastName, phoneMain, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneMain = phoneMain;
  this.address = address;
}

function ContactBook() {
  // initialize an empty array to hold each NEW instance of a Contact
  this.contacts = [];
  this.currentID = 0;
}

ContactBook.prototype.addNewContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

ContactBook.prototype.assignId = function() {
  this.currentID++;
  return this.currentID;
}

ContactBook.prototype.removeContact = function(id) {
  let i = this.findContact(id);
  if (i === false) {
    return false;
  } 
  else {
    delete this.contacts[i];
    return true;
  }
}

ContactBook.prototype.findContact = function(id) {
  for (let i = 0; i < this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return i;
      }
    }
  };
  return false;
}