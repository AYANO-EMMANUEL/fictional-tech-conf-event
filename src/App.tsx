import { useState } from 'react';
import { RegistrationForm } from './components/Form/RegistrationForm';
import Schedule from './components/Schedule/Schedule';
import FAQ from './components/FAQ/FAQ';

function App() {
  const [activeSection, setActiveSection] = useState<'register' | 'schedule' | 'faq'>('register');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">TechConf 2024</h1>
          <p className="text-blue-100">November 15-17, 2024 • San Francisco, CA</p>
        </div>
        
        {/* Navigation */}
        <nav className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 py-3">
              <button 
                onClick={() => setActiveSection('register')}
                className={`btn ${activeSection === 'register' 
                  ? 'btn-primary' 
                  : 'btn-secondary'}`}
              >
                Register
              </button>
              <button 
                onClick={() => setActiveSection('schedule')}
                className={`btn ${activeSection === 'schedule' 
                  ? 'btn-primary' 
                  : 'btn-secondary'}`}
              >
                Schedule
              </button>
              <button 
                onClick={() => setActiveSection('faq')}
                className={`btn ${activeSection === 'faq' 
                  ? 'btn-primary' 
                  : 'btn-secondary'}`}
              >
                FAQ
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      {activeSection === 'register' && (
        <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Join the Future of Technology
              </h2>
              <p className="text-xl text-gray-600">
                Three days of inspiring keynotes, hands-on workshops, and networking with industry leaders.
              </p>
            </div>
            <RegistrationForm onSuccess={() => setActiveSection('schedule')} />
          </div>
        </section>
      )}

      {/* Schedule Section */}
      {activeSection === 'schedule' && (
        <section className="py-12 md:py-16 bg-white">
          <main className="container mx-auto px-4 py-8">
            <Schedule />
          </main>
        </section>
      )}

      {/* FAQ Section */}
      {activeSection === 'faq' && (
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <FAQ />
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">TechConf 2024</h3>
              <p className="text-gray-400">The premier tech conference of the year</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="mailto:info@techconf.com" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Email</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p> {new Date().getFullYear()} TechConf. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
