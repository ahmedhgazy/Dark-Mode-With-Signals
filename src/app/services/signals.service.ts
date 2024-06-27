import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeSignalService {
  constructor() {}

  themeSignal = signal<string>('dark');

  setTheme(theme) {
    this.themeSignal.set(theme);
  }

  updateTheme() {
    this.themeSignal.update((theme) => (theme === 'dark' ? 'light' : 'dark'));
  }
}
