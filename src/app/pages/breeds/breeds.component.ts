import { Component, OnInit } from '@angular/core';
import { DogService } from 'src/app/services/dog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {

  breeds : string[] = [];

  constructor( private dogService : DogService ) { }

  ngOnInit(): void {
    // Loading
    Swal.fire({
      allowOutsideClick:false,
      icon: 'info',
      title: 'Cargando...',
    });
    Swal.showLoading();

    // Realizar llamada al servicio
    this.dogService.getBreeds()
      .subscribe( ( res : string[] ) => {
        this.breeds = res;
        Swal.close();
    }, ( errorService : any ) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ha ocurrido un error',
      })
    });
  }

}
