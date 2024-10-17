let enterNumber = prompt ("Enter name witch you wanna see");

const contactData = {
    contactList: [
        {
            contactName: "Henrih",
            phoneNumber: +48658952317,
            address: "Uganda",
            email: "Uganda@.ug"
        },
        {
            contactName: "Bambei",
            phoneNumber: +35698564021,
            address: "Cibertron",
            email: "Cibertron@ci"
        },
        {
            contactName: "Ulrisch",
            phoneNumber: +41589256745,
            address: "Nineland",
            email: "Nineland@ni"
        },
        {
            contactName: "Hund",
            phoneNumber: +78956214028,
            address: "Neverland",
            email: "Neverland@ne"
        },
        {
            contactName: "Hikamoto",
            phoneNumber: +95632589154,
            address: "Typan",
            email: "Typan@ty"
        }
    ],
    getContactData () {
        let found = false;
        for(let contact of this.contactList) {
            if(enterNumber === contact.contactName) {
                console.log(`Ім'я ${contact.contactName}`);
                console.log(`Номер телефону ${contact.phoneNumber}`);
                console.log(`Країна проживання ${contact.address}`);
                console.log(`Едектронна пошта ${contact.email}`);
                found = true; break;
            }
        }   if (!found) {
            console.log("Немає таких данних");
    }
}
}
contactData.getContactData ();


