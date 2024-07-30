import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    console.log('Reading contacts from file...'); 
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    console.log('Contacts successfully read.'); 
    return contacts;
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
};

console.log('Starting getAllContacts script...');

(async () => {
  const contacts = await getAllContacts();
  console.log('Contacts:', contacts);
})();
