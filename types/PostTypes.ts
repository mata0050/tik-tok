// id       String  @id @default(cuid())
// caption  String? @db.Text
// videoUrl String?
// privacy  Privacy
// User     User?   @relation(fields: [userId], references: [id])
// userId   String?

export type PostType = {
  id: string;
  caption: string;
  videoUrl: string;
  privacy: string;
  userId: string;
};
