import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'test',
  template: `
  
  <nz-table #basicTable [nzData]="rows" nzBordered nzSize="middle" [nzScroll]="{ x: '1200px', y: '240px' }">
  <thead>
  <tr>
    <th rowspan="4" nzLeft [nzFilters]="filterName" [nzFilterFn]="nameFilterFn">Name</th>
    <th colspan="4">Other</th>
    <th colspan="2">Company</th>
    <th rowspan="4" nzRight>Gender</th>
  </tr>
  <tr>
    <th rowspan="3" [nzSortFn]="sortAgeFn">Age</th>
    <th colspan="3">Address</th>
    <th rowspan="3">Company Address</th>
    <th rowspan="3">Company Name</th>
  </tr>
  <tr>
    <th rowspan="2">Street</th>
    <th colspan="2">Block</th>
  </tr>
  <tr>
    <th>Building</th>
    <th>Door No.</th>
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
}
