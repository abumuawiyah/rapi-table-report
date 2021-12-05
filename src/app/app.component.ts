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
  [rows]="rows2"
  [columns]="columns"
></test>

<ng-template #statusTmpl let-data="data" let-row="row">
  <div>
    {{data}} {{row?.key}}
  </div>
</ng-template>
<ng-template #targetTmpl let-data="data">
  <div>
    {{ data.nickName }}
  </div>
</ng-template>
<ng-template #fromTmpl let-data="data">
  <div>
    {{ data.value }}
  </div>
</ng-template>
<ng-template #toTmpl let-data="data">
  <div>
    {{ data.value }}
  </div>
</ng-template>
<ng-template #connectedTmpl let-data="data">
  <div>
    {{ data.value }}
  </div>
</ng-template>
<ng-template #dateTmpl let-data="data">
  <div>
    {{ data | date: 'dd/MM/yyyy hh:mm:ss a' }}
  </div>
</ng-template>
<ng-template #durationTmpl let-data="data">
  <div>
    {{ data | date: 'HH:mm:ss' }}
  </div>
</ng-template>
</div>

  `,
})
export class NzDemoTableBasicComponent implements OnInit {
  @ViewChild('statusTmpl', { static: true }) statusTmpl!: TemplateRef<any>;
  @ViewChild('targetTmpl', { static: true }) targetTmpl!: TemplateRef<any>;
  @ViewChild('fromTmpl', { static: true }) fromTmpl!: TemplateRef<any>;
  @ViewChild('toTmpl', { static: true }) toTmpl!: TemplateRef<any>;
  @ViewChild('connectedTmpl', { static: true })
  connectedTmpl!: TemplateRef<any>;
  @ViewChild('dateTmpl', { static: true }) dateTmpl!: TemplateRef<any>;
  @ViewChild('durationTmpl', { static: true }) durationTmpl!: TemplateRef<any>;
  rows: any[] = [];
  rows2: any[] = [];
  columns: any[] = [];
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

  ngOnInit(): void {
    const data: any[] = [];
    for (let i = 0; i < 20000; i++) {
      data.push({
        advancedFeatureType: [],
        automaticallyExported: false,
        cancelledCall: false,
        caseReference: null,
        cfwpp: false,
        cin: '',
        copyOfsessionIds: [],
        duration: 0,
        exchangeId: '',
        exported: false,
        forwardedIdentities: [],
        fromIdentity: {
          id: 2678,
          identityDirection: 'SOURCE',
          identityId: 2678,
          identityMarkedType: 'MARKED',
          identityType: 'PHONENUMBER',
          insertDate: '2020-11-16T19:50:01.512+0000',
          involvedIdentityId: 9335339,
          javaObjectId: '71366238-a80f-4cca-ab17-3a71af3ea05e',
          location: null,
          sessionEventId: 8316696,
          sipIdentity: false,
          value: '880721031234',
        },
        id: i,
        imeiIdentity: {
          id: 2675,
          identityDirection: 'UNDEFINED',
          identityId: 2675,
          identityMarkedType: 'MARKED',
          identityType: 'IMEI',
          insertDate: '2020-11-16T19:50:01.512+0000',
          involvedIdentityId: 9335336,
          javaObjectId: '2129c064-b763-401f-b094-97f90a1807c1',
          location: null,
          sessionEventId: 8316696,
          sipIdentity: false,
          value: '35394601185335',
        },
        imported: false,
        imsiIdentity: {
          id: 2677,
          identityDirection: 'UNDEFINED',
          identityId: 2677,
          identityMarkedType: 'MARKED',
          identityType: 'IMSI',
          insertDate: '2020-11-16T19:50:01.512+0000',
          involvedIdentityId: 9335338,
          javaObjectId: '7aa0083e-8368-4ef4-9ccd-256227139366',
          location: null,
          sessionEventId: 8316696,
          sipIdentity: false,
          value: '262021030000051',
        },
        index: i,
        involvedCases: null,
        javaObjectId: '195d16e3-d79a-4ac5-b9f7-b34e1eee8a2f',
        locked: false,
        marked_for_deletion: null,
        networkId: 28259044237274990,
        operatorNote: null,
        partiallyTranscoded: false,
        propertyChangeListeners: [],
        provider: '3gpp',
        quickInfo: 'checking',
        sessionProgressStatus: 'UNDEFINED',
        sessionTypes: [23],
        startDate: `2020-11-16T19:50:01.512+0000`,
        targetReference: {
          id: 546,
          javaObjectId: 'e260a33a-7177-4307-a910-2fe75b9564fd',
          name: 'Pablo Escobar',
          nickName: 'Pablo Escobar',
        },
        toIdentity: {
          id: 2676,
          identityDirection: 'DESTINATION',
          identityId: 2676,
          identityMarkedType: 'NOTMARKED',
          identityType: 'PHONENUMBER',
          insertDate: '2020-11-16T19:50:01.512+0000',
          involvedIdentityId: 9335337,
          javaObjectId: 'fa235a27-41c2-4c4d-9b9f-4ac93226a695',
          location: null,
          sessionEventId: 8316696,
          sipIdentity: false,
          value: '+880721035678',
        },
        touched: true,
        triggerReference: {
          correlationCriterium: '17112020155224',
          correlationType: 'ETSI',
          id: 8785,
          javaObjectId: '71aef4cc-6597-476d-8fde-3a3e6ccf04e8',
          name: null,
        },
      });
    }
    this.rows = data;
    this.rows2 = [data[0]];
    this.columns = [
      {
        name: 'Status',
        cellTemplate: this.statusTmpl,
        mappedId: 'name',
        filterId: 'name',
        width: '150px',
        ellipsis: true,
        customFilter: true,
        mandatory: true,
      },
    ];
  }
}
