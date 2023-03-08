import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/interfaces/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {
    console.log('Servicio HTTP');
  }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:3000/users');
  }
}
