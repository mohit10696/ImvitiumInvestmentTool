import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [RouterModule.forChild([
    {
      path : '',
      component : FeaturesComponent
    }
  ])],
})
export class FeatureModule {}
