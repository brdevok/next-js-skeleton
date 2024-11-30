export type CspDirective =
  | 'child-src'
  | 'connect-src'
  | 'default-src'
  | 'font-src'
  | 'frame-src'
  | 'img-src'
  | 'manifest-src'
  | 'media-src'
  | 'object-src'
  | 'prefetch-src'
  | 'script-src'
  | 'style-src'
  | 'worker-src'
  | 'base-uri'
  | 'sandbox'
  | 'form-action'
  | 'frame-ancestors'
  | 'navigate-to'
  | 'report-uri'
  | 'report-to'
  | 'block-all-mixed-content'
  | 'referrer'
  | 'require-sri-for'
  | 'trusted-types'
  | 'upgrade-insecure-requests';

export type CspConfig = Partial<Record<CspDirective, string>>;