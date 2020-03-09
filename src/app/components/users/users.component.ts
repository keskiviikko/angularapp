import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA'
        }
      },
      {
        firstName: 'Kevin',
        lastName: 'Tuang',
        age: 34,
        address: {
          street: '69 Main st',
          city: 'Lynn',
          state: 'MA'
        }
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 26,
        address: {
          street: '55 Long st',
          city: 'Miami',
          state: 'FL'
        }
      }
    ];

    this.loaded = true;

    this.addUser({
      firstName: 'David',
      lastName: 'Goldman'
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
