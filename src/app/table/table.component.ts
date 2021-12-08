import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'test',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  @Input() rows = [];
  @Input() columns = [];
  @Input() headers = [];
  mode = 'date';
  demoValue = 3;
  formatterPercent = (value: number): string => `${value} %`;
  parserPercent = (value: string): string => value.replace(' %', '');
  formatterDollar = (value: number): string => `RM ${value}`;
  parserDollar = (value: string): string => value.replace('RM ', '');

  //select
  randomUserUrl = 'https://api.randomuser.me/?results=10';
  optionList: string[] = [];
  selectedUser = null;
  isLoading = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadMore();
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  getRandomNameList: Observable<string[]> = this.http
    .get(`${this.randomUserUrl}`)
    .pipe(
      catchError(() => of({ results: [] })),
      map((res: any) => res.results)
    )
    .pipe(map((list: any) => list.map((item: any) => `${item.name.first}`)));

  loadMore(): void {
    this.isLoading = true;
    this.getRandomNameList.subscribe((data) => {
      this.isLoading = false;
      this.optionList = [...this.optionList, ...data];
    });
  }
  //end select

  addRow(): void {
    this.rows = [
      ...this.rows,
      {
        id: `${this.rows.length + 1}`,
        name: `Edward King`,
        age: '32',
        address: `London, Park Lane no`,
      },
    ];
  }
}
