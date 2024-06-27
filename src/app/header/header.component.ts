import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeSignalService } from '../services/signals.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSlideToggleModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  checked = false;
  disabled = false;

  themeS: ThemeSignalService = inject(ThemeSignalService);
  toggleTheme() {
    this.themeS.updateTheme();
    console.log(this.themeS.themeSignal());
  }
}
