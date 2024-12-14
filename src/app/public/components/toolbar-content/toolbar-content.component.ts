import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [NgIf],
  templateUrl: './toolbar-content.component.html',
  styleUrls: ['./toolbar-content.component.css']
})
export class ToolbarContentComponent {
  lastScrollTop = 0;
  isToolbarHidden = false;
  isMobile = false;
  isOpen = false;

  constructor() {
    this.isMobile = window.innerWidth < 480;
  }

  onMenuClick(): void {
    this.isOpen = !this.isOpen;
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.isMobile = window.innerWidth < 480;
    if (!this.isMobile && this.isOpen) {
      this.isOpen = false;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    this.isToolbarHidden = currentScroll > this.lastScrollTop;
    this.lastScrollTop = Math.max(currentScroll, 0);
  }
}