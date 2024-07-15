import { Injectable } from '@angular/core';
import LocalStorageKeys from '../local_storage_keys';
import { User } from '../model/user.type';

@Injectable({ providedIn: 'root' })
export class UserService {
    private apiUrl = 'http://localhost:3000/api/v1/user';
    private httpOptions = { headers: { "Content-Type": "application/json" } };

    constructor() { }

    getUser(): User { return JSON.parse(localStorage.getItem(LocalStorageKeys.userData)!); }
}
