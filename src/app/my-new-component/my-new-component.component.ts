import { Component } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  standalone: true,
  imports: [],
  templateUrl: './my-new-component.component.html',
  styleUrl: './my-new-component.component.scss'
})
export class MyNewComponentComponent {
myVariable = "oioi";
}

