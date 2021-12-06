import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'test',
  template: `
  
  <nz-table #basicTable [nzData]="rows" nzBordered nzSize="middle" [nzScroll]="{ x: '1200px', y: '240px' }">
  <thead>
  <tr *ngFor="let header of headers">
    <ng-container *ngFor="let item of header?.items">
      <ng-container *ngIf="item?.rowSpan || item?.colSpan; else thTmpl">
        <th *ngIf="item?.rowSpan" [attr.rowspan]="item?.rowSpan">{{item?.name}}</th>
        <th *ngIf="item?.colSpan" [attr.colspan]="item?.colSpan">{{item?.name}}</th>
      </ng-container>
      <ng-template #thTmpl>
        <th>{{item?.name}}</th>
      </ng-template>
    </ng-container>
  </tr>
</thead>
      <tbody>
        <tr *ngFor="let data of basicTable.data">
        <ng-container *ngFor="let column of columns">
        <td>
          <span *ngIf="!column?.cellTemplate">{{ data[column.mappedId] }}</span>
          <ng-template
            #cellTemplate
            *ngIf="column?.cellTemplate"
            [ngTemplateOutlet]="column?.cellTemplate"
            [ngTemplateOutletContext]="{ data: data[column.mappedId], row: data }"
          >
          </ng-template>
        </td>
      </ng-container>
        </tr>
      </tbody>
    </nz-table>
  
  `,
})
export class TableComponent implements OnInit {
  ngOnInit(): void {
    console.log(this);
  }
  @Input() rows = [];
  @Input() columns = [];
  @Input() headers = [];
}
