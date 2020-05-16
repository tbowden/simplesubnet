import { Component, OnInit } from '@angular/core';
import { IPv4 } from "ip-num/IPv4";

@Component({
  selector: 'app-netaddress',
  templateUrl: './netaddress.component.html',
  styleUrls: ['./netaddress.component.css']
})
export class NetaddressComponent implements OnInit {

  defaultAddress = new IPv4("192.168.0.0");
  bin_address = this.defaultAddress.toBinaryString();


  constructor() { }

  ngOnInit(): void {
  }

}
