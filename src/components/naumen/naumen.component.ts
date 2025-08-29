import {Component, OnDestroy, OnInit, signal} from '@angular/core';
import {User} from './types/user.interface';
import {Subscription} from 'rxjs';
import {UserService} from '../../service/user.service';
import {TableModule, TableRowSelectEvent} from 'primeng/table';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {InputText} from 'primeng/inputtext';
import {MessageService} from 'primeng/api';
import {Button} from 'primeng/button';
import {Message} from 'primeng/message';
import {FormsModule} from '@angular/forms';
import { ToggleButton } from 'primeng/togglebutton';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-naumen',
  imports: [
    TableModule,
    IconField,
    InputIcon,
    InputText,
    Message,
    FormsModule,
    ToggleButton,
    Button,
    NgClass
  ],
  templateUrl: './naumen.component.html',
  standalone: true,
  providers: [MessageService],
})
export class NaumenComponent implements OnInit, OnDestroy{
  users: User[] = [];
  selectedProduct!: User;

  isLoading = false;
  message = signal<any>(null);
  search = '';

  private subscription!: Subscription;

  showSearch = false;

  constructor(private service: UserService) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading = true;

    this.subscription = this.service.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  onRowSelect(event: TableRowSelectEvent) {
    this.message.set(
      { severity: 'info', content: event.data.email },
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
