import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  ngOnInit(): void {
    console.log(this);
  }
  @Input() rows = [];
  @Input() columns = [];
  @Input() headers = [];
  mode = 'date';

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
