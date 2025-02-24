# abhishekabhi779.github.io

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abhishek Sattu - Data Analyst</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Montserrat:wght@600;700&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: #ffffff;
            color: #000000;
            line-height: 1.7;
            font-family: 'Roboto', 'Arial', sans-serif;
            position: relative;
            overflow-x: hidden;
        }

        .grid-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
        }

        .grid-lines {
            width: 100%;
            height: 100%;
            background: linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
            background-size: 20px 20px;
        }

        .grid-mask {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle 30px at -100px -100px, rgba(255, 255, 255, 1) 25px, transparent 30px);
            pointer-events: none;
            transition: none;
        }

        .grid-dot {
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 0, 0, 0.4);
            border-radius: 50%;
            animation: flow 10s linear infinite;
        }

        @keyframes flow {
            0% { left: 0; top: 0; }
            50% { left: 100%; top: 0; }
            50.01% { left: 100%; top: 100%; }
            100% { left: 0; top: 100%; }
        }

        .container {
            max-width: 1200px;
            padding: 0 40px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
        }

        header {
            padding: 1rem 0;
            position: fixed;
            width: 100%;
            background: #ffffff;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            z-index: 1000;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .nav-brand {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.5rem;
            font-weight: 700;
            color: #2c3e50;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
        }

        .nav-links a {
            color: #2c3e50;
            text-decoration: none;
            font-size: 1rem;
            font-weight: 500;
            font-family: 'Montserrat', sans-serif;
            position: relative;
            transition: all 0.3s ease;
        }

        .nav-links a:hover, .nav-links a:focus {
            color: #2c3e50;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -4px;
            left: 0;
            background: #2c3e50;
            transition: width 0.3s ease;
        }

        .nav-links a:hover::after, .nav-links a:focus::after {
            width: 100%;
        }

        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 40px;
            position: relative;
            z-index: 1;
        }

        .hero-content {
            text-align: center;
        }

        .hero h1 {
            font-family: 'Montserrat', sans-serif;
            font-size: 3rem;
            font-weight: 700;
            color: #2c3e50;
            margin-bottom: 1rem;
        }

        .hero p {
            font-size: 1.3rem;
            font-weight: 400;
            color: #666;
            max-width: 700px;
            margin: 0 auto 2rem;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease 0.2s;
        }

        .hero.scrolled p {
            opacity: 1;
            transform: translateY(0);
        }

        section {
            padding: 8rem 0;
            width: 100%;
            position: relative;
        }

        h2 {
            font-family: 'Montserrat', sans-serif;
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 2.5rem;
            color: #2c3e50;
            text-align: center;
        }

        .card {
            padding: 2rem;
            margin-bottom: 1.5rem;
            background: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
            position: relative;
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease;
        }

        .card.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .card:hover {
            box-shadow: 0 5px 18px rgba(0, 0, 0, 0.08);
        }

        .card h3 {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 0.8rem;
            color: #2c3e50;
        }

        .card p {
            font-weight: 400;
            margin-bottom: 0.8rem;
            color: #666;
        }

        .card p.date {
            font-weight: 500;
            color: #2c3e50;
        }

        .card p.location {
            font-style: italic;
            color: #888;
        }

        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 0.8rem;
            justify-content: center;
            margin-top: 1.2rem;
        }

        .skill-tag {
            background: #2c3e50;
            color: #ffffff;
            padding: 0.4rem 1rem;
            font-size: 0.85rem;
            font-weight: 500;
            border-radius: 15px;
            transition: background 0.3s ease;
        }

        .skill-tag:hover {
            background: #34495e;
        }

        ul {
            list-style: none;
            margin: 1.2rem 0;
        }

        ul li {
            font-weight: 400;
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 0.6rem;
            color: #666;
        }

        ul li::before {
            content: '•';
            position: absolute;
            left: 0;
            color: #2c3e50;
            font-weight: 700;
        }

        a {
            color: #2c3e50;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        a:hover, a:focus {
            color: #34495e;
        }

        #contact .card p {
            margin: 0.5rem 0;
        }

        footer {
            padding: 2rem 0;
            text-align: center;
            font-size: 0.9rem;
            color: #888;
            background: #f9f9f9;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .hero h1 { font-size: 2.2rem; }
            .hero p { font-size: 1.1rem; }
            .nav-links { gap: 1.5rem; }
            .nav-links a { font-size: 0.95rem; }
            .card { padding: 1.5rem; }
            h2 { font-size: 1.8rem; }
            .card h3 { font-size: 1.5rem; }
        }

        @media (max-width: 480px) {
            .hero h1 { font-size: 1.8rem; }
            .hero p { font-size: 1rem; }
            .nav-links { flex-direction: column; gap: 1rem; }
            .card { padding: 1rem; }
            .nav-brand { font-size: 1.2rem; }
        }
    </style>
</head>
<body>
    <div class="grid-container">
        <div class="grid-lines"></div>
        <div class="grid-mask" id="mask"></div>
        <div class="grid-dot" id="dot"></div>
    </div>

    <header>
        <nav class="container">
            <div class="nav-brand">Abhishek Sattu</div>
            <div class="nav-links">
                <a href="#experience">Experience</a>
                <a href="#education">Education</a>
                <a href="#projects">Projects</a>
                <a href="#certifications">Certifications</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    </header>

    <div class="hero">
        <div class="container hero-content">
            <h1>Abhishek Sattu</h1>
            <p>Data Analyst specializing in advanced analytics, cloud computing, and AI-driven insights</p>
        </div>
    </div>

    <section id="experience" class="container">
        <h2>Experience</h2>
        <div class="card">
            <h3>Graduate Assistant</h3>
            <p class="date">Jan 2023 - Present</p>
            <p class="location">State University New York, Utica, NY</p>
            <ul>
                <li>Organized and led weekly meetings for Virtual Computer Architecture Research (ViCAR) group with Dr. William Confer to develop virtual computer architecture and documentation.</li>
                <li>Automated homework evaluation processes using Python scripting, reducing grading time by 33%.</li>
                <li>Designed Power BI dashboards to analyze student engagement metrics, increasing participation by 25%.</li>
            </ul>
        </div>
        <div class="card">
            <h3>Associate Data Analyst</h3>
            <p class="date">Mar 2022 - Dec 2022</p>
            <p class="location">Fosterate Inc, Remote</p>
            <ul>
                <li>Conducted market analysis and A/B testing using Excel, SQL, and cloud tools, increasing profit margins by 12% and reducing costs by 10%.</li>
                <li>Developed Power BI dashboards for strategic planning.</li>
                <li>Performed EDA with Python on KPIs, reducing service time by 20% and boosting satisfaction by 15%.</li>
            </ul>
        </div>
        <div class="card">
            <h3>Data Analyst Intern</h3>
            <p class="date">May 2021 - Jul 2021</p>
            <p class="location">Fosterate Inc, Remote</p>
            <ul>
                <li>Collected and transformed data from service logs, feedback, and sales records.</li>
                <li>Applied clustering techniques to segment customers, boosting retention by 25% and bookings by 30%.</li>
                <li>Contributed to a machine learning model for targeted marketing strategies.</li>
            </ul>
        </div>
    </section>

    <section id="education" class="container">
        <h2>Education</h2>
        <div class="card">
            <h3>Master’s in Computer Science</h3>
            <p class="date">Jan 2024 - Dec 2024</p>
            <p class="location">State University New York, Utica, NY</p>
            <p>Coursework: Computer Networks, Visual Analytics, Data Structures, Machine Learning, NLP, Deep Learning, Database Systems</p>
        </div>
        <div class="card">
            <h3>Bachelor’s in Electronics and Communication Engineering</h3>
            <p class="date">Aug 2019 - Jul 2022</p>
            <p class="location">Osmania University, Hyderabad, India</p>
        </div>
    </section>

    <section id="projects" class="container">
        <h2>Projects</h2>
        <div class="card">
            <h3>Splitwise Expense Optimization and Analysis</h3>
            <ul>
                <li>Utilized Power BI to analyze 220 days of Splitwise data, creating visualizations to uncover spending trends and enhance expense management.</li>
                <li>Leveraged Excel and Power Query for data cleaning.</li>
                <li>Applied predictive analytics, reducing unresolved expenses by 15%.</li>
            </ul>
        </div>
        <div class="card">
            <h3>Capstone Project: Intelligent Car Recommendation System with AI and NLP</h3>
            <ul>
                <li>Developed an AI agent using RAG architecture, NLP, and data from Facebook Marketplace, achieving 25% improved recommendation accuracy.</li>
                <li>Deployed as a Streamlit web app with Ollama LLM for real-time recommendations.</li>
            </ul>
            <a href="https://github.com/yourusername/car-recommendation" target="_blank">View on GitHub</a>
        </div>
    </section>

    <section id="certifications" class="container">
        <h2>Certifications</h2>
        <div class="card">
            <h3>Microsoft Certified: Azure Fundamentals (AZ-900)</h3>
            <p class="location">Microsoft</p>
        </div>
    </section>

    <section id="skills" class="container">
        <h2>Technical Skills</h2>
        <div class="card">
            <div class="skills">
                <span class="skill-tag">Python</span>
                <span class="skill-tag">SQL</span>
                <span class="skill-tag">Power BI</span>
                <span class="skill-tag">Tableau</span>
                <span class="skill-tag">AWS</span>
                <span class="skill-tag">Azure</span>
                <span class="skill-tag">Machine Learning</span>
                <span class="skill-tag">NLP</span>
                <span class="skill-tag">Data Visualization</span>
                <span class="skill-tag">ETL</span>
            </div>
        </div>
    </section>

    <section id="contact" class="container">
        <h2>Contact</h2>
        <div class="card">
            <p>Phone: 315-601-6702</p>
            <p>Email: <a href="mailto:abhi.sat779@gmail.com">abhi.sat779@gmail.com</a></p>
            <p>Location: New York, NY</p>
            <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn Profile</a></p>
            <p>GitHub: <a href="https://github.com/yourusername" target="_blank">GitHub Profile</a></p>
        </div>
    </section>

    <footer>
        <p>&copy; 2025 Abhishek Sattu. All rights reserved.</p>
    </footer>

    <script>
        // Grid mask effect
        const mask = document.getElementById('mask');
        document.body.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            mask.style.background = `radial-gradient(circle 30px at ${x}px ${y}px, rgba(255, 255, 255, 1) 25px, transparent 30px)`;
        });

        document.body.addEventListener('mouseleave', () => {
            mask.style.background = 'radial-gradient(circle 30px at -100px -100px, rgba(255, 255, 255, 1) 25px, transparent 30px)';
        });

        // Scroll reveal for cards and hero text
        const sections = document.querySelectorAll('section, .hero');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    if (entry.target.classList.contains('hero')) {
                        entry.target.classList.add('scrolled');
                    } else {
                        entry.target.querySelectorAll('.card').forEach(card => {
                            card.classList.add('visible');
                        });
                    }
                }
            });
        }, { threshold: 0.2 });

        sections.forEach(section => observer.observe(section));

        // Smooth scrolling
        document.querySelectorAll('.nav-links a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Card tilt effect (subtler)
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20; // Reduced intensity
                const rotateY = (centerX - x) / 20;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(0)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    </script>
</body>
</html>
