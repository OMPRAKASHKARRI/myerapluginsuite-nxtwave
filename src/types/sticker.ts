export interface Sticker {
  id: string;
  emoji: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface StickerTemplate {
  emoji: string;
  label: string;
}