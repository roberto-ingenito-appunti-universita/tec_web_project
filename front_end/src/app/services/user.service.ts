import { Injectable } from '@angular/core';
import LocalStorageKeys from '../local_storage_keys';
import { User } from '../model/user.type';
import { BackendService } from './backend.service';

@Injectable({ providedIn: 'root' })
export class UserService {
    private apiUrl = `${this.backendService.apiUrl}/user`;

    constructor( private backendService: BackendService) { }

    getUser(): User { return JSON.parse(localStorage.getItem(LocalStorageKeys.userData)!); }
}
