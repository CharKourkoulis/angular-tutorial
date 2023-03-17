export interface Album {
 id: number;
 artist: string;
 title: string;
 tags?: string;
 imageUrl: string;
 rating:number;
}

export const emptyAlbum: Album = {
  id: 0,
  artist: "",
  title: "",
  imageUrl: "",
  rating: 0
}
