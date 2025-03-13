import { UserComponent } from "@craftjs/core";
export interface TypeComponent {
  name: string;
  icon: string;
  isCanvas?: boolean;
  Component: UserComponent;
  setting?: {
    props: object;
    related: object;
    [v:string]: never | object;
  }
}
