import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/feature/service/http.service';
import { MceTableConf } from 'src/app/shared/interface/byx-table.interface';

@Component({
  selector: 'app-byx-table',
  templateUrl: './byx-table.component.html',
  styleUrls: ['./byx-table.component.scss']
})
export class ByxTableComponent implements OnInit {

  @Input() tableConf!: MceTableConf;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    this.httpService.doGet({ ep: this.tableConf.ep }).subscribe((res: any) => { this.tableConf.data = JSON.parse(res) })
  }

  getValue(rowData: any, fieldPath: any) {
    if (rowData) {

      const fieldName = fieldPath
        .replace(/[\[\]']+/g, '.')
        .split('.')
        .filter((i: any) => i);
      const field = fieldName.reduce((acc: any, f: any) => acc?.[f], rowData)

      return field;
    } return ""
  }
}
