import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  ocultStates: { [key: string]: boolean } = {};
  showMessage: boolean = false;

  ngOnInit() {
    this.ocultStates['project01']= false
    this.ocultStates['project02']= false
    this.ocultStates['project03']= false
  }

  changeOcult(key: string) {
    this.ocultStates[key] = !this.ocultStates[key];
    console.log(this.ocultStates[key]);
  }
}
