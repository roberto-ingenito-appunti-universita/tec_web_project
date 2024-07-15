import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BackendService {
    public apiUrl = 'http://localhost:3000/api/v1';
}
