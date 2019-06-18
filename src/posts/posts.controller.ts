import { Controller, Get, Req, Query, Headers, Param, Post, Body } from '@nestjs/common';
import { CreatePostsDto } from './posts.dto';

@Controller('posts')
export class PostsController {
  @Get()
  index(@Req() request, @Query()  query, @Headers('authorization') headers) {
    return [{
      title: 'hello nestjs',
      data: request.hostname,
      query,
      headers
    }]
  }

  @Get(':id')
  show(@Param() param) {
    return {
      title: param.id
    };
  }

  @Post()
  store(@Body() post: CreatePostsDto) {
    return post.title;
  }
}
