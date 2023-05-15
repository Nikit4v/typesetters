import {Component, Input} from '@angular/core';
import {MemberData} from "../../interfaces/member-data";

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent {
  // @ts-ignore
  @Input data: MemberData
}
