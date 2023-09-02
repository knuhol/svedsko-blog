import { createTagMaps } from '@/app/tagSlugs'
import { Tags } from '@/components/Tags'

// TODO: Metadata
const TagsPage = async () => {
  const { tagToSlugMap, tagsWithPostsCountMap } = await createTagMaps()

  return <Tags tagToSlugMap={tagToSlugMap} tagsWithPostsCountMap={tagsWithPostsCountMap} />
}

export default TagsPage
