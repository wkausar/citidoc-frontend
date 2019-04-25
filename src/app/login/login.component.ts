import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login(emailAddress: string, password: string): void {
      if (emailAddress && password) {
        console.log(`logging in with email: ${emailAddress}:${password}`);
        this.router.navigate(['/document-generator']);
      }
  }
}
