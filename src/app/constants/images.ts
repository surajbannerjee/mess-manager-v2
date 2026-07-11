const image = (path: string): string => path;

export const IMAGES = {
  LOGO: image("/assets/images/logo.svg"),
  BACKGROUND1: image("/assets/images/bg1.webp"),

} as const;

export const VIDEOS = {
  SMOKE: image("/assets/videos/smoke_final.mp4"),
} as const;