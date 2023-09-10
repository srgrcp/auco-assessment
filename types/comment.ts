import { Named } from './named';

export interface Comment extends Named {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}
