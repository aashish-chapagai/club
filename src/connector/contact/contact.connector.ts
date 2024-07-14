import { Injectable } from '@angular/core';
import { ContactService } from '../../core/contact/contact.service';
import { FormBuilder } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class ContactConnector {
    get contactForm() {
        return this.formBuilder.group({
            name: [""],
            email: [""],
            subject: [""],
            message: [""]
        })
    }
    constructor(private contactService: ContactService, private formBuilder: FormBuilder) {}

    contact(contactData: any) {
        return this.contactService.contact(contactData);
    }
}
