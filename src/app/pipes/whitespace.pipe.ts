import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'whitespace'
})
export class WhitespacePipe implements PipeTransform {

  transform(ch:string){
    return ch.replace(/\s+/g, '');
  }

}
