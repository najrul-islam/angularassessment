import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpClientService } from 'src/app/services/custom-http-client.service';
import { IBuildingChartDropdownDto } from '../models/building.model';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor(private _customHttpClient: CustomHttpClientService) {

  }

  getBuildingData(): Observable<any> {
    const url = `Building`;
    return this._customHttpClient.get(url);
  }
  getDropdownList(): Observable<IBuildingChartDropdownDto> {
    const url = `Building/GetDropdownList`;
    return this._customHttpClient.getT<IBuildingChartDropdownDto>(url);
  }
  getReadings(buildingId: number, objectId: number, dataFieldId: number, startDate: Date, endDate: Date): Observable<any> {
    const url = `Building/GetReadings/${buildingId}/${objectId}/${dataFieldId}/${startDate}/${endDate}`;
    return this._customHttpClient.get(url);
  }
  getReadingsObj(param: any): Observable<any> {
    const url = `Building/GetReadingsObj`;
    return this._customHttpClient.post(url, param);
  }
}
