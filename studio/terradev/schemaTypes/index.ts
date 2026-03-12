import { blockContent } from './blockContent';
import { post } from './post';
import { siteSettings } from './siteSettings';
import { homePage } from './homePage';
import { teamMember } from './teamMember';

export const schemaTypes = [
  // Shared / primitives
  blockContent,
  // Documents
  post,
  teamMember,
  // Singletons
  homePage,
  siteSettings,
];
