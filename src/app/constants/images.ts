const image = (path: string): string => path;

export const IMAGES = {
  LOGO: image("/assets/images/logo.svg"),
  BACKGROUND: image("/assets/images/bg1.webp"),
  // newBackgroundImages 
  BACKGROUND1: image("/assets/images/bg1.jpg"),
  BACKGROUND2: image("/assets/images/bg2.jpg"),
  BACKGROUND3: image("/assets/images/bg3.jpg"),
  BACKGROUND4: image("/assets/images/bg4.jpg"),
  BACKGROUND5: image("/assets/images/bg5.jpg"),
  BACKGROUND6: image("/assets/images/bg6.jpg"),
  BACKGROUND7: image("/assets/images/bg7.jpg"),
  BACKGROUND8: image("/assets/images/bg8.jpg"),
  BACKGROUND9: image("/assets/images/bg9.jpg"),
  BACKGROUND10: image("/assets/images/bg10.jpg"),
  BACKGROUND11: image("/assets/images/bg11.jpg"),
  BACKGROUND12: image("/assets/images/bg12.jpg"),
  GOOGLE: image("/assets/images/google.svg"),
  AVATAR: image("/assets/images/avatar.png"),
} as const;

export const VIDEOS = {
  SMOKE: image("/assets/videos/smoke_final.mp4"),
} as const;