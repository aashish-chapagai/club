import { Component } from '@angular/core';
import { ContactConnector } from '../../connector/contact/contact.connector';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, CommonModule, BrowserModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm!: FormGroup;
  constructor(private contactConnector: ContactConnector) {
    this.contactForm = this.contactConnector.contactForm;
  }
  getNameControl() {
    return this.contactForm.get("name");
  }
  getEmailControl() {
    return this.contactForm.get("email");
  }
  getSubjectControl() {
    return this.contactForm.get("subject");
  }
  getMessageControl() {
    return this.contactForm.get("message");
  }
  contact() {
    const message = {
      name: this.getNameControl()?.value,
      email: this.getEmailControl()?.value,
      subject: this.getSubjectControl()?.value,
      message: this.getMessageControl()?.value
    }
    this.contactConnector.contact(message).subscribe();
    this.contactForm.reset();
  }
}
