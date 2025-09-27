function changeBirthdayPerson() {
    const name = prompt("Enter the birthday person's name:");
    if (name) {
        document.getElementById('birthday-person').innerText = name;
    }
}

