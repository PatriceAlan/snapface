import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {

  constructor(private auth: AuthService,
    private router: Router) { }
  
  ngOnInit(): void {
    
  }

  onLogin() {
    this.auth.login();
    this.router.navigateByUrl('/facesnaps');
  }

}
