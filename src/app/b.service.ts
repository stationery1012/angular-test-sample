import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BService {
  constructor() {}

  getValue() {
    return 'angular-test-sample';
  }
}
