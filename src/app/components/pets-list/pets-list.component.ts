import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Pet } from 'src/app/models/pet';
import { ReturnedObject } from 'src/app/models/returned-object';
import { PetsProviderService } from 'src/app/shared/services/pets-provider.service';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  pets!: Pet[];
  observable$!: Observable<ReturnedObject>;
  constructor(private petsProvider: PetsProviderService) { }

  ngOnInit(): void {
    /*this.petsProvider.getToken().subscribe(() => {
      this.petsProvider.getPets().subscribe((returnedObject) => {
        this.pets = returnedObject.animals;
        console.log(this.pets)
      });
    });*/
    
    this.petsProvider.getToken().subscribe(()=>{
      this.observable$ = this.petsProvider.getPets()
    });
    }

}
