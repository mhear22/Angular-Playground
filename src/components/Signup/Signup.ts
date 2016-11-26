import { Component } from '@angular/core';
import { LoginService } from "../../Services/LoginService";
import { UserModel } from "../../Models/User/UserModel";
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
	selector: 'Signup',
	templateUrl: './components/Signup/Signup.html',
	providers: [ LoginService ]
})
export class Signup {
	public email:any = "";
	public password:any = "";
	public username:any = "";
	
	constructor(private login:LoginService, private router: Router) { }
	public Submit() {
		var model = new UserModel();
		model.Email = this.email;
		model.Password = this.password;
		model.Username = this.username;
		this.login.CreateUser(model).then(function(success){
			this.router.navigate(['/home']);
		});
	}
}