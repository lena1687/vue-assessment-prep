import { type DataItem } from '../components/ui/DataTable.vue';

export interface User extends DataItem {
  id: number;
  name: string;
  username: string;
  email: string;
}
