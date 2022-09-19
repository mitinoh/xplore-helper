import { TemplateRef } from "@angular/core";

export interface MceTableConf {
  id: string;
  streamUrl?: string;
  data?: any[];
  columns: []
}

export interface ByxTableColumn {
  field: string;
  type: ByxDataTypeEnum;
  header?: string;
  class?: string;
  rule?: (row: any) => {};
  filterMatchMode?: string;                         //matchmode per il filtro (utile per il filtro della businessKey MCM/POF/2022/xxxx/y)
  template?: TemplateRef<any>;
}

export enum ByxDataTypeEnum {
  STRING,
  NUMBER,
  DATE,
  BUTTON,
  BOOLEAN,
  ENUM,   //genera una lista di ENUM una volta finito la complete
  CUSTOM  //VUOLE UN TEMPLATEREF
}

/*

 *ngVar="mceTableService.getValue(row, col.field) as fieldName"





 getValue(rowData: any, fieldPath: any) {
    if (rowData) {

      const fieldName = fieldPath
      .replace(/[\[\]']+/g,'.')
      .split('.')
			.filter((i: any) => i);
      const field = fieldName.reduce((acc: any, f: any) => acc?.[f], rowData)
      
      return field;
    } return ""
	}


*/