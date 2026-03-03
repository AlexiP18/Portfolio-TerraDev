// ─── Tipos TypeScript para los schemas de Sanity ─────────────────────────────

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

export interface SanityImage {
  _type: 'image';
  asset: { _ref: string; _type: 'reference' };
  alt?: string;
}

export interface SanityBlock {
  _type: 'block';
  _key: string;
  style: string;
  children: Array<{
    _type: 'span';
    _key: string;
    text: string;
    marks: string[];
  }>;
  markDefs: Array<{ _key: string; _type: string; href?: string }>;
}

/** Schema: post */
export interface Post {
  _id: string;
  _type: 'post';
  title: string;
  slug: SanitySlug;
  mainImage?: SanityImage;
  categories?: string[];
  publishedAt?: string;
  body?: SanityBlock[];
  /** Campo virtual calculado en la query GROQ */
  excerpt?: string;
}

/** Schema: siteSettings (Singleton) */
export interface SiteSettings {
  _id: string;
  _type: 'siteSettings';
  siteTitle?: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  contactEmail?: string;
  socialLinks?: SocialLink[];
}

export interface SocialLink {
  _key: string;
  platform: 'github' | 'linkedin' | 'x' | 'instagram' | 'youtube';
  url: string;
  label?: string;
}
