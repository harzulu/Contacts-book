// Business Logic
let contactBook = new ContactBook;

function Contact(firstName, lastName, phoneMain) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneMain = phoneMain;
  this.addresses = [];
}

function Address(addressValue, type) {
  this.addressValue = addressValue;
  this.type = type;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Contact.prototype.addNewAddress = function(address) {
  this.addresses.push(address);
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
function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    contactBook.removeContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(contactBook);
  });
}

function showContact(contactId) {
  const contact = contactBook.contacts[contactBook.findContact(contactId)];
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneMain);
  $(".address").html(contact.addresses[0].addressValue + " " + contact.addresses[0].type);
  $(".email").html(contact.addresses[1].addressValue + " " + contact.addresses[1].type);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + contact.id + ">Delete</button>");
}

$(document).ready(function() {
  // User Interface Logic here:
  // dummy userNames, etc... I like it
  attachContactListeners();
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    
    const inputFirstName = $("#new-first-name").val();
    const inputLastName = $("#new-last-name").val();
    const inputPhoneNumber = $("#new-phone-number").val();
    const inputAddress = $("#new-address").val();
    const inputEmail = $("#new-email").val();
    let email = new Address(inputEmail, "work")
    let physicalAddress = new Address(inputAddress, "home")
    let contact01 = new Contact(inputFirstName, inputLastName, inputPhoneNumber);
    contact01.addNewAddress(physicalAddress);
    contact01.addNewAddress(email);
    contactBook.addNewContact(contact01);
    displayContactDetails(contactBook);
    
  })
});