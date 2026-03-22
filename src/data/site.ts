export const site = {
  hub: 'ai-lab',
  name: '安静 · AI Lab',
  tagline: '大模型应用实战',
  assetBase: '/assets/hubs',
  contentBase: 'src/content/hubs',
};

export function assetUrl(path: string): string {
  return `${site.assetBase}/${site.hub}/${path}`;
}

export function contentPath(path: string): string {
  return `${site.contentBase}/${site.hub}/${path}`;
}
