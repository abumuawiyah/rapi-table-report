import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'nz-demo-table-basic',
  template: `
  <div>
    <test
    [rows]="rows"
    [columns]="columns">
    </test>

    <ng-template #nameTmpl let-data="data" let-row="row">
      <div>
        {{data}}
      </div>
    </ng-template>
    <ng-template #ageTmpl let-data="data" let-row="row">
      <div>
        {{data}}
      </div>
    </ng-template>
    <ng-template #addressTmpl let-data="data" let-row="row">
      <div>
        {{data}}
      </div>
    </ng-template>
</div>

  `,
})
export class NzDemoTableBasicComponent implements OnInit {
  @ViewChild('nameTmpl', { static: true }) nameTmpl!: TemplateRef<any>;
  @ViewChild('ageTmpl', { static: true }) ageTmpl!: TemplateRef<any>;
  @ViewChild('addressTmpl', { static: true }) addressTmpl!: TemplateRef<any>;
  columns: any[] = [];
  rows: Person[] = [];
  headers: any[] = [];

  ngOnInit(): void {
    const data: any[] = [];
    for (let i = 0; i < 20000; i++) {
      data.push({
        key: i,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      });
    }
    this.rows = data;
    this.headers = [{}];
    this.columns = [
      {
        name: 'Name',
        cellTemplate: this.nameTmpl,
        mappedId: 'name',
        filterId: 'name',
        width: '150px',
        ellipsis: true,
        customFilter: true,
        mandatory: true,
      },
      {
        name: 'Age',
        cellTemplate: this.ageTmpl,
        mappedId: 'age',
        filterId: 'age',
        width: '150px',
        ellipsis: true,
        customFilter: true,
        mandatory: true,
      },
      {
        name: 'Address',
        cellTemplate: this.addressTmpl,
        mappedId: 'address',
        filterId: 'address',
        width: '150px',
        ellipsis: true,
        customFilter: true,
        mandatory: true,
      },
      {
        name: 'Address',
        cellTemplate: this.addressTmpl,
        mappedId: 'address',
        filterId: 'address',
        width: '150px',
        ellipsis: true,
        customFilter: true,
        mandatory: true,
      },
      {
        name: 'Address',
        cellTemplate: this.addressTmpl,
        mappedId: 'address',
        filterId: 'address',
        width: '150px',
        ellipsis: true,
        customFilter: true,
        mandatory: true,
      },
      {
        name: 'Address',
        cellTemplate: this.addressTmpl,
        mappedId: 'address',
        filterId: 'address',
        width: '150px',
        ellipsis: true,
        customFilter: true,
        mandatory: true,
      },
      {
        name: 'Address',
        cellTemplate: this.addressTmpl,
        mappedId: 'address',
        filterId: 'address',
        width: '150px',
        ellipsis: true,
        customFilter: true,
        mandatory: true,
      },
      {
        name: 'Address',
        cellTemplate: this.addressTmpl,
        mappedId: 'address',
        filterId: 'address',
        width: '150px',
        ellipsis: true,
        customFilter: true,
        mandatory: true,
      },
    ];
  }
}
