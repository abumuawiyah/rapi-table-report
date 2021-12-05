import { Component, Input, OnInit } from '@angular/core';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'test',
  template: `
  
  <nz-table #basicTable [nzData]="listOfData">
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
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
}
