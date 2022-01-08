import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor( private http : HttpClient ) { }

  // Construir URI para la llamada por GET a la API
  private execQuery( query : string ) : Observable<any> {
    const uri : string = `${environment.apiUrl}${query}`;

    return this.http.get(uri);
  }

  // Listar todas las razas
  // URI: https://dog.ceo/api/breeds/list
  public getBreeds() : Observable<string[]> {
    const query = '/breeds/list';

    return this.execQuery(query)
      .pipe( map( (res : any ) => {
        return res.message
      }));
  }

  // Listar fotos por nombre de raza
  // URI: https://dog.ceo/api/breed/hound/images
  public getImagesByBreedName( name : string ) : Observable<string[]> {
    const query = `/breed/${name}/images`;

    return this.execQuery(query)
      .pipe( map( (res : any ) => {
        return res.message
      }));
  }
}
