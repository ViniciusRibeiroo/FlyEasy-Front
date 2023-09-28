import { Injectable } from '@angular/core';
import { Aviao } from './aviao';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
}) export class AviaoService {

  constructor(
    private http: HttpClient,
  ) { }

  getAvioes(): Observable<Aviao[]> {
    return this.http.get<Aviao[]>(`http://localhost:3000/api/avioes`);
  }

  getAviao(id: string): Observable<Aviao> {
    return this.http.get<Aviao>(`http://localhost:3000/api/aviao/${id}`);
  }

  createAviao(aviao: Aviao): Observable<Aviao> {
    return this.http.post<Aviao>('http://localhost:3000/api/aviao', aviao);
  }

  deleteAviao(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/api/aviao/${id}`);
  }

  updateAviao(aviao: Aviao): Observable<Aviao> {
    return this.http.put<Aviao>(`http://localhost:3000/api/aviao/${aviao._id}`, aviao);
  }
}
