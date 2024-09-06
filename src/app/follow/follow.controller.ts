import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FollowService } from './follow.service';
import { CreateFollowDto } from './dto/create-follow.dto';
import { AuthGard } from 'src/guards/auth.guard';

@Controller('follow')
@ApiBearerAuth()
@ApiTags('Follow')
export class FollowController {
  constructor(private followService: FollowService) {}

  @Post()
  @UseGuards(AuthGard)
  createFollow(@Body() body: CreateFollowDto) {
    return this.followService.create(body);
  }
}
