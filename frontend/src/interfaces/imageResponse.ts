export interface Image {
  ID: number;
  image_url: string;
  uploaded_at: string;
}

export interface ImageApiResponse {
  success: boolean;
  message: string;
  data: Image[];
}
