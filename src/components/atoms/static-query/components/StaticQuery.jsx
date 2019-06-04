import { useStaticQuery } from 'gatsby';

export const StaticQuery = ({ children, query }) =>
  query ? children(useStaticQuery(query)) : null;
