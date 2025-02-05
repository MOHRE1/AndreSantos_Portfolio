import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-individual',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './individual.component.html',
  styleUrl: './individual.component.css'
})
export class IndividualComponent {

  openLink(url: string): void {
    window.open(url, '_blank');
  }

  downloadFile(filePath: string, fileName: string) {
    const encodedFileName = encodeURIComponent(fileName);
    const link = document.createElement('a');
    link.href = filePath;
    link.download = encodedFileName;
    link.click();
  }

  scrollToEnd() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }
}
