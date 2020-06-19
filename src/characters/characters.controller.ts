import { Controller, Get } from '@nestjs/common';
import { CharactersService } from './characters.service'

@Controller('characters')
export class CharactersController {
    constructor(private readonly charactersService: CharactersService) {}
    @Get()
    getCharacters(): any {
        return this.charactersService.getAllCharacters();
    }

}