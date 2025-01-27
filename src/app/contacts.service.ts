import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  
  constructor() {}

  getContacts() {
    return [
      { id: 1, name: 'John Doe', phone: '123-456-7890' },
      { id: 2, name: 'Jane Smith', phone: '987-654-3210' },
      { id: 3, name: 'Alice Brown', phone: '456-789-0123' },
      { id: 4, name: 'Bob White', phone: '321-654-9870' },
      { id: 5, name: 'Charlie Green', phone: '654-321-0987' },
    ];
  }
}
