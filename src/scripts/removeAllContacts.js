import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    
    const emptyContacts = [];
    
    await fs.writeFile(PATH_DB, JSON.stringify(emptyContacts, null, 2), 'utf-8');
    
    console.log('All contacts have been removed.');
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

console.log('Starting removeAllContacts script...');

(async () => {
  await removeAllContacts();
})();
