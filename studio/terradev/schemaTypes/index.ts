import { blockContent } from './blockContent';
import { post } from './post';
import { siteSettings } from './siteSettings';

export const schemaTypes = [
  // Shared / primitives
  blockContent,
  // Documents
  post,
  siteSettings,
];
