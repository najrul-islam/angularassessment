import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingRoutingModule } from './building-routing.module';
import { BuildingComponent } from './building.component';
import { ChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatePickerModule, DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DateTimePickerModule } from "@syncfusion/ej2-angular-calendars";
import { DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { SharedModule } from '../../shared/shared.module';
import { BuildingChartComponent } from './components/building-chart/building-chart.component';


@NgModule({
  declarations: [
    BuildingComponent,
    BuildingChartComponent
  ],
  imports: [
    CommonModule,
    BuildingRoutingModule,
    ChartAllModule,
    RangeNavigatorAllModule,
    TextBoxModule,
    FormsModule,
    ReactiveFormsModule,
    DropDownListModule,
    ButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    DateRangePickerModule,
    DateTimePickerModule,
    DatePickerModule,
    DateTimePickerAllModule,
    SharedModule
  ],
  exports: [
    DatePickerModule
  ],
})
export class BuildingModule { }
