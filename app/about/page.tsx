import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Github, Linkedin } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="https://picsum.photos/seed/chi-tran/200/200"
            alt="Chi Tran"
            width={200}
            height={200}
            className="rounded-full mb-4"
          />
          <h1 className="text-3xl font-bold text-pink-800 dark:text-pink-300">Chi Tran</h1>
          <p className="text-lg text-pink-600 dark:text-pink-400">Junior Software Engineer</p>
          <p className="text-md text-pink-500 dark:text-pink-500">Berlin, Germany</p>
        </div>
        <div className="prose prose-pink dark:prose-invert max-w-none mb-6">
          <p>
            I'm a software engineer with expertise in frontend and backend development, 
            specializing in TypeScript, Angular, React, Kotlin, and Java Spring Boot. I 
            focus on building scalable, user-centric solutions and thrive in environments that 
            drive innovation.
          </p>
          <p>
            With experience in microservices architecture, I'm committed to creating high-
            performance systems that enhance user experiences and support digital 
            transformation.
          </p>
          <h2 className="text-2xl font-semibold text-pink-800 dark:text-pink-300 mt-6 mb-3">Experience</h2>
          <ul>
            <li>
              <strong>Junior Software Engineer</strong> at Mobilize Financial Services (Sep 2023 - Present)
              <ul>
                <li>Maintaining and developing legacy and modern applications</li>
                <li>Working with Angular, Java Apache Wicket, and Kotlin Spring Boot</li>
                <li>Implementing microservices architecture in banking systems</li>
              </ul>
            </li>
            <li>
              <strong>Junior Frontend Engineer</strong> at heycar Group (Jan 2022 - Sep 2023)
              <ul>
                <li>Developed white-label and blue-label apps using Nx monorepo approach</li>
                <li>Integrated with partners such as Spiegel, FAZ, N-TV</li>
              </ul>
            </li>
            <li>
              <strong>Intern Frontend Engineer</strong> at heycar Group (Aug 2021 - Dec 2021)
              <ul>
                <li>Used Contentful CMS for campaign delivery</li>
                <li>Integrated GAM (Google Ad Manager) for ad management</li>
              </ul>
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-pink-800 dark:text-pink-300 mt-6 mb-3">Skills</h2>
          <ul className="flex flex-wrap gap-2">
            {['JavaScript', 'TypeScript', 'Java', 'Kotlin', 'React.js', 'Angular', 'Spring Boot', 'Node.js', 'Redux.js', 'Cypress', 'Jest', 'PostgreSQL', 'MongoDB', 'AWS'].map((skill) => (
              <li key={skill} className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-3 py-1 rounded-full text-sm">
                {skill}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold text-pink-800 dark:text-pink-300 mt-6 mb-3">Education</h2>
          <ul>
            <li><strong>Certificate, Web Development</strong> - DCI Digital Career Institute (Jul 2020 - Nov 2021)</li>
            <li><strong>Master's degree, Marketing</strong> - INSEEC Grande Ecole (Jan 2010 - Dec 2012)</li>
            <li><strong>Bachelor's degree, Chinese Language and Literature</strong> - Hanoi University (Jan 2006 - Dec 2010)</li>
          </ul>
        </div>
        <div className="flex justify-center space-x-4">
          <Button asChild variant="outline">
            <a href="https://github.com/chitran13" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://linkedin.com/in/chitran-de" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

