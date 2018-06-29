import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from '../../core/models/user.model';
import { AuthenticateAction, SignOutAction } from '../../user/user.actions';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingPageComponent implements OnInit {

  token: string;
  isAuthenticated: boolean;
  user: User;

  constructor(
    private store: Store<any>,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
      iconRegistry.addSvgIcon(
        'person',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/baseline-person-24px.svg')
      );
    }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    console.log(this.token);
    if (this.token) {
      this.store.dispatch(new AuthenticateAction(this.token));
      this.store
      .select((state) => state.user)
      .subscribe(data => {
        console.log(data);
        this.isAuthenticated = data.authenticated;
        this.user = data.userData;
      });
    console.log(this.isAuthenticated);
    } else {
      this.isAuthenticated = false;
    }
  }
  signOut() {
    localStorage.removeItem('token');
    this.store.dispatch(new SignOutAction());
  }
}
