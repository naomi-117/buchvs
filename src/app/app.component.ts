import { Component } from '@angular/core';
import { BuchvsComponent } from "./buchvs/buchvs.component";

@Component({
  selector: 'app-root',
  imports: [BuchvsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'buchvs';
}
