import {Component, OnInit} from '@angular/core';
import {SidebarStatusService} from '../../services/status/sidebar-status.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  isActiveMenuHeader: boolean = true;
  constructor(
    private router: Router,
    private sidebarStatusService: SidebarStatusService,
  )
  {}

  ngOnInit(): void {
    this.sidebarStatusService.status$.subscribe(status => {
      this.isActiveMenuHeader = status;
    })
  }
  goToProfile(): void {
    this.router.navigate(['/app/profile']);
  }
  goToPassword(): void {
      this.router.navigate(['/app/password']);
  }
  goToProducts(): void {
    this.router.navigate(['/app/products']);
  }
  goToHome(): void {
    this.router.navigate(['/app/control-panel']);
  }
}
