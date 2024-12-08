import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  private authService: AuthService;
  submitted = false;

  constructor(private router: Router) {
    this.router = inject(Router);
    this.authService = inject(AuthService);

    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  submitForm() {
    this.submitted = true;

    const loggedIn = this.authService.loginUser(
      this.loginForm.get('email')?.value,
      this.loginForm.get('password')?.value
    );

    if (!loggedIn) {
      return console.log(
        'Não foi possível logar. Verifique os dados inseridos e tente novamente.'
      );
    }

    this.router.navigate(['add-product']);
  }
}
