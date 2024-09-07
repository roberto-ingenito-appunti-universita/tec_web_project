import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class BackendService {
    constructor() { console.log(environment.hostName); }
    public apiUrl = `${environment.hostName}/api/v1`;
}
