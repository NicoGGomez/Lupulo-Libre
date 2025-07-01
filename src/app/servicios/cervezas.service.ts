import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cerveza {
  id: number;
  nombre: string;
  img: string;
  info: string;
}

@Injectable({
  providedIn: 'root'
})

export class CervezasService {

  private apiUrl = 'https://6863160688359a373e93e028.mockapi.io/cerveza';

  constructor(private http: HttpClient) { }

  getCervezas(): Observable<Cerveza[]> {
  return this.http.get<Cerveza[]>(this.apiUrl);
}
}