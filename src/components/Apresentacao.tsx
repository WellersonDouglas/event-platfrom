import { gql, useQuery } from '@apollo/client';
import '@vime/core/themes/default.css'
import { Link } from "react-router-dom";

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetVideoBySlug ($slug: String) {
    lesson(where: {slug: $slug}) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`

interface GetVideoBySlugResponse {
  lesson: {
    videoId: string;
  }
}

interface TestProps {
  videoSlug: string;
}

export function Apresentacao(props: TestProps) {
  const { data } = useQuery<GetVideoBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      lesson: props.videoSlug,
    }
  })

  return (
    <div className="flex-1 overflow-hidden bg-banner bg-no-repeat bg-cover bg-center">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-100 sm:text-6xl">
              Bem Vindo ao Ignite Lab
            </h1>
            <p className="mt-4 text-xl text-gray-100">
            Acelere sua evolução e acesse as melhores oportunidades da programação.
            </p>
          </div>
          <div>
            <div className="mt-10 flex">
              <Link to={`/event/lesson/${props.videoSlug}`} className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
               Clique aqui para começar... 
              </Link>
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
           </div>
           </div>
           </div>
           </div>
           </div>
           </div>
           </div>
           </div>
           </div>
  )
}