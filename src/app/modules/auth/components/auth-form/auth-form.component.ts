import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  LOGIN_TOKEN,
  PASSWORD_TOKEN,
} from 'src/app/shared/constants/local-storage.const';
import { CALLS_PATH } from 'src/app/shared/constants/routing-path.const';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  public authForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.authForm = formBuilder.group({
      login: ['', [Validators.required, this.chechLoginValidator]],
      password: ['', [Validators.required, this.chechPasswordValidator]],
    });
  }

  ngOnInit(): void {}

  public chechLoginValidator(control: FormControl): any {
    if (!(control.value === 'Yuriy')) {
      return { login: true };
    }
    return null;
  }

  public chechPasswordValidator(control: FormControl): any {
    if (!(control.value === '12345678')) {
      return { password: true };
    }
    return null;
  }

  public checkFormValidation(): void {
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      return;
    }
  }

  public submit(): void {
    this.checkFormValidation();
    localStorage.setItem(LOGIN_TOKEN, this.authForm.getRawValue().login);
    localStorage.setItem(PASSWORD_TOKEN, this.authForm.getRawValue().password);
    this.router.navigate([CALLS_PATH.path]);
  }
}
