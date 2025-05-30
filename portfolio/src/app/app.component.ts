import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TuiAppBar} from '@taiga-ui/layout';
import { TuiLink, TuiButton } from '@taiga-ui/core';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TuiAppBar,TuiLink,TuiButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
