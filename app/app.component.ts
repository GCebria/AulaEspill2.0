import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {CursosListComponent} from "./components/cursos-list.component";


@Component({
	selector: "mi-app",
	templateUrl: "app/view/home.html",
	directives: [CursosListComponent, ROUTER_DIRECTIVES]
})



export class AppComponent{
	public titulo:string = "Cursos";


}
