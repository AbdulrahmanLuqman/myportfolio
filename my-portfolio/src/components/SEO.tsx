import { type FC } from 'react';
import useSEO, { type SEOProps } from '@/lib/useSeo';

const SEO: FC<SEOProps> = (props) => {
  useSEO(props);
  return null;
};

export default SEO;