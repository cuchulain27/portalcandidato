import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IdleService } from './services/idle.service';
import { environment } from '../environments/environment.prod';
import { LoginService } from './services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private IdleService: IdleService, private loginService: LoginService){}


  ngOnInit(): void {
    this.initialIdleSettings();
  }

  private initialIdleSettings() {
    const idleTimeoutInSeconds: number = environment.idleTimeInMinutes * 60;
    this.IdleService.starWatching(idleTimeoutInSeconds).subscribe((isTimeOut: boolean) => {
      if (isTimeOut) {
        Swal.fire({
          icon: 'info',
          title: 'Oops...',
          text: 'Su session a caducado!',

        })
        this.loginService.logout();
        this.router.navigateByUrl('/');
      }
    });
  }

}
