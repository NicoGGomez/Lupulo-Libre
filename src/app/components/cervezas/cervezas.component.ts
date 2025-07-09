import { Component, OnInit } from '@angular/core';
import { CervezasService, Cerveza } from '../../servicios/cervezas.service';

@Component({
  selector: 'app-cervezas',
  templateUrl: './cervezas.component.html',
  styleUrls: ['./cervezas.component.css']
})

export class CervezasComponent implements OnInit {

  cervezas: Cerveza[] = [];
  loading = true;
  error = '';

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

}