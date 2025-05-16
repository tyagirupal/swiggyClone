import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mobileNumber: string = '';
  otp: string = '';
  generatedOTP: string = '';
  otpSent: boolean = false;
  errorMessage: string = '';
  message :'login Successful';
  messageTwo :'OTP Sent';


  // private _snackBar ;

  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open("Login Successful!", action);
  // }

  constructor(private router:Router,private snackBar: MatSnackBar) {}
  ngOnInit(): void {
     }

  sendOTP() {
    if (this.mobileNumber.length === 10) {
      this.generatedOTP = Math.floor(100000 + Math.random() * 900000).toString(); 
      this.otpSent = true;
      console.log("Generated OTP:", this.generatedOTP); 
      this.snackBar.open(this.messageTwo, 'Close', {
        duration: 100000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['notif-success'],
      });

      // alert("OTP sent: " + this.generatedOTP); 
    } else {
      this.errorMessage = "Please enter a valid 10-digit mobile number";
    }
  }

  verifyOTP() {
    if (this.otp === this.generatedOTP) {
      console.log("sdfghjkl");
      
      this.snackBar.open(this.message, 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['notif-success'],
      });
      // alert("Login Successful!");
      this.navigateToHome();
    } else {
      this.errorMessage = "Invalid OTP. Please try again.";
    }
  }
      navigateToHome() 
    {
      this.router.navigate(['/home']);
    }
}

