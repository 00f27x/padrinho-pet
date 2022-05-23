import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from 'src/app/models/pet';
import { ReturnedObject } from 'src/app/models/returned-object';
import { PetsProviderService } from 'src/app/shared/services/pets-provider.service';

@Component({
  selector: 'app-pets-carousel',
  templateUrl: './pets-carousel.component.html',
  styleUrls: ['./pets-carousel.component.css']
})
export class PetsCarouselComponent implements OnInit {
  
  pets!: Pet[];
  observable$!: Observable<ReturnedObject>;
  constructor(private petsProvider: PetsProviderService) { }

  ngOnInit(): void {

    this.petsProvider.getToken().subscribe(()=>{
      this.observable$ = this.petsProvider.getPets()
    });
    }
}
