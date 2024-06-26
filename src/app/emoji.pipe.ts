// emoji.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emoji'
})
export class EmojiPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value + ' 😜';
  }
}