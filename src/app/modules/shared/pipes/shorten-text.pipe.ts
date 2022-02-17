import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText',
})
export class ShortenTextPipe implements PipeTransform {
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: string, length: number = 8): any {
    return value
      ? value?.length < length
        ? value
        : value.substring(0, length - 1) + '...'
      : '';
  }
}
