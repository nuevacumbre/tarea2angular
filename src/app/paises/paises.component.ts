import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit {

  pais:any;

  constructor( private paisservice:PaisesService) { }

  ngOnInit(): void {
    this.getPais();
  }

  getPais(){
    this.paisservice.getPaises().subscribe(resp => {
      this.pais = resp;
      console.log(this.pais);
    })
  }

}
