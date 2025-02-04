import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {EmailService} from '../../Services/email.service';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  sendEmail() {
    debugger
    if (this.contactForm.valid) {
      this.emailService.sendEmail(this.contactForm.value)
        .then(() => alert('Email sent successfully!'))
        .catch(error => console.error('Error sending email:', error));
    }
  }

}
