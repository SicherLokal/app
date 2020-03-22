import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name: 'productFilter',
    pure: false
})
export class ProductFilterPipe implements PipeTransform {
    transform(items: any[], filter: string): any {     
        return items.filter(product=> {let match = product.name.match(new RegExp(filter,"i")); return match } );
    }
}