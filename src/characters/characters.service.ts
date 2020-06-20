import { Injectable, NotFoundException } from "@nestjs/common";
import { characters } from '../static/characters';

@Injectable()
export class CharactersService {
    private swCharacters = [...characters];

    getAllCharacters(): any {
        return [...this.swCharacters];
    }

    getCharacterByName(charName: string): any {
        const foundCharacter = [...this.swCharacters].filter(char => char.name === charName); 
        if (!foundCharacter) {
            throw new NotFoundException('Could not find character from given name');
        }
        return foundCharacter;
    }

    getCharacterByHeight(charHeight: string): any {
        const foundCharacter = [...this.swCharacters].filter(char => char.height === charHeight); 
        if (!foundCharacter) {
            throw new NotFoundException('Could not find character from given height');
        }
        return foundCharacter;
    }

    getCharacterByMass(charMass: string): any {
        const foundCharacter = [...this.swCharacters].filter(char => char.mass === charMass); 
        if (!foundCharacter) {
            throw new NotFoundException('Could not find character from given mass');
        }
        return foundCharacter;
    }

    getCharacterByHairColor(charHairColor: string): any {
        const foundCharacter = [...this.swCharacters].filter(char => char.hair_color === charHairColor); 
        if (!foundCharacter) {
            throw new NotFoundException('Could not find character from given hair colour');
        }
        return foundCharacter;
    }

    getCharacterBySkinColor(charSkinColor: string): any {
        const foundCharacter = [...this.swCharacters].filter(char => char.skin_color === charSkinColor); 
        if (!foundCharacter) {
            throw new NotFoundException('Could not find character from given skin colour');
        }
        return foundCharacter;
    }

    getCharacterByEyeColor(charEyeColor: string): any {
        const foundCharacter = [...this.swCharacters].filter(char => char.eye_color === charEyeColor); 
        if (!foundCharacter) {
            throw new NotFoundException('Could not find character from given eye colour');
        }
        return foundCharacter;
    }

    getCharacterByBirth(charBirthYear: string): any {
        const foundCharacter = [...this.swCharacters].filter(char => char.birth_year === charBirthYear); 
        if (!foundCharacter) {
            throw new NotFoundException('Could not find character from given birth year');
        }
        return foundCharacter;
    }

    getCharacterByGender(charGender: string): any {
        const foundCharacter = [...this.swCharacters].filter(char => char.gender === charGender); 
        if (!foundCharacter) {
            throw new NotFoundException('Could not find character from given gender');
        }
        return foundCharacter;
    }
}