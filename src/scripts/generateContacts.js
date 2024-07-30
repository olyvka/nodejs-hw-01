import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = (num) => {
  // Зчитуємо існуючі контакти з файлу
  const data = fs.readFileSync(PATH_DB, 'utf-8');
  const contacts = JSON.parse(data);

  // Генеруємо нові контакти
  for (let i = 0; i < num; i++) {
    contacts.push(createFakeContact());
  }

  // Записуємо оновлений масив контактів назад у файл
  fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
};

// Викликаємо функцію з кількістю контактів, яку необхідно згенерувати
generateContacts(5);
