import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderFooterService {
  private _showHeaderFooter = true;
  constructor() { }
  
  set showHeaderFooter(value: boolean) {
    this._showHeaderFooter = value;
  }

  get showHeaderFooter(): boolean {
    return this._showHeaderFooter;
  }
}
