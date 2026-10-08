export function generateSlug(owner: string, repo: string, subpath?: string): string {
  const cleanOwner = owner.toLowerCase().replace(/[^a-z0-9_-]/g, '-');
  const cleanRepo = repo.toLowerCase().replace(/[^a-z0-9_-]/g, '-');

  if (subpath && subpath !== '.' && subpath.trim() !== '') {
    const cleanSub = subpath
      .toLowerCase()
      .replace(/[/\\]+/g, '-')
      .replace(/[^a-z0-9_-]/g, '-');
    return `${cleanOwner}-${cleanRepo}-${cleanSub}`.replace(/-+/g, '-').replace(/^-|-$/g, '');
  }

  return `${cleanOwner}-${cleanRepo}`.replace(/-+/g, '-').replace(/^-|-$/g, '');
}
