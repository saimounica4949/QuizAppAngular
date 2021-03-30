import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/HTML.json', name: 'HTML' },
      { id: 'data/CSS.json', name: 'CSS' },
      { id: 'data/Angular.json', name: 'Angular' },
      { id: 'data/javascript.json', name: 'JavaScript' }
    ];
  }

}
