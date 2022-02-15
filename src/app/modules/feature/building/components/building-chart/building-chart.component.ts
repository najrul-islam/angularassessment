import { Component, OnInit } from '@angular/core';
import { ChartTheme, ILoadedEventArgs } from '@syncfusion/ej2-charts';
import { BuildingChartDropdownDto, IBuildingChartDropdownDto } from '../../models/building.model';
import { BuildingService } from '../../services/building.service';

@Component({
  selector: 'app-building-chart',
  templateUrl: './building-chart.component.html',
  styleUrls: ['./building-chart.component.scss']
})
export class BuildingChartComponent implements OnInit {
  public title: string = 'Timeseries Data';

  dropdownList: IBuildingChartDropdownDto = new BuildingChartDropdownDto();
  selectedDrodDown: { buildingId: number, objectId: number, dataFieldId: number, startDate: Date, endDate: Date } = {
    buildingId: 1,
    objectId: 1,
    dataFieldId: 1,
    startDate: new Date(),
    endDate: new Date(Date.now() + (3600 * 1000 * 24 * 30))
  };
  chartData = [];
  constructor(private _buildingService: BuildingService) { }

  ngOnInit() {
    this.dropdownList.buildings
    this.getDropdownList();
    // this.getReadings();
    this.getReadingsObj();
  }

  public dataValues: Object[] = [];
  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    valueType: 'DateTime',
    labelFormat: 'dd/MM/yyyy',
    intervalType: 'Hours',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 },
    title: 'Time'
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    labelFormat: '{value}',
    rangePadding: 'None',
    minimum: -10,
    maximum: 40,
    interval: 5,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    title: 'Value'
  };
  public chartArea: Object = {
    border: {
      width: 0
    }
  };
  public width: string = '100%';//Browser.isDevice ? '100%' : '60%';
  public legend: Object = { visible: false };
  public segments: Object[] = [
    {
      color: 'red'
    }];
  public tooltip: Object = {
    enable: true, shared: true
  };
  public load(args: ILoadedEventArgs): void {
    // custom code start
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    // custom code end
    args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
  };

  public onchangeBuildnig(data: any): void {
    console.log(data, this.selectedDrodDown);
  }
  public onClickSearch(): void {
    this.getReadingsObj();
  }
  public getDropdownList(): void {
    this._buildingService.getDropdownList().subscribe(res => {
      // console.log(res);
      this.dropdownList = res;
    });
  }
  public getReadings(): void {
    this._buildingService.getReadings(this.selectedDrodDown.buildingId, this.selectedDrodDown.objectId, this.selectedDrodDown.dataFieldId, this.selectedDrodDown.startDate, null).subscribe(res => {
      this.chartData = res;
    });
  }
  public getReadingsObj(): void {
    this._buildingService.getReadingsObj(this.selectedDrodDown).subscribe(res => {
      this.chartData = res;
    });
  }

  public onOpen(args: any): void {
    // this.selectedDrodDown.startDate = args?.model?.startValue;
    // this.selectedDrodDown.endDate = args?.model?.endValue;
  }

  public onSelect(args: any): void {
    //console.log(args);
    //this.selectedDrodDown.startDate = args?.model?.startValue;
    //this.selectedDrodDown.endDate = args?.model?.endValue;
  }

  public onChange(args: any): void {
    this.selectedDrodDown.startDate = args?.startDate;
    this.selectedDrodDown.endDate = args?.endDate;
  }
}
