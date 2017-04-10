import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Curso} from "../model/curso";

Injectable()
export class CursoService{
  constructor(private _http:Http){
  }

  getCursos(){
    return this._http.get("http://localhost/slim/api-rest.php/cursos")
                      .map(res => res.json());
  }
}
