import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatButtonModule,MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isMenuOpen: boolean = false;

  toggleMenu():void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu():void {
    this.isMenuOpen = false;
  }

}
