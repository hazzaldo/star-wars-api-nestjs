import { Injectable } from "@nestjs/common";
import { characters } from '../static/characters';

@Injectable()
export class CharactersService {
    private swCharacters = [...characters];

    getAllCharacters(): any {
        return [...this.swCharacters];
    }
}