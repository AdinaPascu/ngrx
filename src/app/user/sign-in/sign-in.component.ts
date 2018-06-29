import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../core/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { SignInAction } from '../user.actions';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public form: FormGroup;
  user: User = new User();
  loading: boolean;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.store
      .select((state) => state.user)
      .subscribe(data => {
        this.loading = data.loading;
        this.error = data.errorMessage;
      });

    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const payload = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };

    this.store.dispatch(new SignInAction(payload));
  }
}
