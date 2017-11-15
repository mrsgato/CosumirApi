import { Component } from '@angular/core';
import { ApiService } from './services/api-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  public title: string;
  public resultado;

  constructor(
    private _apiService: ApiService
  ){
    this.title="Ipsum!!";
  }

  ngOnInit(){
    console.log("cargo componente base");
    this.getApiResult();
  }
  
  getApiResult(){
		this._apiService.getApi().subscribe(
			result => {
				this.resultado = result;
			},
			error => {
				console.log(<any>error);
			}
		);
	}
}
