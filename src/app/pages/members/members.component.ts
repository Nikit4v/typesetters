import {Component} from '@angular/core';
import {MemberData, WorkStatus} from "../../interfaces/member-data";
import {MemberCardComponent} from "../../components/member-card/member-card.component";

const repeat = (arr: Array<any>, n: number) => [].concat(...Array(n).fill(arr));

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {
  members: MemberData[] = repeat([
    {
      name: "Diabl",
      works: [
        {
          ordinal: 1,
          name: null,
          status: WorkStatus.Done
        },
        {
          ordinal: 2,
          name: null,
          status: WorkStatus.Done
        },
        {
          ordinal: 3,
          name: null,
          status: WorkStatus.InProgress
        },
        {
          ordinal: 4,
          name: null,
          status: WorkStatus.Planned
        }
      ]
    },
    {
      name: "Neri",
      works: [
        {
          ordinal: 1,
          name: null,
          status: WorkStatus.Done
        },
        {
          ordinal: 2,
          name: null,
          status: WorkStatus.Done
        },
        {
          ordinal: 3,
          name: null,
          status: WorkStatus.InProgress
        },
        {
          ordinal: 4,
          name: null,
          status: WorkStatus.Planned
        }
      ]
    }
  ], 8);
}
