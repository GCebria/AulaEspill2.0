import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {CursoService} from "../services/curso.service";
import {Curso} from "../model/curso";

@Component({
  selector: "curso-list",
  templateUrl: "app/view/curso-list.html",
  directives: [ROUTER_DIRECTIVES],
  providers: [CursoService]
})

export class CursosListComponent implements OnInit{
  public titulo:string ="Listado de cursos:";
  public cursos: Curso[];
  public status: string;
  public errorMessage: string;

  constructor(private _cursoService: CursoService){}

  ngOnInit(){
    this.getCursos();
    console.log("cursos-list component cargado");

  }

  getCursos(){
      this._cursoService.getCursos().subscribe(
          result =>{
              this.cursos = result.data
              this.status = result.status;

              if(this.status!=="success"){
                alert("ERROR EN EL SERVIDOR");
              }
          },
          error =>{
            this.errorMessage = <any>error;
            if(this.errorMessage !== null){
              console.log(this.errorMessage);
              alert("ERROR EN LA PETICIÓN");
            }
          }
      );
  }


}
