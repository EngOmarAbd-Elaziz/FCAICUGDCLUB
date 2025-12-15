// src/App.js

import React, { useState, useEffect, useRef } from 'react';
import './styles/App.css'; 

// IMPORTANT: Replace the placeholder paths with your actual asset paths.
// Example: '/assets/team-logo.png' 

// ===================================================================
// 🛠️ 1. Dummy Data (English)
// ===================================================================

const changingTexts = ["Build your first project in two months.", "Learn coding, art, and market entry.", "Compete in the biggest Game Jam challenge."];

const heroVideoSrc = 'https://www.w3schools.com/html/mov_bbb.mp4'; // Replace with your Intro video path

// Replace image URLs with actual paths (e.g., /assets/team/member1.jpg)
const teamMembersData = [
    { id: 1, name: 'Omar', title: 'Unity Track Lead', image: 'https://via.placeholder.com/400x500?text=Ahmed+Ali+GDC', bio: 'Expert in C# and complex game mechanics design.', skills: ['C#', 'Unity', 'OOP', 'Game Design'] },
    { id: 2, name: 'Omar', title: 'Technical Artist', image: 'https://via.placeholder.com/400x500?text=Sara+Khaled+GDC', bio: 'Specialized in 3D modeling, Blender, and Substance Painter.', skills: ['Blender', '3D Modeling', 'Art Direction', 'Unreal Engine'] },
    { id: 3, name: 'Omar', title: 'Operations Manager', image: 'https://via.placeholder.com/400x500?text=Yousef+Tarek+GDC', bio: 'Handles team coordination, project management, and high-efficiency workflow.', skills: ['Project Mgmt', 'Team Lead', 'Soft Skills'] },
    { id: 4, name: 'Omar', title: 'Unreal Engine Instructor', image: 'https://via.placeholder.com/400x500?text=Nour+Magdy+GDC', bio: 'Proficient in Blueprints, C++ programming, and building interactive environments.', skills: ['Unreal Engine', 'C++', 'Blueprints', 'Level Design'] },
    { id: 4, name: 'Omar', title: 'Unreal Engine Instructor', image: 'https://via.placeholder.com/400x500?text=Nour+Magdy+GDC', bio: 'Proficient in Blueprints, C++ programming, and building interactive environments.', skills: ['Unreal Engine', 'C++', 'Blueprints', 'Level Design'] },
    { id: 4, name: 'Omar', title: 'Unreal Engine Instructor', image: 'https://via.placeholder.com/400x500?text=Nour+Magdy+GDC', bio: 'Proficient in Blueprints, C++ programming, and building interactive environments.', skills: ['Unreal Engine', 'C++', 'Blueprints', 'Level Design'] },
    { id: 4, name: 'Omar', title: 'Unreal Engine Instructor', image: 'https://via.placeholder.com/400x500?text=Nour+Magdy+GDC', bio: 'Proficient in Blueprints, C++ programming, and building interactive environments.', skills: ['Unreal Engine', 'C++', 'Blueprints', 'Level Design'] },
    { id: 4, name: 'Omar', title: 'Unreal Engine Instructor', image: 'https://via.placeholder.com/400x500?text=Nour+Magdy+GDC', bio: 'Proficient in Blueprints, C++ programming, and building interactive environments.', skills: ['Unreal Engine', 'C++', 'Blueprints', 'Level Design'] },
    { id: 4, name: 'Omar', title: 'Unreal Engine Instructor', image: 'https://via.placeholder.com/400x500?text=Nour+Magdy+GDC', bio: 'Proficient in Blueprints, C++ programming, and building interactive environments.', skills: ['Unreal Engine', 'C++', 'Blueprints', 'Level Design'] },
    { id: 4, name: 'Omar', title: 'Unreal Engine Instructor', image: 'https://via.placeholder.com/400x500?text=Nour+Magdy+GDC', bio: 'Proficient in Blueprints, C++ programming, and building interactive environments.', skills: ['Unreal Engine', 'C++', 'Blueprints', 'Level Design'] },
    { id: 4, name: 'Omar', title: 'Unreal Engine Instructor', image: 'https://via.placeholder.com/400x500?text=Nour+Magdy+GDC', bio: 'Proficient in Blueprints, C++ programming, and building interactive environments.', skills: ['Unreal Engine', 'C++', 'Blueprints', 'Level Design'] },
    { id: 4, name: 'Omar', title: 'Unreal Engine Instructor', image: 'https://via.placeholder.com/400x500?text=Nour+Magdy+GDC', bio: 'Proficient in Blueprints, C++ programming, and building interactive environments.', skills: ['Unreal Engine', 'C++', 'Blueprints', 'Level Design'] },
    { id: 4, name: 'Omar', title: 'Unreal Engine Instructor', image: 'https://via.placeholder.com/400x500?text=Nour+Magdy+GDC', bio: 'Proficient in Blueprints, C++ programming, and building interactive environments.', skills: ['Unreal Engine', 'C++', 'Blueprints', 'Level Design'] },
    { id: 4, name: 'Omar', title: 'Unreal Engine Instructor', image: 'https://via.placeholder.com/400x500?text=Nour+Magdy+GDC', bio: 'Proficient in Blueprints, C++ programming, and building interactive environments.', skills: ['Unreal Engine', 'C++', 'Blueprints', 'Level Design'] },
    { id: 4, name: 'Omar', title: 'Unreal Engine Instructor', image: 'https://via.placeholder.com/400x500?text=Nour+Magdy+GDC', bio: 'Proficient in Blueprints, C++ programming, and building interactive environments.', skills: ['Unreal Engine', 'C++', 'Blueprints', 'Level Design'] },
    { id: 4, name: 'Omar', title: 'Unreal Engine Instructor', image: 'https://via.placeholder.com/400x500?text=Nour+Magdy+GDC', bio: 'Proficient in Blueprints, C++ programming, and building interactive environments.', skills: ['Unreal Engine', 'C++', 'Blueprints', 'Level Design'] },
    { id: 4, name: 'Omar', title: 'Unreal Engine Instructor', image: 'https://via.placeholder.com/400x500?text=Nour+Magdy+GDC', bio: 'Proficient in Blueprints, C++ programming, and building interactive environments.', skills: ['Unreal Engine', 'C++', 'Blueprints', 'Level Design'] },
    { id: 4, name: 'Omar', title: 'Unreal Engine Instructor', image: 'https://via.placeholder.com/400x500?text=Nour+Magdy+GDC', bio: 'Proficient in Blueprints, C++ programming, and building interactive environments.', skills: ['Unreal Engine', 'C++', 'Blueprints', 'Level Design'] },
    { id: 4, name: 'Omar', title: 'Unreal Engine Instructor', image: 'https://via.placeholder.com/400x500?text=Nour+Magdy+GDC', bio: 'Proficient in Blueprints, C++ programming, and building interactive environments.', skills: ['Unreal Engine', 'C++', 'Blueprints', 'Level Design'] },
    { id: 4, name: 'Omar', title: 'Unreal Engine Instructor', image: 'https://via.placeholder.com/400x500?text=Nour+Magdy+GDC', bio: 'Proficient in Blueprints, C++ programming, and building interactive environments.', skills: ['Unreal Engine', 'C++', 'Blueprints', 'Level Design'] },
];

const videoThumbnails = Array.from({ length: 10 }, (_, i) => ({ 
    id: i + 1, 
    thumbnail: `https://via.placeholder.com/300x180?text=Track+Video+${i + 1}`, 
    youtubeLink: `#` 
}));

const statsData = [
    { label: 'Total Trained Students', icon: '🧑‍🎓', value: 920 },
    { label: 'Certified Training Hours', icon: '⏳', value: 1500 },
    { label: 'Graduation Projects Launched', icon: '🕹️', value: 45 },
    { label: 'Employment Rate from Club', icon: '💼', value: 85 },
];


// **********************************************
// ********* Logic for StatCard Count-Up **********
// **********************************************

const useInView = (ref) => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntersecting(true);
                observer.disconnect(); 
            }
        }, { threshold: 0.5 }); 

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (ref.current) { observer.unobserve(ref.current); }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);
    return isIntersecting;
};

const useCounter = (targetValue, duration, isInView) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const end = parseInt(targetValue, 10);
        const stepTime = Math.abs(Math.floor(duration / (end - start)));

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) {
                clearInterval(timer);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [targetValue, duration, isInView]);

    return count;
};

const StatCard = ({ stat }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef);
    const duration = stat.value > 100 ? 2500 : 1500; 
    const count = useCounter(stat.value, duration, isInView); 
    const suffix = stat.label.includes('Employment Rate') ? '%' : '+';

    return (
        <div className="stat-card card-shadow-hover" ref={cardRef}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{count}{suffix}</div> 
            <h4 className="stat-label">{stat.label}</h4>
        </div>
    );
};


// ===================================================================
// 🧭 2. Navbar Component
// ===================================================================

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };
    
    // Replace with your actual logo image path
    const logoImagePath = "https://via.placeholder.com/30x30?text=GDC"; 

    return (
        <nav className={`navbar ${isScrolled ? 'solid-bg' : 'transparent-bg'}`}>
            <div className="container navbar-container">
                <div className="logo">
                    <div className="logo-icon-wrapper">
                        <img src={logoImagePath} alt="GDC Logo" />
                    </div>
                    <span>GameDevClub</span>
                </div>
                
                <div className="nav-links">
                    <a href="#intro" onClick={(e) => scrollToSection(e, 'intro')}>Home</a>
                    <a href="#who-we-are" onClick={(e) => scrollToSection(e, 'who-we-are')}>About Us</a>
                    <a href="#team" onClick={(e) => scrollToSection(e, 'team')}>Our Team</a>
                    <a href="#courses" onClick={(e) => scrollToSection(e, 'courses')}>Tracks</a>
                    <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')}>Testimonials</a>
                    <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
                </div>
                <a 
                    href="/registration-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cta-button" 
                >
                    Register Now
                </a>
            </div>
        </nav>
    );
};

// ===================================================================
// 🌟 3. Hero Section (Intro)
// ===================================================================

const HeroSection = () => {
    // Typing Effect Logic 
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        const fullText = changingTexts[currentTextIndex];
        const handleTyping = () => {
            if (isDeleting) {
                setDisplayedText(prev => prev.substring(0, prev.length - 1));
                if (displayedText === '') {
                    setIsDeleting(false); 
                    setCurrentTextIndex(prev => (prev + 1) % changingTexts.length);
                }
            } else {
                setDisplayedText(prev => fullText.substring(0, prev.length + 1));
                if (displayedText === fullText) {
                    setTimeout(() => setIsDeleting(true), 2500);
                }
            }
        };

        const speed = isDeleting ? 70 : 120;
        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentTextIndex]); 

    // Logic for Video (Right Side)
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true); 

    useEffect(() => {
        // Ensure the video plays automatically when the component mounts
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay failed (muted) in Hero:", error);
            });
        }
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <section id="intro" className="intro-section light-bg">
            <div className="container split-layout">
                
                {/* Left Content (Slogan) */}
                <div className="left-content">
                    <h1 className="giant-slogan">
                        The <span className="highlight">GameDevClub,</span>  
                        Your path to professionalism.
                    </h1>
                    <p className="sub-text">
                        A student-run tech community focused on training FCAI CU students to master the art of digital game development from scratch to advanced stages.
                    </p>
                    <a 
                        href="/registration-link"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cta-button" 
                    >
                        Start Your Journey
                    </a>
                </div>

                {/* Right Content (Video + Caption) - FIXED */}
                <div className="right-content">
                    <div className="hero-visual-container">
                        
                        <video
                            ref={videoRef}
                            autoPlay 
                            loop 
                            muted={isMuted} 
                            playsInline // Important for mobile autoplay
                            poster="https://via.placeholder.com/600x400?text=Hero+Video+Poster"
                        >
                            <source src={heroVideoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        
                        {/* Mute/Unmute Button */}
                        <button 
                            className="cta-button mute-toggle-btn" 
                            onClick={toggleMute}
                        >
                            {isMuted ? '🔇 Unmute' : '🔊 Mute'}
                        </button>
                        <p className="animated-caption">
                            {displayedText} <span className="typing-cursor">|</span> 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ===================================================================
// 👥 4. Who We Are
// ===================================================================

const WhoWeAre = () => {
    return (
        <section id="who-we-are" className="who-we-are-section off-white-bg">
            <div className="container split-layout align-center">
                
                <div className="left-content">
                    <h2>Who We Are & What We Offer</h2>
                    <p>
                        We are not just a club, but a mini-studio environment that simulates large game development companies. Our goal is to transform theoretical knowledge into practical, publishable projects, producing job-ready developers.
                    </p>
                    <ul className="features-list">
                        <li><span className="icon">✓</span> Training on industry-standard engines (Unity & Unreal).</li>
                        <li><span className="icon">✓</span> Building a strong, professional portfolio for every trainee.</li>
                        <li><span className="icon">✓</span> Intensive workshops in Art, Programming, and Game Design.</li>
                    </ul>
                    <a 
                        href="#team"
                        onClick={(e) => document.getElementById('team').scrollIntoView({ behavior: 'smooth' })}
                        className="cta-button" 
                        style={{ marginTop: '20px', backgroundColor: 'var(--color-secondary)' }}
                    >
                        Meet Our Experts
                    </a>
                </div>
                
                <div className="right-content">
                    {/* Replace with your actual community image path */}
                    <img src="https://via.placeholder.com/500x350?text=Students+Discussion+GDC" alt="Club Members Photo" />
                </div>
            </div>
        </section>
    );
};


// ===================================================================
// 🤝 5. Team Section (3D Flip Cards)
// ===================================================================

const TeamMemberCard = ({ member }) => (
    <div className="team-member-wrapper"> 
        <div className="card-flip-container card-shadow-hover">
            
            {/* Front Face */}
            <div className="card-face card-front">
                <img src={member.image} alt={member.name} className="member-photo" />
                <h4 className="member-name">{member.name}</h4>
                <p className="member-title">{member.title}</p>
            </div>

            {/* Back Face */}
            <div className="card-face card-back">
                <p className="back-title">About {member.name}</p>
                <p className="member-bio">{member.bio}</p>
                <div className="member-skills">
                    {member.skills.map((skill, index) => <span key={index} className="skill-tag">{skill}</span>)}
                </div>
            </div>
        </div>
    </div>
);

const TeamSection = () => (
    <section id="team" className="team-section light-bg">
        <div className="container">
            <h2 className="section-title">Our Expert Team 💪</h2>
            <p className="section-subtitle">Meet the instructors and leaders who will guide you on your journey to becoming a game development professional.</p>
            <div className="team-grid">
                {teamMembersData.map(member => (
                    <TeamMemberCard key={member.id} member={member} />
                ))}
            </div>
        </div>
    </section>
);


// ===================================================================
// 📚 6. Course Illustration (Carousel)
// ===================================================================

const CourseIllustration = () => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <section id="courses" className="course-illustration-section off-white-bg">
            <div className="container">
                <h2 className="section-title">Our Certified Training Tracks</h2>
                <p className="section-subtitle">Check out samples of the high-quality educational outputs you will achieve with us.</p>
                
                <div 
                    className="thumbnail-carousel"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="carousel-view"> 
                        <div className={`carousel-track ${isHovered ? 'paused' : ''}`}>
                            {/* Duplicate the list for seamless looping */}
                            {[...videoThumbnails, ...videoThumbnails].map((video, index) => (
                                    <a 
                                        key={index} 
                                        href={video.youtubeLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="thumbnail-item card-shadow-hover"
                                    >
                                        <img src={video.thumbnail} alt={`Track Video ${video.id}`} />
                                    </a>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ===================================================================
// 📈 7. Numbers Section
// ===================================================================

const NumbersSection = () => (
    <section id="numbers" className="numbers-section light-bg">
        <div className="container"> 
            <h2 className="section-title">We Believe in Numbers 🚀</h2>
            <p className="section-subtitle">Our achievements speak for themselves. Glimpses of the club's impact on the developer community.</p>
            <div className="stats-cards-container">
                {statsData.map((stat, index) => (
                    <StatCard key={index} stat={stat} />
                ))}
            </div>
        </div>
    </section>
);

// ===================================================================
// 🗣️ 8. Testimonials Section (New)
// ===================================================================

const TestimonialsSection = () => {
    const videoRef = useRef(null);
    // Auto-play requirement: Keep muted to comply with most browser policies for auto-play
    const [isMuted, setIsMuted] = useState(true); 

    // Replace with your actual testimonial video path
    const testimonialVideoSrc = 'https://www.w3schools.com/html/mov_bbb.mp4'; 
    
    useEffect(() => {
        // Ensure the video plays automatically when the component mounts
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay failed (muted):", error);
            });
        }
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <section id="testimonials" className="testimonials-section off-white-bg">
            <div className="container">
                <h2 className="section-title">Voices of Our Members 🎙️</h2>
                <p className="section-subtitle">Hear directly from our alumni and current members about their growth journey with GDC.</p>

                <div className="large-video-box">
                    <video
                        ref={videoRef}
                        autoPlay 
                        loop 
                        muted={isMuted} 
                        playsInline // Important for mobile autoplay
                        poster="https://via.placeholder.com/900x500?text=Testimonial+Video+Poster"
                    >
                        <source src={testimonialVideoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    
                    <button 
                        className="cta-button" 
                        style={{position: 'absolute', top: '15px', right: '15px', padding: '8px 15px', zIndex: 10}}
                        onClick={toggleMute}
                    >
                        {isMuted ? '🔇 Unmute' : '🔊 Mute'}
                    </button>
                </div>
                
                <p className="video-caption">"From zero knowledge to launching my first game on Steam." - Alumni, Class of 2024</p>
            </div>
        </section>
    );
};


// ===================================================================
// 📞 9. Contact Us
// ===================================================================

const ContactUsSection = () => (
    <section id="contact" className="contact-us-section light-bg">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">We are ready to answer your questions, whether you're a student or a potential partner.</p>
      
        <div className="contact-split-container">
          
          {/* Left Side: Contact Info */}
          <div className="left-side">
            <h3 style={{color: 'var(--color-primary)', marginBottom: '30px'}}>Contact Details</h3>
            
            <div className="contact-info-item">
                <div className="contact-icon-wrapper">📧</div>
                <div className="info-text">
                    <strong>Email Address</strong>
                    <a href="mailto:contact@gdc.com">contact@gdc.com</a>
                </div>
            </div>
            
            <div className="contact-info-item">
                <div className="contact-icon-wrapper">📍</div>
                <div className="info-text">
                    <strong>Official Location</strong>
                    <p>FCAI, Cairo University, Giza, Egypt</p>
                </div>
            </div>
            
            <div className="contact-info-item">
                <div className="contact-icon-wrapper">💬</div>
                <div className="info-text">
                    <strong>Follow Us</strong>
                    <div className="social-icons" style={{marginTop: '5px'}}>
                        <a href="#" target="_blank">👍</a> 
                        <a href="#" target="_blank">💼</a> 
                        <a href="#" target="_blank">▶️</a> 
                    </div>
                </div>
            </div>
          </div>
          
          {/* Right Side: Contact Form */}
          <div className="right-side">
            <h3 style={{color: 'var(--color-primary)', marginBottom: '30px'}}>Send Us a Message</h3>
            <form className="contact-form">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Your Message..." required></textarea>
                <button type="submit" className="cta-button" style={{width: '100%', borderRadius: '8px'}}>Send Message</button>
            </form>
          </div>
        </div>
        
      </div>
    </section>
);

// ===================================================================
// 📝 10. Footer
// ===================================================================

const Footer = () => {
    const scrollToSection = (e, id) => {
        e.preventDefault();
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };
    
    // Replace with your actual logo image path
    const logoImagePath = "https://via.placeholder.com/30x30?text=GDC";

    return (
        <footer className="site-footer dark-bg">
            <div className="container">
                <div className="footer-content-main-row">
                    
                    {/* 1. Left Section: Logo & Slogan */}
                    <div className="footer-section logo-slogan-col">
                        <h3 className="footer-heading" style={{color: 'var(--color-text-dark)'}}>
                            <img src={logoImagePath} alt="GDC Logo" style={{width: '30px', marginRight: '10px'}} />
                            GameDevClub
                        </h3>
                        <p>The leading game development community at FCAI, Cairo University. We offer specialized training to build the next generation of game developers.</p>
                        <div className="social-icons">
                            <a href="#" target="_blank">👍</a> 
                            <a href="#" target="_blank">💼</a> 
                            <a href="#" target="_blank">▶️</a> 
                        </div>
                    </div>
                    
                    {/* 2. Middle Section: Quick Links */}
                    <div className="footer-section quick-links-col">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul>
                            <li><a href="#who-we-are" onClick={(e) => scrollToSection(e, 'who-we-are')}>About Us</a></li>
                            <li><a href="#team" onClick={(e) => scrollToSection(e, 'team')}>Our Team</a></li>
                            <li><a href="#courses" onClick={(e) => scrollToSection(e, 'courses')}>Training Tracks</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                        </ul>
                    </div>
                    
                    {/* 3. Right Section: Contact Info */}
                    <div className="footer-section contact-info-col">
                        <h4 className="footer-heading">Contact Us</h4>
                        <p><strong>Location:</strong> Cairo University, Giza.</p>
                        <p><strong>Email:</strong> contact@gdc.com</p>
                        <p><strong>Support:</strong> Available 24/7 online.</p>
                    </div>
                </div>
                
                {/* 4. Copyright Row */}
                <div className="footer-copyright-row">
                    <p>
                        &copy; {new Date().getFullYear()} GameDevClub. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

// ===================================================================
// 🏠 11. Main Component (App)
// ===================================================================

function App() {
    return (
        <div className="App">
            <Navbar />
            
            <main>
                <HeroSection />
                <WhoWeAre />
                <TeamSection />
                <CourseIllustration />
                <NumbersSection />
                <TestimonialsSection /> 
                <ContactUsSection />
            </main>
            
            <Footer />
        </div>
    );
}

export default App;