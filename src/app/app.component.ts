import { Component } from '@angular/core';
import { ContactsService } from './contacts.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Contact } from './contact.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, CommonModule], // Add CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
   

  title = 'Address Book';
  displayedColumns: string[] = ['id', 'name', 'phone'];
  dataSource: Contact[] = [];
  selectedPage: string = 'home'; // Default page
  todayDate: Date = new Date(); // Current date

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.dataSource = this.contactsService.getContacts();
  }

  showDetails(page: string) {
    this.selectedPage = page;
  }
  
}
