export interface Comment {
  id: string;
  content: string;
  createdAt: Date;

  ticketId: string;
  authorId: string;
}