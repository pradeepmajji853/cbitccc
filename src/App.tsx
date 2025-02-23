import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Terminal, Users, Calendar, Info, Mail, ChevronRight, Shield, ExternalLink } from 'lucide-react';
import EventPage from './EventPage';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    // Interactive background effect
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      document.documentElement.style.setProperty('--mouse-x', x.toString());
      document.documentElement.style.setProperty('--mouse-y', y.toString());
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const typedText = document.querySelector('.typed-text');
    const domains = ['Pentesting', 'Information Security', 'Network Security', 'Cryptography', 'Forensics'];
    let index = 0;

    function typeDomain() {
      if (typedText) {
        typedText.textContent = domains[index];
        index = (index + 1) % domains.length;
      }
      setTimeout(typeDomain, 3000);
    }

    typeDomain();
  }, []);

  const team = [
    {
      name: "Manobhiram Reddy",
      role: "President",
      image: "/president.png"
    },
    {
      name: "Gayatri k",
      role: "Vice President",
      image: "/vicepresident.png"
    },
    {
      name: "Raghupathi .A",
      role: "General Secretary",
      image: "/GS.png"
    },
    {
      name: "Kolli Harshitha",
      role: "Joint Secretary",
      image: "/JS1.png"
    },
    {
      name: "Bhawdeep",
      role: "Joint Secretary",
      image: "/JS2.png"
    },
    {
      name: "Sravani",
      role: "Trasurer",
      image: "/Treasurer.png"
    }
  ];

  const events = [
    {
      title: "Ethical Hacking Workshop",
      date: "March 15, 2024",
      description: "Learn the basics of ethical hacking and penetration testing.",
      banner: "https://example.com/ethical-hacking-banner.jpg"
    },
    {
      title: "Cybersecurity Seminar",
      date: "April 5, 2024",
      description: "Industry experts share insights on latest security trends.",
      banner: "https://example.com/cybersecurity-seminar-banner.jpg"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient text-blue-300 font-mono">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-navy-900/90 border-b border-blue-500/30 backdrop-blur-sm z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2 group cursor-pointer">
                <img src="/logo.png" alt="CCC Logo" className="w-8 h-8" />
                <span className="text-xl font-bold group-hover:text-blue-400 transition-colors">CCC</span>
              </Link>
              <div className="flex space-x-6">
                {['about', 'events', 'team', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="capitalize text-blue-300/70 hover:text-blue-400 transition-colors relative group"
                  >
                    {section}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <div className="h-screen flex items-center justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-hacker opacity-10"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="container mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
                  <div className="w-full md:w-1/2 text-center md:text-left md:pr-8">
                    {/* Removed logo */}
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-text-glow tracking-wide text-white">
                      CBIT <br /> Cyber Security <br /> Club
                    </h1>
                    <p className="text-white text-lg md:text-xl max-w-lg typing-animation font-light mt-4 mx-auto md:mx-0">
                      <span className="typed-text"></span>
                    </p>
                    <div className="mt-8">
                      <button
                        onClick={() => scrollToSection('about')}
                        className="px-6 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg border border-blue-500/30 
                                   hover:border-blue-500/60 transition-all duration-300 group animate-pulse"
                      >
                        <span className="group-hover:tracking-wider transition-all duration-300">ENTER_SYSTEM</span>
                      </button>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 h-full flex items-center justify-center md:pl-8 mt-8 md:mt-0">
                    <img
                      src="/hacker.png"
                      alt="Hacker"
                      className="w-3/4 h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* About Section */}
              <section id="about" className="py-32 fade-in">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h2 className="text-4xl font-bold mb-6 flex items-center glitch-text">
                        <Info className="mr-2" /> About CCC
                      </h2>
                      <p className="text-blue-400/80 leading-relaxed text-lg">
                        The CBIT Cyber Security Club (CCC) is a student-led organization dedicated to promoting cybersecurity awareness
                        and skills development. We organize workshops, competitions, and seminars to help students explore the fascinating
                        world of information security.
                      </p>
                    </div>
                    <div className="border border-blue-500/30 p-8 rounded-lg bg-navy-800/50 transform hover:scale-105 transition-transform duration-300
                                  backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                      <Terminal className="w-16 h-16 mb-4 animate-pulse" />
                      <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                      <p className="text-blue-400/80 text-lg">
                        To create a community of cybersecurity enthusiasts and prepare the next generation of security professionals.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Events Section */}
              <section id="events" className="py-32 bg-navy-900 fade-in">
                <div className="container mx-auto px-4">
                  <h2 className="text-4xl font-bold mb-16 flex items-center glitch-text">
                    <Calendar className="mr-2" /> Events
                  </h2>

                  {/* Sudhee 2k25 Feature */}
                  <div className="mb-16 rounded-lg p-8 bg-gradient-to-r from-navy-900 to-blue-900/20 border border-blue-500/30
                                 transform hover:scale-[1.02] transition-all duration-300 group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur"></div>
                    <div className="relative">
                      <h3 className="text-3xl font-bold mb-6 text-blue-400 glitch-text">Sudhee 2k25</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <p className="text-blue-400/80 mb-6 text-lg leading-relaxed">
                            Our annual technical fest featuring cutting-edge cybersecurity challenges, workshops, and competitions.
                            Join us for an immersive experience in the world of information security.
                          </p>
                          <button className="flex items-center space-x-2 bg-blue-500/20 hover:bg-blue-500/30 px-6 py-3 rounded-lg
                                           transition-all duration-300 group border border-blue-500/30 hover:border-blue-500/60">
                            <span className="group-hover:tracking-wider transition-all duration-300">Learn More</span>
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                        <div className="space-y-4">
                          {['CTF Challenges', 'Security Workshops', 'Expert Talks'].map((item, index) => (
                            <Link to={`/event/${index}`} key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-navy-800/30 border border-blue-500/20
                                                      transform hover:translate-x-2 transition-transform duration-300">
                              <ChevronRight className="w-5 h-5" />
                              <span className="text-lg">{item}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Other Events */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {events.map((event, index) => (
                      <Link to={`/event/${index}`} key={index} className="border border-blue-500/30 p-6 rounded-lg bg-navy-800/30
                                            transform hover:scale-105 transition-all duration-300
                                            hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                        <p className="text-blue-400/60 mb-3">{event.date}</p>
                        <p className="text-blue-400/80">{event.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>

              {/* Team Section */}
              <section id="team" className="py-32 fade-in">
                <div className="container mx-auto px-4">
                  <h2 className="text-4xl font-bold mb-16 flex items-center glitch-text">
                    <Users className="mr-2" /> Our Team
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                      <div key={index} className="group">
                        <div className="border border-blue-500/30 rounded-lg p-8 text-center bg-navy-800/30
                                      transform hover:scale-105 transition-all duration-300
                                      hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                          <div className="relative w-32 h-32 mx-auto mb-6">
                            <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full
                                          group-hover:border-blue-500/60 transition-colors duration-300"></div>
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full rounded-full object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                            {member.name}
                          </h3>
                          <p className="text-blue-400/80">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

             

              {/* Footer */}
              <footer className="border-t border-blue-500/30 py-16 bg-navy-900">
                <div className="container mx-auto px-4 text-center text-blue-500/60">
                  <div className="mb-8">
                    <h2 className="text-4xl font-bold mb-4 flex items-center justify-center glitch-text">
                      <Mail className="mr-2" /> Contact Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-blue-400/80">
                      <div className="bg-navy-800/50 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-2">Club Official Email</h3>
                        <p>cbitcybersecurityclub@example.com</p>
                      </div>
                      <div className="bg-navy-800/50 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-2">President</h3>
                        <p>Manobhiram Reddy</p>
                        <p>Phone: +1234567890</p>
                      </div>
                      <div className="bg-navy-800/50 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-2">Vice President</h3>
                        <p>Gayatri K</p>
                        <p>Phone: +0987654321</p>
                      </div>
                    </div>
                  </div>
                  <p className="hover:text-blue-400 transition-colors duration-300">
                    © 2024 CBIT Cyber Security Club. All rights reserved.
                  </p>
                </div>
              </footer>
            </>
          } />
          <Route path="/event/:id" element={<EventPage />} />
        </Routes>

        <style>{`
          :root {
            --mouse-x: 0.5;
            --mouse-y: 0.5;
          }

          @keyframes textGlow {
            0%, 100% { text-shadow: 0 0 15px rgba(255, 255, 255, 0.2); }
            50% { text-shadow: 0 0 30px rgba(255, 255, 255, 0.4); }
          }

          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }

          @keyframes blinkCaret {
            from, to { border-color: transparent }
            50% { border-color: white }
          }

          .animate-text-glow {
            animation: textGlow 3s ease-in-out infinite;
          }

          .typing-animation {
            overflow: hidden;
            white-space: nowrap;
            border-right: 2px solid;
            animation: typing 3.5s steps(40, end) infinite, blinkCaret .75s step-end infinite;
          }

          .bg-gradient {
            background: radial-gradient(
              circle at calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%),
              #1e3a8a 0%,
              #0f172a 30%,
              #020617 100%
            );
          }

          .bg-hacker {
            background-image: url('https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80');
            background-size: cover;
            background-position: center;
            filter: brightness(0.3) contrast(1.2);
          }

          .bg-grid-pattern {
            background-image: linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
          }

          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }

          .fade-in.show {
            opacity: 1;
            transform: translateY(0);
          }

          .glitch-text {
            position: relative;
          }
          .glitch-text:hover::before,
          .glitch-text:hover::after {
            content: attr(data-text);
            position: absolute;
            left: 0;
            text-shadow: 1px 0 #3b82f6;
            clip: rect(44px, 450px, 56px, 0);
            animation: glitch 0.5s infinite linear alternate-reverse;
          }

          @keyframes glitch {
            0% {
              clip: rect(44px, 450px, 56px, 0);
              transform: skew(0.5deg);
            }
            100% {
              clip: rect(44px, 450px, 56px, 0);
              transform: skew(-0.5deg);
            }
          }

          .dark-blue-shine {
            background: linear-gradient(90deg, #1e3a8a, #0f172a);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shine 3s infinite linear;
          }

          @keyframes shine {
            0% {
              background-position: -200%;
            }
            100% {
              background-position: 200%;
            }
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;