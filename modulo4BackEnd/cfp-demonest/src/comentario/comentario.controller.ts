import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import Comentario from './Comentario';
import { ComentarioService } from './comentario.service';

@Controller('comentario')
export class ComentarioController {
     constructor(private comentariosService:ComentarioService){}

    @Get()
    public getComentarios():any{
        return this.comentariosService.getComentarios();
    }

    @Get(':id')
    public getComentario(@Param('id') id):Comentario{
        return this.comentariosService.getComentario(parseInt(id));
    }

    @Post()
    create(@Body() comentario:any):string{
        return this.comentariosService.create(comentario);
    }

    @Delete(':id')
    public deleteComentario(@Param('id') id){
        return this.comentariosService.deleteComentario(parseInt(id));
    }

    @Put(':id')
    public updateComentario(@Body() comentario:any,@Param('id') id):boolean{
        return this.comentariosService.updateComentario(parseInt(id),comentario);
    }
}
