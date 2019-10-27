import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemService: ItemsService){}

  @Get()
  findAll(): Item[] {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Item {
    return this.itemService.findOne(id);
  }

  @Post()
  create(@Body() createItem: CreateItemDto): string {
    return `created ${createItem.name}, ${createItem.description}, ${createItem.qty}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Body() updateItem: CreateItemDto, @Param('id') id): string {
    return `Update ${id}, name: ${updateItem.name}`;
  }
}
