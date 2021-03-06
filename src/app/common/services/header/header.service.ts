import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  headerTitle: BehaviorSubject<string> = new BehaviorSubject<string>("");
  showHeader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() { }
}
