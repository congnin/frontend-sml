export class CreateCommentDto {
  commentatorId: number;
  commentReceiverId: number;
  commentDate: Date;
  content: string;
  projectId: number;
  isDeleted: boolean;
}
