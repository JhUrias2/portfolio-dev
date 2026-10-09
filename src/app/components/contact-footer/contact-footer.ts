import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-footer',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './contact-footer.html',
  styleUrl: './contact-footer.scss',
})
export class ContactFooter {
  currentYear = new Date().getFullYear();
}
