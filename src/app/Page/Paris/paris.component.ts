import {Component, Input} from "@angular/core";
import {employee} from "../../Interface/employee.interface";

@Component(
  {
    selector: 'app-paris',
    templateUrl:'./paris.component.html'
  })
export class ParisComponent extends Component{
  ls: employee[] = [
    { id: 1, name: "RoBert King", place: "Team Lead"},
    { id: 2, name: "Michael Suyama", place: "developer"},
    { id: 3, name: "Margaret Peacock",  place: "developer"},
  ];
}
