import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';
declare const L:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  messageForm: FormGroup;
  message: any = {};
 teachers:any=[];
  constructor(private messageService: MessageService, private userService:UserService) { }

  ngOnInit() {
  if (!navigator.geolocation) {
    console.log("location is not supported");
  }
  navigator.geolocation.getCurrentPosition((position)=>{
    console.log("Here position", position);
    
    const coords=position.coords;
    const latLong=[coords.latitude, coords.longitude];
  
    console.log(`lat:${position.coords.latitude}, lon:${position.coords.longitude}`); 
    let map = L.map('map').setView(latLong, 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// L.Control.geocoder().addTo(map);
let geocoder = L.Control.geocoder({
  defaultMarkGeocode: true
}).on('markgeocode', function(e) {
    var bbox = e.geocode.bbox;
    var poly = L.polygon([
      bbox.getSouthEast(),
      bbox.getNorthEast(),
      bbox.getNorthWest(),
      bbox.getSouthWest()
    ]).addTo(map);
    map.fitBounds(poly.getBounds());
  }).addTo(map);
  
L.control.locate().addTo(map);
let marker = L.marker(latLong).addTo(map);
marker.bindPopup('<b>Hi</b>').openPopup();
let popup = L.popup()
    .setLatLng(latLong)
    .setContent("Hi.")
    .openOn(map);
  });
  this.watchPosition();
  }
  watchPosition(){
   let desLat=0;
   let desLon=0;
    let id=  navigator.geolocation.watchPosition((position)=>{
      console.log(`lat:${position.coords.latitude}, lon:${position.coords.longitude}`);
      if (position.coords.latitude===desLat) {
        navigator.geolocation.clearWatch(id);
      }
    },
     (err)=>{
      console.log(err);}, {
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge:0,
      })
  }
  
  sendMessage() {
    this.messageService.sendMessage(this.message).subscribe()
  }
}
