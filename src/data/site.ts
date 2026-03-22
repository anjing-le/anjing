export const site = {
  hub: 'cs',
  name: '安静 · 计算机',
  tagline: '基础 · 工程 · AI',
  assetBase: '/assets/hubs',
  contentBase: 'src/content/hubs',
};

export function assetUrl(path: string): string {
  return `${site.assetBase}/${site.hub}/${path}`;
}

export function contentPath(path: string): string {
  return `${site.contentBase}/${site.hub}/${path}`;
}
