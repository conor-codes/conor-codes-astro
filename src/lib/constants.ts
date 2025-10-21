import type { z } from 'astro/zod';
import MetaDefaultImage from '@/assets/images/terminal.jpg';
import avatar from '@/assets/images/head.jpg';
import type { seoSchemaWithoutImage } from '@/content.config';
import astroConfig from 'astro.config.mjs';

export type AuthorInfo = {
  name: string;
  avatar: any;
  headline: string;
  username?: string;
  location?: string;
  pronouns?: string;
}

export type Seo = z.infer<typeof seoSchemaWithoutImage> & {
  image?: any;
}

type DefaultConfigurationType = {
  baseUrl: string,
  author: AuthorInfo;
  seo: Seo;
}

export const DEFAULT_CONFIGURATION: DefaultConfigurationType = {
  baseUrl: astroConfig.site || 'https://conor.codes',
  author: {
    avatar,
    name: 'Conor Murphy',
    headline: '.NET developer specializing in mobile apps',
    username: 'conorcodes',
    location: 'England',
  },
  seo: {
    title: 'ConorCodes portfoio',
    description: 'Mobile developer portfolio',
    type: 'website',
    image: MetaDefaultImage,
    robots: 'noindex, nofollow',
  }
};