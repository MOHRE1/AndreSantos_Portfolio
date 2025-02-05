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
  isLoading: boolean = false;
  emailSend: boolean = false;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  sendEmail() {
    if (this.contactForm.valid) {
      this.isLoading = true;

      this.emailService.sendEmail(this.contactForm.value)
        .then(() => {
          this.isLoading = false;
          this.emailSend = true;
          console.log('Email sent');

        })
        .catch((error) => {
          this.isLoading = false;
          this.emailSend = false;
          console.error('Error sending email:', error);
        });
    }
  }


}
