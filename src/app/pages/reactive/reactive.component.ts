import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor( private fb: FormBuilder ) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)] ],
      apellido: ['', Validators.minLength(5) ],
      email: ['', [Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required ] ]
    });
  }

  guardar(){
    console.log( this.forma );
  }

}
