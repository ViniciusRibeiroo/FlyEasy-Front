import { Injectable } from '@angular/core';
import { Hangar } from './hangar.js';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
}) export class HangarService {

  constructor(
    private http: HttpClient,
  ) { }

  getHangares(): Observable<Hangar[]> {
    return this.http.get<Hangar[]>(`http://localhost:3000/api/hangares`);
  }

  getHangar(id: string): Observable<Hangar> {
    return this.http.get<Hangar>(`http://localhost:3000/api/hangar/${id}`);
  }

  createHangar(hangar: Hangar): Observable<Hangar> {
    return this.http.post<Hangar>('http://localhost:3000/api/hangar', hangar);
  }

  deleteHangar(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/api/hangar/${id}`);
  }

  updateHangar(hangar: Hangar): Observable<Hangar> {
    return this.http.put<Hangar>(`http://localhost:3000/api/hangar/${hangar._id}`, hangar);
  }
}
