$(document).ready(function() {
  // User Interface Logic here:
  // dummy userNames, etc... I like it
  let contactBook = new ContactBook;
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    
    const inputFirstName = $("#new-first-name").val();
    const inputLastName = $("#new-last-name").val();
    const inputPhoneNumber = $("#new-phone-number").val();
    const inputAddress = $("#new-address").val();
    let contact01 = new Contact(inputFirstName, inputLastName, inputPhoneNumber, inputAddress);
    contactBook.addNewContact(contact01);
    console.log(contactBook.contacts[0]);
    
  })
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