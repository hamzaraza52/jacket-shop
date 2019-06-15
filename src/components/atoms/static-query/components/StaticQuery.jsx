import { useStaticQuery } from 'gatsby';

export const StaticQuery = ({ children, query }) =>
  children(useStaticQuery(query)) || null;
