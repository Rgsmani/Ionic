import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryDetail'
})
export class CountryDetailPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
