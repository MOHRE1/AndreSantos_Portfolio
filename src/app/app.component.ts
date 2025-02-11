import {Component, HostListener, NgZone, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './Components/navbar/navbar.component';
import {CenterPageComponent} from './Components/center-page/center-page.component';
import {IndividualComponent} from './Components/individual/individual.component';
import {ProjectsComponent} from './Components/projects/projects.component';
import {EmailComponent} from './Components/email/email.component';
import {SplashComponent} from './Components/splash/splash.component';
import {CommonModule, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent,
    CommonModule,
    CenterPageComponent,
    IndividualComponent,
    ProjectsComponent,
    EmailComponent,
    SplashComponent,
    NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  title = 'André Santos';
  //Cursor
  cursorX = 0;
  cursorY = 0;
  bigCursorX = 0;
  bigCursorY = 0;
  isClicked = false;
  isHovered = false;
  isLoading = true;

  constructor(private zone: NgZone) {
    this.animateBigCursor();
    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  }

  ngOnInit(): void {
    this.setupHoverListeners();
  }

  // Listen to mouse movement
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.cursorX = event.clientX - 10;
    this.cursorY = event.clientY - 10;
  }

  // Handle mouse click
  @HostListener('document:click')
  onClick(): void {
    this.isClicked = true;
    setTimeout(() => {
      this.isClicked = false;
    }, 400);
  }

  // Animate the big ball using requestAnimationFrame
  private animateBigCursor(): void {
    this.zone.runOutsideAngular(() => {
      const step = () => {
        const delay = 0.1; // Delay factor for smooth trailing
        this.bigCursorX += (this.cursorX - this.bigCursorX) * delay;
        this.bigCursorY += (this.cursorY - this.bigCursorY) * delay;

        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }


  private setupHoverListeners(): void {
    document.querySelectorAll('.hover-target').forEach(target => {
      target.addEventListener('mouseenter', () => {
        this.isHovered = true;
      });
      target.addEventListener('mouseleave', () => {
        this.isHovered = false;
      });
    });
  }
}
