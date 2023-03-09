import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private apiUrl: string = 'https://peticiones.online/api/users';

  constructor(private clientHttp: HttpClient) {}

  getAll(page: number = 1): Observable<any> {
    return this.clientHttp.get(this.apiUrl + '?page=' + page);
  }
  getUserByID(idUser: string): Observable<Users> {
    return this.clientHttp.get<Users>(this.apiUrl + '/' + idUser);
  }
  createUser(newUser: Users) {
    return this.clientHttp.post(this.apiUrl, newUser);
  }
  updateUser(user: Users): Observable<any> {
    return this.clientHttp.put(this.apiUrl + '/' + user._id, user);
  }
  deleteUser(idUser: string): Observable<any> {
    return this.clientHttp.delete(this.apiUrl + '/' + idUser);
  }
}
