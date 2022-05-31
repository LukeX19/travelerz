import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
declare const google: any;
@Component({
  selector: 'maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit, AfterViewInit {

  map: any;
  @ViewChild('mapElement') mapElement: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: {lat: 45.760696, lng: 21.226788},
      zoom: 14,
    });
  }

}
