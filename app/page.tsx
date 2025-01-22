
"use client"

import Link from "next/link"
import { FaHtml5, FaJava, FaJs, FaNode, FaPython } from "react-icons/fa"
import { SiCplusplus } from "react-icons/si"
import { FaReact } from "react-icons/fa";
const LanguageCard = ({ icon: Icon, name , href }: { icon: React.ElementType; name: string ; href:string }) => (
  <Link href={href} className="bg-gray-100 p-6 rounded-lg shadow-sm">
    <Icon className="h-12 w-12 text-dark-blue-600 mx-auto mb-4" />
    <h3 className="text-lg font-semibold text-center text-gray-800">{name}</h3>
  </Link>
)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white sticky top-0 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-gray-800">CodExec</span>
          </Link>
         
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Execute Code Online in Multiple Languages</h1>
          <p className="text-xl text-gray-600 mb-8">
            Run and test your code instantly in your browser. No setup required.
          </p>
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-dark-blue-800 hover:bg-dark-blue-900"
          >
            Try it now
          </Link>
        </section>

        <section className="bg-white flex flex-col gap-5 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8"> Languages</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <LanguageCard href="/playground/java" icon={FaJava} name="Java" />
              <LanguageCard href="/playground/cpp" icon={SiCplusplus} name="C++" />
              <LanguageCard  href="/playground/javascript" icon={FaJs} name="JavaScript" />
              <LanguageCard href="/" icon={FaPython} name="Python" />
            </div>
          </div>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8"> Environments</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <LanguageCard href="/playground/react" icon={FaReact} name="React" />
              <LanguageCard href="/" icon={FaNode} name="NodeJs"  />
              <LanguageCard href="/playground/html" icon={FaHtml5} name="HTML 5"  />
           
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Try It Out</h2>
          <div className="bg-gray-200 rounded-lg p-4 max-w-2xl mx-auto">
            <pre className="text-dark-blue-800 font-mono text-sm">
              <code>{`console.log("Hello, CodeExec!");`}</code>
            </pre>
          </div>
        </section>

        <section className="bg-dark-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to start coding?</h2>
            <p className="text-xl mb-8">Join thousands of developers using CodeExec today.</p>
            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-dark-blue-800 bg-white hover:bg-gray-100"
            >
              Sign up for free
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-8 ">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 CodeExec. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

