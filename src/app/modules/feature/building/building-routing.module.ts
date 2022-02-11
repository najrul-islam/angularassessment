import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingComponent } from './building.component';
import { BuildingChartComponent } from './components/building-chart/building-chart.component';


const routes: Routes = [
  {
    path: 'chart', component: BuildingComponent,
    children: [
      {
        path: '', component: BuildingChartComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
  ]
})
export class BuildingRoutingModule { }
