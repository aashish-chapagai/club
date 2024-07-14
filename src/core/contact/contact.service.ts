import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ContactService {
    baseURL!: string;
    constructor(private http: HttpClient) {
        this.baseURL = environment.baseUrl;
    }

    contact(contactData: any) {
        return this.http.post(this.baseURL+"contact", contactData);
    }
}
