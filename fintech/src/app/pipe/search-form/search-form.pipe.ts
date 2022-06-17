import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchForm'
})
export class SearchFormPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;

    args = args.toUpperCase();

    return value.filter((data: any) => {
        return data.label.toUpperCase().includes(args);
    });
  }

}
