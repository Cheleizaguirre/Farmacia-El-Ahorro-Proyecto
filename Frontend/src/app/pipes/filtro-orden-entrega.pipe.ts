import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterorden_entrega'
})
export class Filter_orden_entregaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];
    for (const post of value) {
      if (post.cantidad_medicina.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }
}
