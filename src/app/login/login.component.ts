import { UserService } from './../services/user.service';
import { Login } from './../app-model/login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {}
  sessionUserId: String | null=sessionStorage.getItem('userId');
  loginDetails:Login =new Login();
  message:String | undefined;
  loginCheck(){
    this.userService.login(this.loginDetails).subscribe(response => {​​​​
      Swal.fire(
        response.status,
        response.message
      )
      console.log(response);
      if(response.status == 'SUCCESS') {
        sessionStorage.setItem('userId',String(this.loginDetails.userId) );
        this.router.navigate(['dashboard']);
      }​​​​
      else{
        this.router.navigate(['register']);
        this.message = response.message;
      }
    }​​​​)

  }
  ngOnInit(): void {

  }

}







