import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {CursoListComponent} from "./components/cursos-list.component";


@Component({
	selector: "mi-app",
	templateUrl: "app/view/home.html",
	directives: [RestaurantesListComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
	{path: '/', name: "Home", component: RestaurantesListComponent, useAsDefault: true},


])

export class AppComponent{
	public titulo:string = "Restaurantes";


}
