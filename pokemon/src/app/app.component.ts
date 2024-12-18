import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaPokemon } from './model';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon';
  mialista!:ListaPokemon;
  o!: Observable <ListaPokemon>

constructor(public hhtp : HttpClient){
  this.o = this.http.get<ListaPokemon> ("https://pokeapi.co/api/v2/pokemon")
  this.o.subscribe(this.getData);
}
  getData(getData: ListaPokemon) {
   this.mialista = getData;
   console.log(this.mialista)
  }

}

