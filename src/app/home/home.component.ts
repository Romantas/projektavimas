import {Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { ChatService } from '../chat.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

declare var particlesJS: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userChats$;
  constructor(
    public auth: AuthService,
    public cs: ChatService,
              ) {}
  myParams: object = {};
  ngOnInit() {
    this.userChats$ = this.cs.getUserChats();
    // tslint:disable-next-line:only-arrow-functions
    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
    // tslint:disable-next-line:only-arrow-functions
    particlesJS.load('particles-js2', 'assets/particles2.json', function() {
      console.log('callback - particles.js2 config loaded');
    });
    // tslint:disable-next-line:only-arrow-functions
    particlesJS.load('particles-js3', 'assets/particles3.json', function() {
      console.log('callback - particles.js3 config loaded');
    });
  }
}
