import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-banner',
  templateUrl: './image-banner.component.html',
  styleUrls: ['./image-banner.component.scss']
})
export class ImageBannerComponent {

  private _title:string="";
  private _subTitle:string="";
  private _imageSrc: string="";

  @Input() set title(val: string){
    this._title = val
  } get title(){
    return this._title
  }

  @Input() set subTitle(val: string){
    this._subTitle = val
  } get subTitle(){
    return this._subTitle
  }

  @Input() set src(val: string){
    this._imageSrc = val
  } get src(){
    return this._imageSrc
  }


}
