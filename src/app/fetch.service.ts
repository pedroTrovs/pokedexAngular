import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }

  getNewPokemon(id : number) : Observable<Pokemon>
  {
    return this.http.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/" + id);
  }
}
