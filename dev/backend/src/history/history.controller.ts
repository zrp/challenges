import { Body, Controller, Post } from '@nestjs/common';
import { HistoryService } from './history.service';
import { CreateHistoryDto } from './dto/create-history.dto';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Post()
  createHistory(@Body() createHistoryDto: CreateHistoryDto) {
    return this.historyService.createHistory(createHistoryDto);
  }
}
