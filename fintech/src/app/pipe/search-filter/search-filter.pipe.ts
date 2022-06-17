import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;

    args = args.toUpperCase();
    console.log(args)

    return value.filter((data: any) => {
        return data.labelThirdParty.toUpperCase().includes(args);
    });
  }

}
