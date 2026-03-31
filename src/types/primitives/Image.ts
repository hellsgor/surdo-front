export interface ImageRaw {
  desktop: { url: string } | null;
  mobile: { url: string } | null;
  alt: string | null;
}

export interface Image {
  desktop: string | null;
  mobile: string | null;
  alt: string | null;
}
