import { Injectable, isDevMode } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {
    this.loadUsers();
  }
  //dev:
  // baseUrl = '//localhost:3030/api/';
  //prod:
  baseUrl = '/api/';

  initloggedInUSer: User = JSON.parse(
    sessionStorage.getItem('loggedInUser') || 'null'
  );

  private _loggedInUser$ = new BehaviorSubject<User | null>(
    this.initloggedInUSer
  );
  public loggedInUser$ = this._loggedInUser$.asObservable();
  private _users$ = new BehaviorSubject<User[]>([]);
  public users$ = this._users$.asObservable();

  public async login(username: string, password: string) {
    try {
      const loggedInUser: any = await this.http
        .post(
          `${this.baseUrl}auth/login`,
          {
            username,
            password,
          },
          { withCredentials: true }
        )
        .toPromise();
      this._loggedInUser$.next(loggedInUser);
      sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      return loggedInUser;
    } catch (err) {
      console.log('error while trying log in...', err);
      throw err;
    }
  }

  public async signup(details: any) {
    try {
      const loggedInUser: any = await this.http
        .post(`${this.baseUrl}auth/signup`, details, { withCredentials: true })
        .toPromise();
      this._loggedInUser$.next(loggedInUser);
      sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      return loggedInUser;
    } catch (err) {
      console.log('error while trying signup...', err);
      throw err;
    }
  }

  public async logout() {
    try {
      await this.http
        .post(`${this.baseUrl}auth/logout`, {}, { withCredentials: true })
        .toPromise();
      this._loggedInUser$.next(null);
      sessionStorage.setItem('loggedInUser', JSON.stringify(''));
      return;
    } catch (err) {
      console.log('error while trying log in...', err);
      throw err;
    }
  }

  public async loadUsers() {
    try {
      const users: any = await this.http
        .get(`${this.baseUrl}user`, { withCredentials: true })
        .toPromise();
      this._users$.next(users);
      return this.users$;
    } catch (err) {
      console.log('error while trying fetch users...', err);
      throw err;
    }
  }
}
