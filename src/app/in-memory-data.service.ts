import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Nezuko Kamado – Kimetsu no Yaiba' },
      { id: 2, name: 'Asuna Yuuki – Sword Art Online: Alicization' },
      { id: 3, name: 'Mikasa Ackerman - Shingeki no Kyojin' },
      { id: 4, name: 'Zero two - Darling in the fraxx' },
      { id: 5, name: 'Violet Evergarden - Violet Evergarden' },
      { id: 6, name: 'Emilia - Re:Zero' },
      { id: 7, name: 'Nobara - Kugisaki - Jujutsu Kaisen' },
      { id: 8, name: 'Freya - Kaifuku jutsushi no yarinaoshi' },
      { id: 9, name: 'Violet Evergarden – Violet Evergarden' },
      { id: 10, name: 'Elaina – Wandering Witch: The Journey of Elaina' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}