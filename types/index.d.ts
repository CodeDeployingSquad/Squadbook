declare module "notes-app-types" {
  export interface Note {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  }

  export interface Folder {
    id: string;
    name: string;
  }

  export const folders: Folder[];

  export const notes: { [folderId: string]: Note[] };
}
