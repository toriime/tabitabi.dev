export const getClientSideURL = () => {
  if (!!(typeof window !== 'undefined' && window.document && window.document.createElement)) {
    const protocol = window.location.protocol
    const domain = window.location.hostname
    const port = window.location.port

    return `${protocol}//${domain}${port ? `:${port}` : ''}`
  }

  return process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
}

export const generateDraftPreviewURL = (slug: string, collection: string) => {
  const serverURL = getClientSideURL();
  const draftSecret = process.env.DRAFT_SECRET;

  return `${serverURL}/api/draft?secret=${draftSecret}&slug=${slug}&collection=${collection}`;
}