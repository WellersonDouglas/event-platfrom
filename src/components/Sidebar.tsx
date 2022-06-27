import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";



export function Sidebar(){

  const { data } = useGetLessonsQuery();

  return(
    <aside className="w-[348px] bg-gray-700 border-l border-gray-600">
      <span className="font-bold text-2xl p-6 mb-6 border-b border-gray-500 inline-block ml-6">
        Cronogramas de aulas
      </span>

      <div className="flex flex-col gap-8 p-6">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id} 
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
      </div>    

    </aside>
  )
}