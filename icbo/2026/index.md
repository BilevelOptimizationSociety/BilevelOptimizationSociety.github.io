---
layout: microsite
permalink: /icbo/2026/index.html
title: ICBO 2026
site_root: /icbo/2026
css_dir: css
header_title: International Conference on Bilevel Optimization
header_subtitle: Pittsburgh 2026
header_meta: |
  <p class="date">August 2-5, 2026</p>
  <p class="place">CMU - University of Pittsburgh<br> Pittsburgh, USA</p>
last_updated: July 3, 2026
nav:
  - title: Home
    url: /icbo/2026/index.html
  - title: Schedule
    url: /icbo/2026/schedule.html
  - title: Registration
    url: /icbo/2026/registration.html
  - title: Submissions
    url: /icbo/2026/submissions.html
  - title: Local Information
    url: /icbo/2026/local.html
extra_style: |
  .speakers-list {
    margin-bottom: 2.5rem;
  }

  .speaker-card {
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    border: 1px solid #c9d8e8;
    border-left: 5px solid var(--maincolor2link);
    border-radius: 8px;
    background: #f7fbff;
    box-shadow: 0 2px 8px rgba(30, 68, 115, 0.08);
  }

  .speaker-card h3 {
    margin-bottom: 0.2rem;
  }

  .speaker-card h3 a {
    color: var(--navbar);
  }

  .inline-talk-title {
    color: #333;
    font-size: 1.8rem;
    font-weight: normal;
  }

  .inline-talk-title::before {
    content: " - ";
    color: #777;
  }

  .speaker-affiliation {
    margin-top: 0;
    color: #555;
    font-style: italic;
  }

  .talk-title {
    margin-top: 0.8rem;
    margin-bottom: 0.7rem;
  }

  .talk-title strong {
    color: var(--navbar);
  }

  .speaker-card details {
    margin-top: 0.35rem;
  }

  .speaker-card summary {
    cursor: pointer;
    font-weight: bold;
    color: var(--maincolor2link);
    display: inline-block;
  }

  .speaker-card summary:hover {
    text-decoration: underline;
  }

  .speaker-card details p {
    margin-top: 0.35rem;
    margin-bottom: 0.6rem;
    line-height: 1.55;
    text-align: justify;
  }
---
<div class="highlight">
  <div class="container">
    <h2>About</h2>
    <div class="row">
      <div>
      <p> We are happy to announce that the International Conference on Bilevel Optimization 2026 will be hosted jointly by the University of Pittsburgh and Carnegie Mellon University in August 2026. We sincerely thank Prof. Bo Zeng and Prof. Ramteen Sioshansi for serving as co-chairs of the first conference since the creation of the BOS. </p>

      <p>The ICBO is a bi-annual conference on bilevel optimization with the goal to highlight recent advances and trends in the field. The conferences will usually consist of a set of invited plenary speakers as well as of sessions of
        contributed talks. Its aim is to bring together junior and senior researchers in the field of bilevel optimization
        as well as practitioners using bilevel optimization. The conference also includes short courses on relevant topics for practitioners and early-career researchers.</p>
      <p>ICBO 2026 is supported by the <a href="https://bileveloptimization.org/">Bilevel Optimization Society (BOS)</a>, a section of the <a href="http://www.mathopt.org/">Mathematical Optimization Society (MOS)</a>.</p>
      <br>
      </div>
    </div>
  </div>
</div>

<div class="mainstyle2">
  <div class="container">
    <h2>Plenary Speakers</h2>
    <div class="speakers-list">
        <div class="speaker-card">
          <h3>
	    <a href="https://cs.brown.edu/people/faculty/amy/">Amy Greenwald</a>
	    <span class="inline-talk-title">The Promise of Bilevel Optimization in Machine Learning (and Economics)</span>
	  </h3>
          <p class="speaker-affiliation">Brown University, US</p>

          <details>
            <summary>Abstract</summary>
            <p>
	      I will discuss my recent explorations of supervised learning, reinforcement learning, and reinforcement
	      learning from human feedback (RLHF) from the point of view of bilevel optimization. We conjectured that
	      the BLO perspective, i.e., computing a Stackelberg equilibrium, would improve performance in these domains,
	      as compared to finding a Nash equilibrium. On toy supervised and reinforcement learning problems, we show
	      that the BLO perspective is indeed beneficial; but scaling this result to larger problems like RHLF is
	      proving challenging. Time permitting, I will also discuss a BLO-based approach to economic equilibrium computation.
            </p>
          </details>

          <details>
            <summary>Bio</summary>
            <p>
              Amy Greenwald is Professor of Computer Science at Brown University in Providence,
              Rhode Island. Her core research focus is multiagent AI. Application areas include
              supply chains, electricity markets, and online advertising. She frames such environments
              as games or economies, and develops algorithms to solve for their equilibria and/or
              builds strategic AI for these environments. Greenwald did postdoctoral work at IBM
              Research and was a visiting researcher at Microsoft Research. She was awarded the
              Presidential Early Career Award for Scientists and Engineers (PECASE), a Fulbright
              (which she declined), and a Sloan Fellowship. Finally, Greenwald is active in promoting
              diversity in Computer Science, leading multiple K-12 initiatives in which Brown
              undergraduates teach computer science to public school students in the greater Providence
              area.
            </p>
          </details>
        </div>

      <div class="speaker-card">
        <h3>
          <a href="https://www.business.uc.edu/faculty-research/obais/faculty/leonardo-lozano.html">Leonardo Lozano</a>
          <span class="inline-talk-title">Decision diagram-based approaches for linear discrete bilevel programming</span>
        </h3>
        <p class="speaker-affiliation">University of Cincinnati, US</p>

        <details>
          <summary>Abstract</summary>
          <p>
            Integer bilevel programming problems are known to be very challenging due to the
            lack of strong relaxations that can be efficiently computed. We propose single-level
            representations of integer bilevel programming problems that rely on network
            flow-based approximations of the follower's value function, using decision diagrams.
            We then show how we can derive scalable relaxations from this representation by
            constructing a minorizer of the follower&rsquo;s value function. We experimentally compare
            our approach with state-of-the-art bilevel programming solvers and show that we can
            obtain competitive results for certain problem classes.
          </p>
        </details>

        <details>
          <summary>Bio</summary>
          <p>
            Leonardo Lozano is an associate professor in the Operations, Business Analytics &amp;
            Information Systems Department at the University of Cincinnati. He received his B.Sc.
            degree from Universidad de los Andes, his M.Sc. degree from University of Florida,
            and his Ph.D. degree from Clemson University. His research focuses on exact algorithms
            for discrete optimization and has been published in Operations Research, Mathematical
            Programming, Transportation Science, Networks (Glover-Klingman 2020 best paper award),
            and INFORMS Journal on Computing, among others. His research has been funded by the
            Office of Naval Research, the Air Force Office of Scientific Research, and Google.
          </p>
        </details>
      </div>

      <div class="speaker-card">
        <h3>
          <a href="https://sites.google.com/view/ssabach">Shoham Sabach</a>
          <span class="inline-talk-title">A Decade of Progress in Convex Bilevel Optimization</span>
        </h3>
        <p class="speaker-affiliation">Cornell University, US</p>

        <details>
          <summary>Abstract</summary>
          <p>
            Bilevel optimization has emerged as a central paradigm in modern optimization,
            driven by a wide range of applications in machine learning, data science, and engineering.
            Over the past decade, the field has witnessed significant advances in both algorithmic
            development and theoretical understanding, particularly for convex bilevel optimization
            problems. In this talk, we will review recent progress in the design and analysis of
            algorithms for bilevel optimization, including convergence guarantees and complexity
            results. We will discuss key challenges that distinguish bilevel problems from classical
            optimization models, highlight representative contributions, and outline several important
            open questions.
          </p>
        </details>

        <details>
          <summary>Bio</summary>
          <p>
            Dr. Shoham Sabach is an Associate Professor in the School of Operations Research and
            Information Engineering at Cornell University. Since 2022, he has held an appointment
            as an Amazon Scholar at Amazon Research. He received his Ph.D. in Mathematics from
            the Technion – Israel Institute of Technology in 2012. His research focuses on the theory,
            algorithms, and applications of optimization, with particular emphasis on developing
            computationally efficient methods and bridging optimization with problems arising in
            science, engineering, and AI. Dr. Sabach serves on the editorial boards of several leading
            optimization journals, including Mathematics of Operations Research and Mathematical
            Programming. He was awarded the 2017 SIAM Optimization Prize for the best optimization
            paper published between 2014 and 2017.
          </p>
        </details>
      </div>
    </div>

    <h2>Summer School Lecturers</h2>
    <div class="speakers-list">
      <div class="speaker-card">
        <h3>
          <a href="https://zhaosong-lu.github.io/index.html">Zhaosong Lu</a>
          <span class="inline-talk-title">Recent Advances in First-Order Methods for Continuous Bilevel Optimization</span>
        </h3>
        <p class="speaker-affiliation">University of Minnesota, US</p>

        <details>
          <summary>Abstract</summary>
          <p>
            Bilevel optimization is a fundamentally important branch of modern mathematical
            optimization with numerous applications in machine learning, artificial intelligence,
            data science, operations research, and engineering. In this lecture, we will present
            recent advances in first-order methods for continuous bilevel optimization.
          </p>
          <p>
            We will begin by discussing several important applications of continuous bilevel
            optimization, particularly in emerging areas such as machine learning. We will then
            present scalable first-order methods based on hyperobjective and joint-objective
            formulations for solving several important classes of continuous bilevel optimization
            problems, along with their first-order oracle complexity guarantees for computing
            appropriate approximate solutions. Finally, we will present preliminary numerical
            results to demonstrate the effectiveness of the proposed methods.
          </p>
        </details>

        <details>
          <summary>Bio</summary>
          <p>
            Zhaosong Lu is a Full Professor in the Department of Industrial and Systems Engineering
            at the University of Minnesota. He received his Ph.D. in Operations Research from
            Georgia Institute of Technology. His research focuses on the theory and algorithms of
            continuous optimization, with applications in data science and machine learning. Dr. Lu
            has published extensively in leading journals such as Mathematical Programming,
            Mathematics of Operations Research, and SIAM Journal on Optimization. His work has
            been supported by funding agencies including AFOSR, NSF, and ONR. He has served on
            several prize committees, such as the INFORMS George Nicholson Prize and the ICCOPT
            Best Paper Award. In addition, he has served as an Associate Editor for journals including
            Mathematics of Operations Research, SIAM Journal on Optimization, Computational
            Optimization and Applications, and Journal of Global Optimization.
          </p>
        </details>
      </div>

      <div class="speaker-card">
        <h3>
          <a href="https://scholar.google.com/citations?user=nM3-T30AAAAJ&hl=en">Oleg Prokopyev</a>
          <span class="inline-talk-title">Some Perspectives on Mixed-Integer Bilevel Optimization</span>
        </h3>
        <p class="speaker-affiliation">University of Zurich, Switzerland</p>

        <details>
          <summary>Abstract</summary>
          <p>
            We discuss selected topics in mixed-integer bilevel optimization, focusing on features
            that distinguish this class of problems from single-level linear and mixed-integer linear
            optimization problems. We begin with motivating application examples that naturally lead
            to bilevel models with integrality restrictions on some or all decision variables. We then
            review classical and recent theoretical results on the computational complexity of bilevel
            optimization problems. Finally, we outline the main ideas behind exact and heuristic
            solution methods, with particular emphasis on recent developments.
          </p>
        </details>

        <details>
          <summary>Bio</summary>
          <p>
            Dr. Oleg A. Prokopyev is a Professor of Quantitative Business Administration at the
            University of Zurich (UZH), Switzerland. Previously, he was a professor in the Department
            of Industrial Engineering at the University of Pittsburgh. He earned his M.S. and B.S. in
            Applied Mathematics and Physics from the Moscow Institute of Physics and Technology,
            and he received his Ph.D. in Industrial and Systems Engineering from the University of
            Florida. Dr. Prokopyev has published more than 100 journal papers. One of his co-authored
            papers received the William Pierskalla Best Paper Award by the Health Applications Society
            of the Institute for Operations Research and the Management Sciences (INFORMS), while
            another received the Best Publication Award in Environment and Sustainability by the INFORMS
            Section on Energy, Natural Resources, and the Environment. He was also the recipient of the
            Air Force Office of Scientific Research (AFOSR) Young Investigator Research Program (YIP)
            Award. His research interests lie at the intersection of mathematical optimization theory and
            the development of computational and algorithmic methods. Dr. Prokopyev serves as a
            Co-Editor-in-Chief of Optimization Letters and as editorial board member of several other
            journals.
          </p>
        </details>
      </div>
    </div>
  </div>
</div>

<div class="mainstyle1">
  <div class="container">
    <h2>Organization</h2>
    <div class="row">
      <div class="six columns">
        <h3>Program Committee</h3>
        <ul>
           <li><a href="https://margaridacarvalho.org/">Margarida Carvalho</a></li>
           <li><a href="https://scholar.google.com/citations?user=E0A3lSIAAAAJ">Kaiyi Ji</a></li>
           <li><a href="https://ivanaljubic.github.io/">Ivana Ljubic</a></li>
           <li><a href="https://csef.it/people/jacqueline-morgan/">Jacqueline Morgan</a></li>
            <li><a href="https://coral.ise.lehigh.edu/~ted/">Ted Ralphs</a></li>
             <li><a href="https://martinschmidt.squarespace.com/">Martin Schmidt (Chair)</a></li>
            <li><a href="https://epp.engineering.cmu.edu/directory/bios/sioshansi-ramteen.html">Ramteen Sionshansi</a></li>
            <li><a href="https://scholar.google.com/citations?user=beBzrF8AAAAJ&hl=en">Anton Svensson</a></li>
            <li><a href="https://tugraz.elsevierpure.com/en/persons/sonja-wogrin">Sonja Wogrin</a></li>
            <li><a href="https://www.southampton.ac.uk/people/5xd5hn/professor-alain-zemkoho">Alain Zemkoho</a></li>
            <li><a href="https://scholar.google.com/citations?user=RSdgv2YAAAAJ&hl=en">Bo Zeng</a></li>
            <li><a href="https://scholar.google.com/citations?user=VWYT_7YAAAAJ&hl=en">Jin Zhang</a></li>
        </ul>
      </div>
      <div class="six columns">
        <h3>Local Organization</h3>
        <ul>
          <li><a href="mailto:Tanveer.Bhuiyan@utsa.edu">Tanveer Hossain Bhuiyan </a></li>
          <li><a href="mailto:weigu@andrew.cmu.edu">Wei Gu</a></li>
          <li><a href="mailto:lamperski@pitt.edu">Jourdain Bernard Lamperski</a></li>
          <li> <a href="mailto:zs.lu@pitt.edu">Zhengsong Lu</a></li>
          <li><a href="https://epp.engineering.cmu.edu/directory/bios/sioshansi-ramteen.html">Ramteen Sioshansi</a> (Co-Chair)
          </li>
          <li> <a href="mailto:bzeng@pitt.edu">Bo Zeng</a> (Chair)</li>
          <li> <a href="mailto:shixianz@andrew.cmu.edu">Woody Zhu</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="mainstyle2">
  <div class="container">
    <h2>Sponsors</h2>
    <p> Sponsorship opportunities are available. Companies interested in supporting ICBO 2026 are invited to contact the Organizing Committee.
    </p>
  </div>
</div>
