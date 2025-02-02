import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {EmailService} from '../../Services/email.service';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [ReactiveFormsModule],
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
    if (this.contactForm.valid) {
      this.emailService.sendEmail(this.contactForm.value)
        .then(() => alert('Email sent successfully!'))
        .catch(error => console.error('Error sending email:', error));
    }
  }

}
