import {Component, Input} from "@angular/core";
import {employee} from "../../Interface/employee.interface";

@Component(
  {
    selector: 'app-london',
    templateUrl:'./london.component.html'
  })
export class LondonComponent extends Component{
  ls: employee[] = [
    { id: 1, name: "RoBert bKing", place: "Team Lead"},
    { id: 2, name: "Michael bSuyama", place: "developer"},
    { id: 3, name: "Margaret bPeacock",  place: "developer"},
  ];
}
