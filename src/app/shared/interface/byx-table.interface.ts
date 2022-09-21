import { TemplateRef } from "@angular/core";

export interface MceTableConf {
  id: string;
  ep: string;
  columns: ByxTableColumn[];
  data: any[];
  rowDbClick?: (table: any, row: any) => void;
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
  ENUM,
  CUSTOM
}
