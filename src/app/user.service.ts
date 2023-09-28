import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
}) export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  getUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:3000/api/usuarios`);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/api/user/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/user', user);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/api/user/${id}`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`http://localhost:3000/api/user/${user._id}`, user);
  }
}
