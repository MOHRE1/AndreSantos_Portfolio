import { Injectable } from '@angular/core';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private serviceId = 'service_bs4d68k';
  private templateId = 'template_8232usk';
  private userId = 'wQ2P015xNH-S6mYzq';

  sendEmail(formData: any): Promise<EmailJSResponseStatus> {
    return emailjs.send(this.serviceId, this.templateId, formData, this.userId);
  }
}
