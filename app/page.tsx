'use client';
import React from 'react';
import Image from 'next/image';

export default function Home() {
  const handleDownloadPDF = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div>
      <div className="container relative mx-auto max-w-3xl bg-white rounded-2xl shadow-2xl p-10 mt-16 mb-16 z-10">
        <header className="header flex gap-8 items-center mb-10 border-b border-gray-300 pb-6">
          <Image
            src="https://live.staticflickr.com/65535/54757796402_3143280c58_w.jpg"
            alt="Profile"
            width={112}
            height={112}
            className="profile-pic rounded-xl object-cover shadow-lg"
            priority
          />
          <div className="header-content flex-grow">
            <h1 className="text-slate-900 dark:text-sky-400 text-4xl font-extrabold leading-tight">
              Mayank Shukla
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mt-1 text-lg">
              Full-Stack MarTech Developer | AI & Web Solutions Expert
            </p>
            <nav className="links mt-3 flex gap-6 font-semibold text-blue-700 dark:text-blue-400">
              <a href="https://linkedin.com/in/seomynk/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
              <a href="https://peerlist.io/shuklamayank247" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Peerlist
              </a>
              <a href="https://github.com/mynk717/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub
              </a>
            </nav>
            <button
              id="download-pdf-btn"
              onClick={handleDownloadPDF}
              className="mt-6 px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-800 transition"
            >
              Download PDF Resume
            </button>
          </div>
        </header>

        <main className="space-y-10">
          <section>
            <h2 className="section-title">Professional Summary</h2>
            <p className="section-text">
              Full-Stack MarTech Developer with 7+ years of experience building AI-integrated web solutions and data-driven marketing campaigns. Skilled in React, Node.js, TypeScript, and advanced databases (Neo4j, Qdrant, Mem0) for real-time personalization and automation. Delivered scalable platforms and campaigns achieving 150%+ organic traffic growth for 50+ clients, generating $200K+ revenue.
            </p>
          </section>

          <section>
            <h2 className="section-title">Continuous Learning</h2>
            <ul className="section-list">
              <li>Self-taught React and TypeScript via freeCodeCamp, applied in 3 live projects (2022-2023).</li>
              <li>Mastered Neo4j for graph-based analytics through Cypher Fundamentals course, implemented in client recommendation system (2024).</li>
              <li>Learned Qdrant and Mem0 for vector search and AI memory via official docs, integrated into BrowserBot for enhanced personalization (2025).</li>
            </ul>
          </section>

          <section>
            <h2 className="section-title">Technical Skills & Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {[
                'AI-powered Applications',
                'Full Stack Development',
                'Neo4j',
                'Qdrant',
                'Mem0',
                'JavaScript / TypeScript',
                'React.js',
                'Node.js',
                'Firebase',
                'Vercel',
                'Google Analytics & Ads',
                'SEO & SEM',
                'Social Media Marketing',
                'Paid & Organic Campaigns',
                'Headless WordPress',
              ].map(skill => (
                <span key={skill} className="skill-chip">{skill}</span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="section-title">Featured Projects</h2>
            <div className="project-card">
              <strong className="block text-lg text-slate-900 dark:text-sky-400 mb-1">BizNexus Business Platform</strong>
              <p className="section-text">
                Full-stack networking platform with real-time messaging and directory, serving 300+ users monthly. Integrated Firebase for secure authentication and Neo4j for relationship analytics, driving 20% user engagement increase.
              </p>
              <div className="mt-2 space-x-4">
                <a href="https://github.com/mynk717/biznexus-firebase" target="_blank" rel="noopener" className="link">
                  GitHub Repo
                </a>
                <a href="https://biznexus.mktgdime.com/" target="_blank" rel="noopener" className="link">
                  Live Demo
                </a>
              </div>
            </div>
            <div className="project-card">
              <strong className="block text-lg text-slate-900 dark:text-sky-400 mb-1">BSR Films Production Website</strong>
              <p className="section-text">
                Responsive website for film production portfolio, driving 30% increase in client bookings via SEO. Optimized with Tailwind CSS and Vercel for 99% Lighthouse performance score.
              </p>
              <div className="mt-2 space-x-4">
                <a href="https://github.com/mynk717/bsr-film-website" target="_blank" rel="noopener" className="link">
                  GitHub Repo
                </a>
                <a href="https://www.bsrfilms.com/" target="_blank" rel="noopener" className="link">
                  Live Site
                </a>
              </div>
            </div>
            <div className="project-card">
              <strong className="block text-lg text-slate-900 dark:text-sky-400 mb-1">Browser Bot Automation Tool</strong>
              <p className="section-text">
                AI-driven automation tool with Qdrant and Mem0 for personalized scraping, adopted by 120+ non-technical users. Built with Node.js and Vercel, achieving 98% task success rate across 10K+ monthly runs.
              </p>
              <div className="mt-2 space-x-4">
                <a href="https://github.com/mynk717/BrowserBot" target="_blank" rel="noopener" className="link">
                  GitHub Repo
                </a>
                <a href="https://browser-bot.vercel.app/" target="_blank" rel="noopener" className="link">
                  Try it Here
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="section-title">Professional Experience</h2>
            <div className="project-card">
              <strong className="block text-lg text-slate-900 dark:text-sky-400 mb-1">
                Digital Marketing Specialist (Freelance) – Marketing Dime (2022–Present)
              </strong>
              <p className="section-text">
                Executed SEO and paid campaigns across Google/Meta, increasing organic traffic by 150% for 50+ clients, generating $200K revenue. Developed full-stack websites with AI automation, integrating Qdrant for personalized user flows. Mentored 2 junior marketers on SEO tools, improving team efficiency by 25%.
              </p>
            </div>
            <div className="project-card">
              <strong className="block text-lg text-slate-900 dark:text-sky-400 mb-1">
                Digital Marketing Executive – Wallfort (2021–2022)
              </strong>
              <p className="section-text">
                Led SEO and social media campaigns for real estate, growing leads from 200 to 600 monthly ($100K revenue). Built data-driven content strategies, increasing click-through rates by 35%.
              </p>
            </div>
            <div className="project-card">
              <strong className="block text-lg text-slate-900 dark:text-sky-400 mb-1">
                Junior SEO Analyst – Black Book Investment (Apr 2021–Jun 2021)
              </strong>
              <p className="section-text">
                Conducted SEO audits and keyword research, improving rankings for 10+ high-value terms. Enhanced organic visibility by 20% through on-page optimization.
              </p>
            </div>
            <div className="project-card">
              <strong className="block text-lg text-slate-900 dark:text-sky-400 mb-1">
                Digital Marketing Assistant – JGRF Technology (2018–2021)
              </strong>
              <p className="section-text">
                Supported campaign creation and social media, boosting engagement by 15%. Developed foundational SEO skills, optimizing 50+ pages.
              </p>
            </div>
          </section>

          <section>
            <h2 className="section-title">Education</h2>
            <div className="project-card">
              <strong className="block text-lg text-slate-900 dark:text-sky-400 mb-1">
                Bachelor of Technology – Mechanical Engineering
              </strong>
              <p className="section-text">
                Shree Shankaracharya Institute of Management & Technology (SSIPMT), 2014<br />
                Relevant: Advanced Digital Marketing, Project Management, Data Analysis
              </p>
            </div>
          </section>

          <section>
            <h2 className="section-title">Certifications</h2>
            <ul className="section-list">
              <li>Local SEO Exam – Semrush Academy (2023)</li>
              <li>Google Analytics for Beginners – Analytics Academy (2022)</li>
              <li>AI for Marketing – Coursera (2024)</li>
            </ul>
          </section>

          <section>
            <h2 className="section-title">Languages</h2>
            <div className="project-card">
              <p className="section-text">English (Professional Working Proficiency), Hindi (Native)</p>
            </div>
          </section>

          <section>
            <h2 className="section-title">Availability</h2>
            <div className="project-card">
              <p className="section-text">
                Open to remote part-time and project-based opportunities. Flexible hours and immediate start.
              </p>
            </div>
          </section>

        </main>

      </div>
    </div>
  );
}
