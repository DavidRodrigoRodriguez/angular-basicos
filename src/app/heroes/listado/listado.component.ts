import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
 
})
export class ListadoComponent{

  heroes: string[]=['Ironman','Spiderman','Thor','Capitán América','Hulk']
  heroeBorrado:string='';
 
  borrarHeroe():void{
      this.heroeBorrado = this.heroes.shift() || '';

   }

}
