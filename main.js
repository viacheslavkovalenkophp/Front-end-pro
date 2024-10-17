let enterNumber = prompt ("Enter name witch you wanna see");
let name = prompt ("Enter name to add");
let phone = prompt ("Enter phone to add");
let adress = prompt ("Enter adress to add");
let mail = prompt ("Enter mail to add");
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
    getContactData: function () {
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
},
    addContact: function (contactName, phoneNumber, address, email) {
        this.contactList.push({contactName, phoneNumber, address, email});
        console.log(`Додано нові данні контакту
            Ім'я ${contactName},
            Номер телефону ${phoneNumber},
            Країна проживання ${address},
            Едектронна пошта ${email}`);
    }
}
contactData.getContactData ();
contactData.addContact (name, phone, adress, mail);


