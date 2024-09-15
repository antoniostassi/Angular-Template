import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyNewComponentComponent } from "./my-new-component/my-new-component.component";
import { NicoComponent } from "./nico/nico.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyNewComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'My-App';
}
