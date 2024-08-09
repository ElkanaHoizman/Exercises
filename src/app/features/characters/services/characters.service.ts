import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Character } from '../models/Character';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';

const API_PUBLIC_KEY = '&apikey=ce18a55e03c5e02cd9ff7c4768a50692';
const TIME_OUT = '&ts=1';
const HASH_md5 = '&hash=bdb68039ea14473c7ac4310daba69176';
const RUTA_BASE = 'https://gateway.marvel.com';
const PERSONAJES = '/v1/public/characters?nameStartsWith=';
const LIMIT = '&limit=3';
let OFFSET = 0;
const headersjson = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  // private character$: BehaviorSubject<null> = new BehaviorSubject(null);

  constructor(private _http: HttpClient) {}

  // getCharacters(): Observable<Character[] | null> {
  //   return this.character$.asObservable();
  // }
  setCharacters(word: string, offset?: Number): Observable<any> {
    return this._http.get<any>(
      `${
        environment.apiUrl
      }${PERSONAJES}${word}${TIME_OUT}${API_PUBLIC_KEY}${HASH_md5}${LIMIT}&offset=${
        offset || OFFSET
      }`,
      { headers: headersjson }
    );
  }
}
