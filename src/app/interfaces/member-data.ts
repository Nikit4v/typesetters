export enum WorkStatus {
  Planned,
  InProgress,
  Done
}


export interface MemberWork {
  ep_ordinal: number;
  ep_name: string | null;
  rel_name: string
  status: WorkStatus
}


export interface MemberData {
  name: string
  works: MemberWork[]
}
