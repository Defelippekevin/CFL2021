import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import post from './Post';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private postService:PostService){}

    @Get()
    public getPosts():any{
        return this.postService.getPosts();
    }

    @Get(':id')
    public getPost(@Param('id') id ):post{
        return this.postService.getPost(parseInt(id));
    }

    

    @Post()
    create(@Body() post:any):string{
        return this.postService.create(post);
    }

    @Delete(':id')
    public delPost(@Param('id') id){
        return this.postService.delPost(parseInt(id));
    }

    @Put(':id')
    public updatePost(@Body() post:any,@Param('id') id):boolean{
        return this.postService.updatePost(parseInt(id),post);
    }
    
}
