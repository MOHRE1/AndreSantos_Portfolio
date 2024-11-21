import {Component, HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './Components/navbar/navbar.component';
import {CenterPageComponent} from './Components/center-page/center-page.component';
import {IndividualComponent} from './Components/individual/individual.component';
import {ProjectsComponent} from './Components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CenterPageComponent, IndividualComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mines';
  //Cursor
  cursorX = 0;
  cursorY = 0;
  bigCursorX = 0;
  bigCursorY = 0;
  isClicked = false;

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

  ngAfterViewChecked(): void {
    const delay = 0.095;
    this.bigCursorX += (this.cursorX - this.bigCursorX) * delay;
    this.bigCursorY += (this.cursorY - this.bigCursorY) * delay;
  }

}
