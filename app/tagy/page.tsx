import { createTagMaps } from '@/app/tagSlugs'
import { Tags } from '@/components/Tags'

// TODO: Metadata
const TagsPage = async () => {
  const { tagsWithPostsCountMap } = await createTagMaps()

  return <Tags tagsWithPostsCountMap={tagsWithPostsCountMap} />
}

export default TagsPage
