import { Component, OnInit } from '@angular/core';
import { CervezasService, Cerveza } from '../../servicios/cervezas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cervezas',
  imports: [FormsModule],
  templateUrl: './cervezas.component.html',
  styleUrls: ['./cervezas.component.css']
})

export class CervezasComponent implements OnInit {

  cervezas: Cerveza[] = [];
  loading = true;
  error = '';

  cerveza : Cerveza = {
    id: 0,
    nombre: '',
    info: '',
    graduacion: 0,
    img: ''
  }

  constructor(private cervezasService: CervezasService) { }

  ngOnInit(): void {
    this.cervezasService.getCervezas().subscribe({
      next: (data) => {
        this.cervezas = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar las cervezas';
        console.error(err);
        this.loading = false;
      }
    })
  }

  agregar() {
      if (this.cerveza.nombre) {
      this.cervezasService.addCerveza(this.cerveza).subscribe(res => {
        console.log('Cerveza agregada!', res);

        this.cervezasService.getCervezas().subscribe({
          next: (data) => {
            this.cervezas = data;
          }
        });

        this.cerveza = {
        id: this.cerveza.id++,
        nombre: '',
        info: '',
        graduacion: 0,
        img: ''
      };
      });
    }
    }



}