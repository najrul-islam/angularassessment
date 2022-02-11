import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "building",
        loadChildren: () => import("./modules/feature/building/building.module").then(m => m.BuildingModule),
        data: { preload: false },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
