import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'test',
  template: `
  
  <nz-table #basicTable [nzData]="rows">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Action</th>
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
