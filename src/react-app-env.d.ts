/// <reference types="react-scripts" />

declare module '*.woff';
declare module '*.woff2';
declare module '*.otf';

declare module '*.mp4' {
  const src: string;
  export default src;
}


declare module '*.mov' {
  const src: string;
  export default src;
}
