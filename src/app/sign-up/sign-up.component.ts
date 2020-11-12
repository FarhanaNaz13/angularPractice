import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { UserserviceService } from '../sevice/userservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  user;
  userlist: User[];
  isSubmitted;
  constructor(private userService: UserserviceService) {
    this.user = new User('', '', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
   this. getusers();
  }
  // tslint:disable-next-line:typedef
  submit() {
    this.isSubmitted = true;
  }
  getusers(): void {
    this.userService.getusers().subscribe((data) => {console.log(data);
                                                     this.userlist = data;
    });
    return null;
  }
}
