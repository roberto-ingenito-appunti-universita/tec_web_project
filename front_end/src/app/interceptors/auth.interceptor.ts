import { inject } from '@angular/core';
import { HttpRequest, HttpEvent, HttpHandlerFn, HttpClient, HttpBackend } from '@angular/common/http';
import { Observable, firstValueFrom, from, fromEvent, switchMap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode'
import LocalStorageKeys from '../local_storage_keys';
import { User } from '../model/user.type';

export default function authInterceptor(request: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> {
    return from(getToken()).pipe(
        switchMap((newToken: string | null) => {
            request = request.clone({ setHeaders: { Authorization: `Bearer ${newToken}` } });
            return next(request);
        }),
    );
}

// restituisce il token corrente, se è scaduto lo aggiorna
async function getToken() {
    let token = inject(AuthService).getToken();

    if (token) {
        const decodedToken = jwtDecode(token);

        const expirationDate = new Date((decodedToken.exp ?? 0) * 1000);

        // data attuale meno mezzo minuto, cosi da avere un margine di tempo tra le richieste, 
        // potrebbe capitare che durante il controllo il token risulta valido ma scade durante l'invio della richiesta al server
        const currentDate = new Date(new Date().getTime() - 30000);

        if (currentDate > expirationDate) { // is token expired
            const user: User = JSON.parse(localStorage.getItem(LocalStorageKeys.userData)!);
            const httpOptions = { headers: { "Content-Type": "application/json" } };
            const { token: refreshedToken } = await firstValueFrom(
                // HttpBackend esegue direttamente la richiesta senza passare per gli interceptors
                //      questo è fondamentale altrimenti anche questa richiesta viene intercettata 
                //      mandando tutto il processo in loop
                new HttpClient(inject(HttpBackend)).post<{ token: string }>(
                    'http://localhost:3000/api/v1/auth/refresh-token',
                    { username: user.username },
                    httpOptions,
                )

            );
            token = refreshedToken;
            localStorage.setItem(LocalStorageKeys.jwtToken, token);
        }
    }

    return token;
}