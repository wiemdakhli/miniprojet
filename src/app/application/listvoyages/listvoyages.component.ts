import { Component, OnInit } from '@angular/core';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';

@Component({
  selector: 'app-listvoyages',
  templateUrl: './listvoyages.component.html',
  styleUrls: ['./listvoyages.component.css']
})
export class ListvoyagesComponent implements OnInit {

  constructor(private voyageService:VoyageService) { }
  lesVoyages:Voyage[]=[];
  

  ngOnInit(): void {
    this.lesVoyages=this.voyageService.getVoyages();
  }

}
