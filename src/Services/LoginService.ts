import { Injector, Injectable  } from '@angular/core';
import { Http } from '@angular/http';
import { ServiceBase } from './ServiceBase';
import { Observable } from 'rxjs/Observable';
import { LoginModel } from '../Models/User/LoginModel';
import { CreateUserModel } from '../Models/User/CreateUserModel';
import { UserModel } from '../Models/User/UserModel';

@Injectable()
export class LoginService extends ServiceBase {
	
	constructor(protected http:Http) {
		super(http);
	}
	
	public Login(model: LoginModel): Observable<string> {
		var query = this.Post("sessions",null,model);
		query.subscribe(result => {
			ServiceBase.ApiKey = result;
		});
		return query;
	}
	
	public IsLoggedIn(): boolean {
		return ServiceBase.ApiKey != "";
	}
	
	public Logout() {
		var query = this.Delete("sessions", { Token: ServiceBase.ApiKey });
		query.subscribe(result=> {
			ServiceBase.ApiKey = "";
		});
		return query;
	}
	
	public GetCurrentUser(): Observable<any> {
		return this.Get("currentuser");
	}
	
	public GetUser(NameOrId:string):Observable<any> {
		return this.Get("users/" + NameOrId);
	}
	
	public CreateUser(model:CreateUserModel) {
		return this.Post("users",null,model);
	}
}