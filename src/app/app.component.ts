import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarContentComponent } from "./public/components/toolbar-content/toolbar-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'v18-joseph-gallery';
}
