import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageService } from '../services/message.service';
declare const L:any;


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
searchForm=FormGroup;
search:any={};
teacher:any={};
lat:any;
lng:any;
map:any;
marker:any;
  constructor(private messageService:MessageService) { }

  ngOnInit() {
    this.map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(this.map);

this.marker=L.marker([51.5, -0.09]).addTo(this.map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();
    
  }
searchLocation(){

this.messageService.searchLocation(this.search).subscribe((data)=>{
this.teacher=data.teacherObj;
console.log("Here teacher", this.teacher);

this.lat=this.teacher.location.coordinates[1];
console.log("Here lat", this.lat);

this.lng=this.teacher.location.coordinates[0];
this.map.setView(([this.lat, this.lng]), 13);
this.marker.setLatLng([this.lat, this.lng]);
let circle = L.circle([this.lat, this.lng], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(this.map);

});
};
};
