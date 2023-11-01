import Card from '@/components/card'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import postManager from '@/lib/post';

export default function BlogFrontPage() {
    return (
        <MaxWidthWrapper>
            <div className="max-w-[1300px] flex flex-col w-full py-8">
                <div className="flex flex-col bottom-border-gradient mb-8">
                    <div className="flex w-full justify-center text-4xl pb-4 whitespace-nowrap">
                        Blog TabiTabi
                    </div>
                    <div className="flex w-full justify-center text-slate-300/80 text-lg pb-4 text-center">
                        Tutaj znajdziesz wszystkie posty związane z naszymi projektami.
                    </div>
                </div>

                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4'>
                    {postManager.posts.map((post, index) => (
                        <Card key={index} 
                        authors={post.authors} 
                        date={new Date(post.date)} 
                        image={post.image!}
                        link={`/blog/${post.slug}`}
                        tags={post.tags}
                        title={post.title} />
                    ))}
                </div>
            </div>
        </MaxWidthWrapper>
    )
}