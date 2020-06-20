import { Injectable, NotFoundException } from "@nestjs/common";
import { characters } from '../static/characters';

@Injectable()
export class CharactersService {
    private swCharacters = [...characters];
    
    getAllCharacters(): any {
        return [...this.swCharacters];
    }

    getCharacterByName(charName: string): any {
        const foundCharacters = [...this.swCharacters].filter(char => char.name.toLowerCase() === charName.toLowerCase()); 
        if (!foundCharacters) {
            throw new NotFoundException('Could not find character from given name');
        }

        return [...foundCharacters];
    }

    getCharacterByHeight(charHeight: string): any {
        const foundCharacters = [...this.swCharacters].filter(char => char.height === charHeight); 
        if (!foundCharacters) {
            throw new NotFoundException('Could not find character from given height');
        }

        return [...foundCharacters];
    }

    getCharacterByMass(charMass: string): any {
        const foundCharacters = [...this.swCharacters].filter(char => char.mass === charMass); 
        if (!foundCharacters) {
            throw new NotFoundException('Could not find character from given mass');
        }

        return [...foundCharacters];
    }

    getCharacterByHairColor(charHairColor: string): any {
        const foundCharacters = [...this.swCharacters].filter(char => char.hair_color.toLowerCase() === charHairColor.toLowerCase()); 
        if (!foundCharacters) {
            throw new NotFoundException('Could not find character from given hair colour');
        }

        return [...foundCharacters];
    }

    getCharacterBySkinColor(charSkinColor: string): any {
        const foundCharacters = [...this.swCharacters].filter(char => char.skin_color.toLowerCase() === charSkinColor.toLowerCase()); 
        if (!foundCharacters) {
            throw new NotFoundException('Could not find character from given skin colour');
        }

        return [...foundCharacters];
    }

    getCharacterByEyeColor(charEyeColor: string): any {
        const foundCharacters = [...this.swCharacters].filter(char => char.eye_color.toLowerCase() === charEyeColor.toLowerCase()); 
        if (!foundCharacters) {
            throw new NotFoundException('Could not find character from given eye colour');
        }

        return [...foundCharacters];
    }

    getCharacterByBirth(charBirthYear: string): any {
        const foundCharacters = [...this.swCharacters].filter(char => char.birth_year.toLowerCase() === charBirthYear.toLowerCase()); 
        if (!foundCharacters) {
            throw new NotFoundException('Could not find character from given birth year');
        }

        return [...foundCharacters];
    }

    getCharacterByGender(charGender: string): any {
        const foundCharacters = [...this.swCharacters].filter(char => char.gender.toLowerCase() === charGender.toLowerCase()); 
        if (!foundCharacters) {
            throw new NotFoundException('Could not find character from given gender');
        }

        return [...foundCharacters];
    }

    getCategoriesByCharacterName(charName: string): any {
        const foundCategories = [...this.swCharacters].map(char => {
            if (char.name.toLowerCase() === charName.toLowerCase()) {
                return {
                    name: char.name,
                    height: char.height,
                    mass: char.mass,
                    hair_color: char.hair_color,
                    skin_color: char.skin_color,
                    eye_color: char.eye_color,
                    birth_year: char.birth_year,
                    gender: char.gender
                }
            }
        });

        if (!foundCategories) {
            throw new NotFoundException('Could not find character from given gender');
        }

        return {...foundCategories};
    }

    // Get all characters but only returning their categories
    getAllCharWithOnlyCategories(): any {
        const swCharactersCategories = [...this.swCharacters].map(char => {
            return {
                name: char.name,
                height: char.height,
                mass: char.mass,
                hair_color: char.hair_color,
                skin_color: char.skin_color,
                eye_color: char.eye_color,
                birth_year: char.birth_year,
                gender: char.gender
            }
        });

        return [...swCharactersCategories];
    }

    // Get all matched characters by the query string, searching only the categories
    getMatchedCharWithCatByQuery(query: string): any {
        const foundCharacters = [...this.swCharacters].filter(value => {
            return ((value.name.toLowerCase() == query.toLowerCase() ||
                    value.height.toLowerCase()== query.toLowerCase() ||
                    value.mass.toLowerCase() == query.toLowerCase() ||
                    value.hair_color.toLowerCase() == query.toLowerCase() ||
                    value.skin_color.toLowerCase() == query.toLowerCase() ||
                    value.eye_color.toLowerCase() == query.toLowerCase() ||
                    value.birth_year.toLowerCase() == query.toLowerCase() ||
                    value.gender.toLowerCase() == query.toLowerCase()))
        });

        if (!foundCharacters) {
            throw new NotFoundException('Could not find character from given search query');
        }

        return [...foundCharacters];
    }
}