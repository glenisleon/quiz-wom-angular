import { Component, OnInit } from '@angular/core';
import { DogService } from 'src/app/services/dog.service';
import { ActivatedRoute } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit {

  name: string;
  images : string[] = [];

  constructor( 
    private activatedRoute : ActivatedRoute,
    private dogService : DogService ) {
      this.name = '';
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      // Loading
      Swal.fire({
        allowOutsideClick:false,
        icon: 'info',
        title: 'Cargando...',
      });
      Swal.showLoading();

      //Obtener parametros de la URL
      let nameParams = params['name'];
      this.name = nameParams;

      // Realizar llamada al servicio
      this.dogService.getImagesByBreedName(nameParams)
        .subscribe( ( res : string[] ) => {
        this.images = res;
        Swal.close();  
      }, ( errorService : any ) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ha ocurrido un error',
        })
      });
    });    
  }
}
