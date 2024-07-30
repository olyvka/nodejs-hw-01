import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = () => {
    const data = fs.readFileSync(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
  
    const newContact = createFakeContact();
  
    contacts.push(newContact);
  
    fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
  };

  addOneContact();


  