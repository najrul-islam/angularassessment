

export interface IBuilding {
    id: number;
    name: string;
    location: string;
}

export interface IDataField {
    id: number;
    name: string;
}

export interface IObject {
    id: number;
    name: string;
}

export interface IReading {
    id: number;
    buildingId: number;
    objectId: number;
    dataFieldId: number;
    value: number;
    timestamp: string;
}

export interface IReading {
    id: number;
    buildingId: number;
    objectId: number;
    dataFieldId: number;
    value: number;
    timestamp: string;
}


export interface IBuildingChartDropdownDto {
    buildings: IBuilding[];
    objects: IObject[];
    dataFields: IDataField[];
}

export class BuildingChartDropdownDto {
    buildings: IBuilding[];
    objects: IObject[];
    dataFields: IDataField[];
}