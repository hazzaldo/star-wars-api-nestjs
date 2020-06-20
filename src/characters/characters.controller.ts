import { Controller, Get, Param } from '@nestjs/common';
import { CharactersService } from './characters.service'

@Controller('characters')
export class CharactersController {
    constructor(private readonly charactersService: CharactersService) {}
    @Get()
    getCharacters(): any {
        return this.charactersService.getAllCharacters();
    }

    @Get('name/:name')
    getCharacterByName(@Param('name') charName: string): any {
        return this.charactersService.getCharacterByName(charName);
    }

    @Get('height/:height')
    getCharacterByHeight(@Param('height') charHeight: string): any {
        return this.charactersService.getCharacterByHeight(charHeight);
    }

    @Get('mass/:mass')
    getCharacterByMass(@Param('mass') charMass: string): any {
        return this.charactersService.getCharacterByMass(charMass);
    }

    @Get('skin-color/:skin_color')
    getCharacterByHairColor(@Param('skin_color') charSkinColor: string): any {
        return this.charactersService.getCharacterBySkinColor(charSkinColor);
    }

    @Get('eye-color/:eye_color')
    getCharacterByEyeColor(@Param('eye_color') charEyeColor: string): any {
        return this.charactersService.getCharacterByEyeColor(charEyeColor);
    }

    @Get('birth-year/:birth_year')
    getCharacterByBirthYear(@Param('birth_year') charBirthYear: string): any {
        return this.charactersService.getCharacterByBirth(charBirthYear);
    }

    @Get('gender/:gender')
    getCharacterByGender(@Param('gender') charGender: string): any {
        return this.charactersService.getCharacterByGender(charGender);
    }
}