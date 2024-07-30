import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    // Читаємо існуючі контакти з файлу асинхронно
    const data = await fs.readFile(PATH_DB, 'utf-8');
    // Парсимо вміст файлу у формат JSON
    const contacts = JSON.parse(data);
    // Повертаємо кількість контактів
    return contacts.length;
  } catch (error) {
    console.error('Error reading contacts:', error);
    return 0;
  }
};

// Логування для відстеження виконання скрипту
console.log('Starting countContacts script...');

// Виклик функції та логування результату
(async () => {
  const count = await countContacts();
  console.log('Number of contacts:', count);
})();
