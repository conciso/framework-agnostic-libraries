import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from '../generated/directives/proxies';

const components = [
  MyComponent
]

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components
})
export class CoreAngularModule {}
