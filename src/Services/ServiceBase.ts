import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UrlChainer } from './UrlChainer';

export class ServiceBase {
	public static ApiUrl:string = "http://localhost:5000/";
	public static ApiKey:string = "";
	
	constructor(protected http:Http) {
		
	}
	
	private GetUrl(endpoint:string, params:any=null): string {
		var url = ServiceBase.ApiUrl + endpoint;
		var x = new UrlChainer(url);
		x.FromModel(params);
		return x.GetUrl();
	}
	
	public Post(endpoint: string, params:any=null, model:any=null) {
		var url = this.GetUrl(endpoint);
		return this.http.post(url,model);
	}
}