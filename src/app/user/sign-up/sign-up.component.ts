import { Component, OnInit } from '@angular/core';
import { User } from '../../core/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';
import { SignUpAction } from '../user.actions';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = new User();
  loading: boolean;
  error: string;

  constructor(
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
    }

  onSubmit(): void {
    this.store.dispatch(new SignUpAction(this.user));
  }
}
