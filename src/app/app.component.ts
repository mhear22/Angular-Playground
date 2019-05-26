import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/Services/LoginService';
import { Router, ActivatedRoute } from '@angular/router';
import { Angulartics2GoogleGlobalSiteTag } from 'angulartics2/gst';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	constructor(
		private LoginService:LoginService,
		private router:Router,
		angulartics:Angulartics2GoogleGlobalSiteTag,
		private ar:ActivatedRoute
	) {
		if(environment.production)
			angulartics.startTracking();
	}
	private data:any;
	ngOnInit() {
		var loggedIn = this.LoginService.IsLoggedIn();
	}
}
