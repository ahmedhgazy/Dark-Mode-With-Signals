import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeSignalService } from '../services/signals.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSlideToggleModule,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  checked = false;
  disabled = false;
  currentLang: string;
  constructor(public translateS: TranslateService) {}
  themeS: ThemeSignalService = inject(ThemeSignalService);

  ngOnInit(): void {
    this.translateS.setDefaultLang('en');
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translateS.use(this.currentLang);
  }
  toggleTheme() {
    this.themeS.updateTheme();
    // console.log(this.themeS.themeSignal());
  }

  changeCurrentLang(lang: string) {
    this.translateS.use(lang);
    localStorage.setItem('currentLang', lang);
  }
}
