import SmallPicture from './SmallPicture'

function NewItem({ item }: { item: NewsArticle }) {

  const { author, content, publishedAt, title, urlToImage } = item
  return (
    <div className="border border-gray-200 p-6 rounded-lg flex flex-col gap-4">
      <SmallPicture url={urlToImage} />
      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{title}</h2>
      <p className="leading-relaxed text-base">{content}</p>
      <p className='italic flex gap-3'><span className='text-orange-700'>{author}</span>{publishedAt}</p>
    </div>
  )
}

export default NewItem