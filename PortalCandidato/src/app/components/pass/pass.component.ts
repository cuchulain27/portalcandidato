import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomvalidatorsService } from '../../services/customvalidators.service';


@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent{
  success = '';

  signin: FormGroup = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    confirmPassword: new FormControl('', [Validators.required])


  },

    CustomvalidatorsService.mustMatch('password', 'confirmPassword')

  );s
  hide = true;

  get passwordInput() { return this.signin.get('password'); }

  submitted = false;

  constructor() {}

  ngOnInit() {}


  get f() {
    return this.signin.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signin.invalid) {
      return;
    }

    this.success = JSON.stringify(this.signin.value);
  }
}


