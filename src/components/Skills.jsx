import React from 'react'
import WorkCards from './WorkCards'

const Skills = () => {
  return (
    <>
    <header className="border-y border-black bg-[#fafafa]">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 font-serif">
          <div className="text-2xl font-bold underline underline-offset-[6px]">
            skills
          </div>

          <div className="text-lg font-light">
                in order of proficiency / relevance
            </div>  
        </nav>
    </header>
    <div className="py-30 space-y-15 ">
  {[
    {
        title: "Languages",
        items: [
          "Java", "Kotlin", "C++", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"
        ]
      },
      {
        title: "Frameworks & Libraries",
        items: [
          "React", "Next.js", "Express", "Node.js", "Tailwind CSS", "Vite", "Jetpack Compose", "Spring Boot"
        ]
      },
      {
        title: "Tools & Platforms",
        items: [
          "Android Studio", "Postman", "Git", "GitHub", "VS Code",
        ]
      },
      {
        title: "Databases",
        items: [
          "PostgreSQL", "MongoDB", "Room DB", "Firebase"
        ]
      },
      
      
  ].map((section) => (
    <div key={section.title} className="flex gap-50 items-center w-screen justify-center">
      <h2 className="text-xl font-semibold w-32 shrink-0">{section.title}</h2>
      <div className="flex flex-wrap gap-3 w-150 justify-center">
        {section.items.map((item) => (
          <div
            key={item}
            className="border border-black px-3 py-1 font-medium"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
<hr className='py-5 bg-[#fafafa]' />
<div className='bg-[#fafafa]'>
<div className='w-screen flex justify-center'>
    <h2 className='text-3xl font-bold underline underline-offset-4'>My Github Stats</h2>
</div>
<div className='w-screen flex justify-center py-15'>
          <div className='flex flex-wrap w-300 justify-center gap-10'>
            <img
              src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=shreyashsri79&theme=swift"
              alt="GitHub Stats"
              className="rounded-lg shadow-lg"
            />
            <img
              src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=shreyashsri79&theme=swift"
              alt="GitHub Stats"
              className="rounded-lg shadow-lg"
            />
            <img
              src="http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=shreyashsri79&theme=swift&utcOffset=8"
              alt="GitHub Stats"
              className="rounded-lg shadow-lg"
            />
            <img
              src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=shreyashsri79&theme=swift"
              alt="GitHub Stats"
              className="rounded-lg shadow-lg"
            />
            <img
            src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=shreyashsri79&theme=swift"
            alt="GitHub Stats"
            className="rounded-lg shadow-lg"
          />

          </div>
</div>
</div>
    </>
  )
}

export default Skills