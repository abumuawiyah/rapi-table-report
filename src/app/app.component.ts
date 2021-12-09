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
    [columns]="columns"
    [headers]="headers">
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
        name: 'John Brown test hshshhshshshshshshsh hshshshshshshshs',
        age: 32,
        address: 'New York No. 1 Lake Park',
      });
    }
    this.rows = data;
    /**
     *  <tr>
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
     */
    this.headers = [
      {
        items: [
          {
            rowSpan: 4,
            name: 'Tarikh',
            direction: 'left',
            width: '300px',
          },
          {
            colSpan: 4,
            name: 'Other',
            width: '200px',
          },
          {
            colSpan: 2,
            name: 'Company',
          },
          {
            rowSpan: 4,
            name: 'Gender',
            direction: 'right',
          },
        ],
      },
      {
        items: [
          {
            rowSpan: 3,
            name: 'Age',
            width: '200px',
          },
          {
            colSpan: 3,
            name: 'Address',
            width: '200px',
          },
          {
            rowSpan: 3,
            name: 'Company Address',
            width: '200px',
          },
          {
            rowSpan: 3,
            name: 'Company Name',
            width: '200px',
          },
        ],
      },
      {
        items: [
          {
            rowSpan: 2,
            name: 'Street',
          },
          {
            colSpan: 2,
            name: 'Block',
          },
        ],
      },
      {
        items: [
          {
            name: 'Building',
          },
          {
            name: 'Door No.',
          },
        ],
      },
    ];
    this.columns = [
      {
        name: 'Tarikh',
        uiType: 'date',
        mappedId: 'name',
        filterId: 'name',
        ellipsis: true,
        customFilter: true,
        mandatory: true,
      },
      {
        name: 'Senarai',
        uiType: 'select',
        mappedId: 'list',
        filterId: 'list',
        width: '200px',
        ellipsis: true,
        customFilter: true,
        mandatory: true,
      },
      {
        name: 'Address',
        // cellTemplate: this.addressTmpl,
        uiType: 'number',
        mappedId: 'address',
        filterId: 'address',
        width: '300px',
        ellipsis: true,
        customFilter: true,
        mandatory: true,
      },
      {
        name: 'Address',
        // cellTemplate: this.addressTmpl,
        uiType: 'percentage',
        mappedId: 'address',
        filterId: 'address',
        width: '300px',
        ellipsis: true,
        customFilter: true,
        mandatory: true,
      },
      {
        name: 'Address',
        // cellTemplate: this.addressTmpl,
        uiType: 'money',
        mappedId: 'address',
        filterId: 'address',
        width: '300px',
        ellipsis: true,
        customFilter: true,
        mandatory: true,
      },
      {
        name: 'Address',
        // cellTemplate: this.addressTmpl,
        uiType: 'text',
        mappedId: 'address',
        filterId: 'address',
        width: '300px',
        ellipsis: true,
        customFilter: true,
        mandatory: true,
      },
      {
        name: 'Address',
        uiType: 'icon',
        mappedId: 'address',
        filterId: 'address',
        width: '300px',
        ellipsis: true,
        customFilter: true,
        mandatory: true,
      },
      {
        name: 'Address',
        uiType: 'icon',
        mappedId: 'address',
        filterId: 'address',
        width: '300px',
        ellipsis: true,
        customFilter: true,
        mandatory: true,
      },
    ];
  }
}
