import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '123',
      description: 'descrip',
      name: 'Name',
      qty: 2,
    },
    {
      id: '124',
      description: 'descrip',
      name: 'Name',
      qty: 32,
    },
    {
      id: '125',
      description: 'descrip',
      name: 'Name',
      qty: 12,
    },
  ];

  findAll(): Item[] {
      return this.items;
  }

  findOne(id: string) : Item {
       return this.items.find(item => item.id === id);
  }
}
