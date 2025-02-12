import {Component, AfterViewInit, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
})
export class SplashComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    document.body.style.overflow = 'hidden'; // Disable scrolling
  }

  ngOnDestroy(): void {
    document.body.style.overflow = ''; // Re-enable scrolling when leaving
  }
}
