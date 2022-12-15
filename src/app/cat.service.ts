import { Observable } from 'rxjs';
import { loadCards } from './app-state-store/app.actions';
import { Store } from '@ngrx/store';
import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export interface IText {
  text: string
}

export interface ICat {
  weight:             Weight;
  id:                 string;
  name:               string;
  cfa_url:            string;
  vetstreet_url:      string;
  vcahospitals_url:   string;
  temperament:        string;
  origin:             string;
  country_codes:      string;
  country_code:       string;
  description:        string;
  life_span:          string;
  indoor:             number;
  lap:                number;
  alt_names:          string;
  adaptability:       number;
  affection_level:    number;
  child_friendly:     number;
  dog_friendly:       number;
  energy_level:       number;
  grooming:           number;
  health_issues:      number;
  intelligence:       number;
  shedding_level:     number;
  social_needs:       number;
  stranger_friendly:  number;
  vocalisation:       number;
  experimental:       number;
  hairless:           number;
  natural:            number;
  rare:               number;
  rex:                number;
  suppressed_tail:    number;
  short_legs:         number;
  wikipedia_url:      string;
  hypoallergenic:     number;
  reference_image_id: string;
  image:              Image;
}

export interface Image {
  id:     string;
  width:  number;
  height: number;
  url:    string;
}

export interface Weight {
  imperial: string;
  metric:   string;
}

@Injectable({ providedIn: "root" })
export class CatService implements OnInit{
  
  
  public key = 'dc73e2d1-a390-42a9-8b27-1d3e5cb8db0c'
  public params = {headers:{'x-api-key': this.key}}

  constructor(private http: HttpClient,private store: Store) {}

  public getCats() {
    return this.http.get<ICat>("https://api.thecatapi.com/v1/breeds?limit=10")
  }

  public getImage(breed?:string){
    return this.http.get<Image>(`https://api.thecatapi.com/v1/breeds/search?q=${breed}&limit=10`, this.params)
  }
  
  public getCatsByBreed(breed?:string) {
    return this.http.get<ICat>(`https://api.thecatapi.com/v1/breeds/search?q=${breed}&limit=10`, this.params)
  }

  ngOnInit() {
  }
}
