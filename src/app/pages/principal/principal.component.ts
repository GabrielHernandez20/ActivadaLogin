import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { provideClientHydration } from '@angular/platform-browser';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  providers:[],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  data:any[]= []
  nombre='gabriel'
  condicional=true
  ngOnInit(){
    this.miServicio.getRickAndMorty().subscribe;((respuesta:any)=>{
      console.log(respuesta.results)
      this.data=respuesta.results
    })
  }
  
  constructor (private miServicio:AuthService){
  }
}
