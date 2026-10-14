/// <reference types="astro/client" />

declare module '*.css' {
  const stylesheet: string;
  export default stylesheet;
}

declare namespace App {
  interface Locals {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}