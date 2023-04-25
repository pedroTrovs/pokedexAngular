import { FetchService } from './../fetch.service';
import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  image! : string;
  id! : number;

  constructor(private service: FetchService) {}

  ngOnInit(): void {
    this.id = 1;
    this.generate();
  }

  generate() {
    this.service.getNewPokemon(this.id).subscribe(
      {
        next : data =>  {
          this.pokemon = data;
          this.getImage();
        }
      }
    );
  }

  pokemon: Pokemon = {} as Pokemon;

  getImage(){
    try
    {
      if(this.pokemon.id < 100)
      {
        if(this.pokemon.id < 10)
          this.image = "00" + this.pokemon.id;
        else
        this.image = "0" + this.pokemon.id;
      }
      else
        this.image = this.pokemon.id.toString();
    }
    catch(e)
    {
      alert("Erro!: " + e);
    }
  }

  go(direction : string)
  {
    if(direction == "forth")
    {
      this.id ++;
    }
    else
      this.id --;

    if(this.id == 0)
    {
      this.id = 1008;
    }

    if(this.id == 1009)
    {
      this.id = 1;
    }

    this.generate();
  }
}
