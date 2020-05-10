import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-detail-statemnt',
  templateUrl: './detail-statemnt.component.html',
  styleUrls: ['./detail-statemnt.component.css']
})
export class DetailStatemntComponent implements OnInit {
  detailSatementForm: FormGroup;
  showTable = false;
  fileName = 'statement.xlsx';
  userTranscationDetails = [
    {
      transactionId: 2653635,
      transactiontime: new Date(),
      transtype: 'atm',
      credit: 82783,
      balance: 989754,
      chequeNumber: "2736DFg"
    },
    {
      transactionId: 7363736,
      transactiontime: new Date(),
      transtype: 'card',
      credit: 5363,
      balance: 149754,
      chequeNumber: "6256Tty"
    },
    {
      transactionId: 4543,
      transactiontime: new Date(),
      transtype: 'atm',
      credit: 7265,
      balance: 1469897,
      chequeNumber: "6256TYu"
    },
  ]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.detailSatementForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],


    })

  }
  onSubmit(selectedDates: FormGroup) {
    this.showTable = true;

    console.log("on submit click")

  }

  exportStatemntToexcel() {

    let element = document.getElementById('detail-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);

  }

}
