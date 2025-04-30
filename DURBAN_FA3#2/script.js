const contacts = [];

function updateDisplay() {
    document.getElementById("contactList").innerText = contacts.join(" ");
}
function addContact() {
    const input = document.getElementById("nameInput");
    const name = input.value.trim();

    if (name === "") return;

    if (contacts.length >= 7) {
        contacts.shift(); // Remove the oldest (leftmost) contact
    }
    contacts.push(name); // Add new contact at the end
    updateDisplay();
    input.value = ""; // Clear input field
}
function removeContact() {
    contacts.pop(); // Remove the last contact
    updateDisplay();
}
