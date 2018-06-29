import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable()
export class UserService {
    private BASE_URL = 'http://localhost:1337';

    constructor(private http: HttpClient) {}

    getToken(): string {
        return localStorage.getItem('token');
    }

    signIn(email: string, password: string): Observable<any> {
        const url = `${this.BASE_URL}/login`;
        return this.http.post<User>(url, {email, password});
    }

    signUp(email: string, password: string, firstName: string, lastName: string) {
        const url = `${this.BASE_URL}/signup`;
        return this.http.post<User>(url, {email, password, firstName, lastName});
    }
    authenticate(token: string) {
        console.log(token);
        const url = `${this.BASE_URL}/authenticate`;
        return this.http.post(url, {token});
    }

}
