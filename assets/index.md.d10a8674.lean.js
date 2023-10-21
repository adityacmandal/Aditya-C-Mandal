import {d as R, v as i, b as l, E as a, F as e, L as s, O as t, x as p, y as m, N as h, R as y, M as d, C as f, X as o, B as g} from "./chunks/framework.22d017dd.js";
const c = JSON.parse(`{"positions":{"education":[{"school":"Massachusetts Institute of Technology","subject":"Electrical Engineering and Computer Science","degree":"Master of Science (S.M.)","time":"Sept. '21 - May '23","GPA":"4.8 / 5.0","thesis":{"title":"On Efficient Training and Inference of Neural Differential Equations","link":"https://dspace.mit.edu/bitstream/handle/1721.1/151379/pal-avikpal-sm-eecs-2023-thesis.pdf"},"advisor":[{"name":"Dr. Alan Edelman","link":"https://math.mit.edu/~edelman/"},{"name":"Dr. Christopher Rackauckas","link":"https://chrisrackauckas.com/"}]},{"school":"Indian Institute of Technology Kanpur","degree":"Bachelor of Technology (B.Tech.)","subject":"Computer Science and Engineering","time":"July '17 - May '21","GPA":"9.9 / 10.0"}],"current":{"time":"Sept. '21 - May '25 (Expected)","position":"Ph.D. Student","subject":"Electrical Engineering and Computer Science","company":"Massachusetts Institute of Technology","link":"https://mit.edu","location":"Cambridge, MA, USA","GPA":"4.8 / 5.0","advisor":[{"name":"Dr. Alan Edelman","link":"https://math.mit.edu/~edelman/"},{"name":"Dr. Christopher Rackauckas","link":"https://chrisrackauckas.com/"}]},"work":[{"time":"Summer '22","position":"Student Researcher","company":"Google AI","link":"https://ai.google/","location":"Mountain View, USA"},{"time":"Jan - July '21","position":"Engineering Simulation Intern","company":"Julia Computing","link":"https://juliahub.com/","location":"Remote"},{"time":"Jan - Nov '20","position":"Research Intern","company":"Vector Institute","link":"https://vectorinstitute.ai/","location":"Toronto, CAN"},{"time":"Summer '18, '19","position":"Google Summer of Code Participant","company":"JuliaLang Organization","link":"https://julialang.org/","location":"Remote"},{"time":"Summer '18","position":"Software Engineering Intern","company":"IIT Kanpur NYO Office","link":"https://nyc.iitk.ac.in/","location":"Kanpur, IND"}]},"news":[{"date":"Sept. '23","text":"<a href='https://arxiv.org/pdf/2201.12240.pdf'>Infinite-Time Neural ODE</a> work was awarded the Best Student Paper Award at <a href='https://ieee-hpec.org'>IEEE HPEC 2023</a>!"},{"date":"Aug. '23","text":"<a href='https://arxiv.org/pdf/2201.12240.pdf'>Infinite-Time Neural ODE</a> work has been accepted as an Oral Presentation at <a href='https://ieee-hpec.org'>IEEE HPEC 2023</a>!"},{"date":"Aug. '23","text":"My S.M. Thesis is now available on <a href='https://dspace.mit.edu/handle/1721.1/151379'>MIT DSpace</a>!"},{"date":"July '23","text":"<a href='https://proceedings.mlr.press/v202/pal23a.html'>Locally Regularized Neural DEs</a> accepted at ICML 2023!"},{"date":"March '23","text":"New Preprint on <a href='https://arxiv.org/pdf/2201.12240.pdf'>Local Regularized Neural Differential Equations</a> released on ArXiv!"},{"date":"March '23","text":"New Preprint on <a href='https://arxiv.org/pdf/2201.12240.pdf'>Infinite-Time Neural ODEs</a> released on ArXiv!"},{"date":"May '22","text":"I will be joining <a  href='https://ai.google/'>Google AI</a> as a Student Research for Summer '22!"},{"date":"Oct. '21","text":"<a href='https://julialang.org/blog/2021/10/DEQ/'>Blog Post</a> out on Training Deep Equilibrium Models!"},{"date":"Oct. '21","text":"Our paper on <a href='https://joss.theoj.org/papers/10.21105/joss.02606'>TorchGAN</a> got accepted at <a  href='https://joss.theoj.org'>JOSS</a>!"},{"date":"Sept. '21","text":"Excited to start my Ph.D. at MIT!"},{"date":"May '21","text":"Our paper on <a href='https://arxiv.org/abs/2105.03918'>Regularized Neural Differential Equations</a> got accepted at <a href='https://icml.cc/'>ICML 2021</a>!"},{"date":"Jan. '21","text":"Our work on <a href='https://openreview.net/forum?id=Y70VEefGNvg'>Multi-Agent Driving</a> was accepted at <a  href='https://openreview.net/group?id=ICLR.cc/2021/Conference'>ICLR 2021</a>!"},{"date":"Oct. '20","text":"My Paper on <a  href='https://proceedings.juliacon.org/papers/10.21105/jcon.00037'>RayTracer.jl</a> got accepted at the <a href='https://proceedings.juliacon.org/'>Proceedings of JuliaCon Conferences!"},{"date":"Jun. '20","text":"Excited to join <a  href='https://vectorinstitute.ai/'>Vector Institute</a> as a Research Intern to work on Multi-Agent Driving!"}],"publications":{"significant":[{"title":"Locally Regularized Neural Differential Equations: Some Black Boxes Were Meant to Remain Closed!","authors":"<b><u>Avik Pal</u></b>, <a href='https://math.mit.edu/~edelman/'>Alan Edelman</a> & <a href='https://chrisrackauckas.com/'>Chris Rackauckas</a>","venue":"International Conference on Machine Learning (ICML) 2023","pdf":"https://proceedings.mlr.press/v202/pal23a.html","code":"https://github.com/avik-pal/LocalRegNeuralDE.jl","tldr":"We use internal cost heuristics of adaptive differential equation solvers at stochastic time-points to guide the training towards learning a dynamical system that is easier to integrate. We 'close the blackbox' and allow the use of our method with any adjoint technique for gradient calculations of the differential equation solution.","bibtex":"/assets/papers/bibtex/localregneuralde.txt","graphic":"/assets/images/papers/local_reg_neural_de.png"},{"title":"Continuous Deep Equilibrium Models: Training Neural ODEs faster by integrating them to Infinity","authors":"<b><u>Avik Pal</u></b>, <a href='https://math.mit.edu/~edelman/'>Alan Edelman</a> & <a href='https://chrisrackauckas.com/'>Chris Rackauckas</a>","venue":"IEEE High Performance Extreme Computing (HPEC) 2023 (Oral Presentation)","pdf":"https://arxiv.org/pdf/2201.12240.pdf","code":"https://github.com/SciML/DeepEquilibriumNetworks.jl","tldr":"Is there a way to simultaneously achieve the robustness of implicit layers while allowing the reduced computational expense of an explicit layer? To solve this we develop Skip DEQ, an implicit-explicit (IMEX) layer that simultaneously trains an explicit prediction followed by an implicit correction.","bibtex":"/assets/papers/bibtex/skipdeq.txt","graphic":"/assets/images/papers/skipdeq.png"},{"title":"Opening the Blackbox: Accelerating Neural Differential Equations by Regularizing Internal Solver Heuristics","authors":"<b><u>Avik Pal</u></b>, <a href='https://scholar.google.com/citations?user=U3Pj3IAAAAAJ&hl=en'>Yingbo Ma</a>, <a href='https://scholar.google.com/citations?user=0zQdH0oAAAAJ&hl=en'>Viral B. Shah</a> & <a href='https://chrisrackauckas.com/'>Chris Rackauckas</a>","venue":"International Conference on Machine Learning (ICML) 2021","pdf":"http://proceedings.mlr.press/v139/pal21a/pal21a.pdf","code":"https://github.com/avik-pal/RegNeuralDE.jl","tldr":"We describe a novel regularization method that uses the internal domain-specific cost heuristics of adaptive differential equation solvers combined with discrete adjoint sensitivities to guide the training process to find Neural Differential Equations that are faster to solve.","bibtex":"/assets/papers/bibtex/regneuralde.txt","graphic":"/assets/images/papers/regneuralde.png"},{"title":"Emergent Road Rules In Multi-Agent Driving Environments","authors":"<b><u>Avik Pal</u></b>, <a href='https://scholar.google.com/citations?user=VVIAoY0AAAAJ&hl=en'>Jonah Philion</a>, <a href='https://andrewliao11.github.io/'>Andrew Liao</a> & <a href='https://www.cs.utoronto.ca/~fidler/'>Sanja Fidler</a>","venue":"International Conference on Learning Representations (ICLR) 2021","pdf":"https://openreview.net/pdf?id=d8Q1mt2Ghw","code":"https://github.com/fidler-lab/social-driving/","tldr":"In order for autonomous vehicles to share the road safely with human drivers, autonomous vehicles must abide by certain 'road rules that human drivers have agreed all road users must follow. We provide empirical evidence that suggests that a scalable alternative to harcoding these rules may be to design multi-agent environments such that agents within the environments discover for themselves that these road rules are mutually beneficial to follow.","bibtex":"/assets/papers/bibtex/social_driving.txt","graphic":"/assets/images/papers/social_driving.gif"}],"others":[{"title":"Stably Accelerating Stiff Quantitative Systems Pharmacology Models: Continuous-Time Echo State Networks as Implicit Machine Learning","authors":"<a href='https://scholar.google.com/citations?user=OxtseY8AAAAJ&hl=en'>Ranjan Anantharaman</a>, <a href='https://github.com/AnasAbdelR'>Anas Abdelrehim</a>, <a href='https://github.com/anandijain'>Anand Jain</a>, <b><u>Avik Pal</u></b>, <a href='https://github.com/dannys4'>Danny Sharp</a>, <a href='https://github.com/utkarsh530'>Utkarsh Rajput</a> & <a href='https://chrisrackauckas.com/'>Chris Rackauckas</a>","venue":"International Federation of Automatic Control (IFAC) 2021","pdf":"https://www.biorxiv.org/content/10.1101/2021.10.10.463808v1","tldr":"We investigate the use of neural network surrogates of stiff QsP models. This technique reduces and accelerates QsP models by training ML approximations on simulations. We describe how common neural network methodologies, such as residual neural networks, recurrent neural networks, and physics/biologically-informed neural networks, are fundamentally related to explicit solvers of ordinary differential equations (ODEs).","bibtex":"/assets/papers/bibtex/implicitml_pharmacology.txt","graphic":"/assets/images/papers/implicitml_pharmacology.png"},{"title":"Composing Modeling and Simulation with Machine Learning in Julia","authors":"<a href='https://chrisrackauckas.com/'>Chris Rackauckas</a>, <a href='https://scholar.google.com/citations?user=OxtseY8AAAAJ&hl=en'>Ranjan Anantharaman</a>, <a href='https://math.mit.edu/~edelman/'>Alan Edelman</a>, <a href='http://shashi.biz/'>Shashi Gowda</a>, <a href='https://github.com/mkg33'>Maja Gwozdz</a>, <a href='https://github.com/anandijain'>Anand Jain</a>, <a href='https://scholar.google.com/citations?user=XCDxnQ0AAAAJ&hl=en'>Chris Laughman</a>, <a href='https://scholar.google.com/citations?user=U3Pj3IAAAAAJ&hl=en'>Yingbo Ma</a>, <a href='https://martinuzzifrancesco.github.io/'>Francesco Martinuzzi</a>, <b><u>Avik Pal</u></b>, <a href='https://github.com/utkarsh530'>Utkarsh Rajput</a>, <a href='https://staticfloat.github.io/'>Elliot Saba</a> & <a href='https://scholar.google.com/citations?user=0zQdH0oAAAAJ&hl=en'>Viral B. Shah</a>","venue":"International Modelica Conference 2021","pdf":"https://arxiv.org/abs/2105.05946","tldr":"We introduce JuliaSim, a high-performance programming environment designed to blend traditional modeling and simulation with machine learning","bibtex":"/assets/papers/bibtex/juliasim.txt","graphic":"/assets/images/papers/juliasim.png"},{"title":"Humor@IITK at SemEval-2021 Task 7: Language Models for Quantifying Humor And Offensiveness","authors":"<b><u>Avik Pal</u></b>, <a href='https://scholar.google.co.in/citations?user=T-NVUmMAAAAJ&hl=en'>Aishwarya Gupta</a>, <a href='https://www.linkedin.com/in/bholeshwar-khurana-6717231a9/?originalSubdomain=in'>Bholeshwar Khurana</a>, <a href='https://www.linkedin.com/in/lakshayt7/'>Lakshay Tyagi</a> & <a href='https://ashutosh-modi.github.io'>Ashutosh Modi</a>","venue":"Proceedings of the 15th International Workshop on Semantic Evaluation (SemEval) 2021","pdf":"https://arxiv.org/abs/2104.00933","code":"https://github.com/aishgupta/Quantifying-Humor-Offensiveness","tldr":"We analyze the effectiveness of various Large Language Models like BERT, ERNIE, DeBERTa, RoBERTa, etc. on the SemEval humor detection and quantification task. Our model ranked 3rd in the humor rating subtask which had nearly 60 participating teams.","bibtex":"/assets/papers/bibtex/semeval2021.txt","graphic":"/assets/images/papers/semeval2021.png"},{"title":"TorchGAN: A Flexible Framework for GAN Training and Evaluation","authors":"<b><u>Avik Pal</u></b> & <a href='https://aniket1998.github.io/'>Aniket Das</a>","venue":"Journal of Open Source Software (JOSS) 2021","pdf":"https://www.theoj.org/joss-papers/joss.02606/10.21105.joss.02606.pdf","code":"https://github.com/torchgan/torchgan","tldr":"TorchGAN is a PyTorch based framework for writing succinct and comprehensible code for training and evaluation of Generative Adversarial Networks. The key features of TorchGAN are its extensibility, built-in support for a large number of popular models, losses and evaluation metrics, and zero overhead compared to vanilla PyTorch.","bibtex":"/assets/papers/bibtex/torchgan.txt","graphic":"/assets/images/papers/torchgan.png"},{"title":"RayTracer.jl: A Differentiable Renderer that supports Parameter Optimization for Scene Reconstruction","authors":"<b><u>Avik Pal</u></b>","venue":"Proceedings of the JuliaCon Conferences 2019","pdf":"https://proceedings.juliacon.org/papers/10.21105/jcon.00037","code":"https://github.com/avik-pal/RayTracer.jl","tldr":"In this paper, we present RayTracer.jl, a renderer in Julia that is fully differentiable using source-to-source Automatic Differentiation (AD). This means that RayTracer not only renders 2D images from 3D scene parameters, but it can be used to optimize for model parameters that generate a target image in a Differentiable Programming (DP) pipeline.","bibtex":"/assets/papers/bibtex/raytracer.txt","graphic":"/assets/images/papers/raytracer.gif"},{"title":"Fashionable Modelling with Flux","authors":"<a href='https://mikeinnes.github.io/'>Mike Innes</a>, <a href='https://staticfloat.github.io/'>Elliot Saba</a>, <a href='https://www.linkedin.com/in/keno-fischer'>Keno Fischer</a>, <a href='https://www.linkedin.com/in/dhairya-gandhi-5402/'>Dhairya Gandhi</a>, <a href=''>M.C. Rudilosso</a>, <a href='https://roboneet.github.io/'>Neethu Mariya Joy</a>, <a href='https://tejank10.github.io/'>Tejan Karmali</a>, <b><u>Avik Pal</u></b> & <a href='https://scholar.google.com/citations?user=0zQdH0oAAAAJ&hl=en'>Viral B. Shah</a>","venue":"NeurIPS Workshop on Systems for Machine Learning 2019","pdf":"https://arxiv.org/pdf/1811.01457.pdf","code":"https://github.com/FluxML/Flux.jl","tldr":"Machine learning as a discipline has seen an incredible surge of interest in recent years due in large part to a perfect storm of new theory and superior tooling. We present a framework named Flux that shows how further refinement of the core ideas of machine learning can yield an environment that is simple, easily modifiable, and performant.","bibtex":"/assets/papers/bibtex/flux.txt","graphic":"/assets/images/papers/flux.png"}]},"teaching":[{"link":"https://github.com/mitmath/18337","school":"/assets/images/others/mit.png","title":"18337J: Parallel Computing and Scientific Machine Learning","semester":"Spring 2023"},{"link":"https://www.cse.iitk.ac.in/users/pmalakar/teaching.html","school":"/assets/images/others/iitk.png","title":"CS633: Parallel Computing","semester":"Spring 2021"},{"link":"https://www.cse.iitk.ac.in/users/piyush/courses/ml_autumn20/index.html","school":"/assets/images/others/iitk.png","title":"CS771: Introduction to Machine Learning","semester":"Fall 2020"}],"talks":[{"link":"https://www.youtube.com/embed/5jF-c_DNSkg","title":"Lux.jl: Explicit Parameterization of Neural Networks in Julia","venue":"JuliaCon 2022","abstract":"Julia already has quite a few well-established Neural Network Frameworks --<a href='https://fluxml.ai/'></a>Flux</a> & <a href='https://denizyuret.github.io/Knet.jl/'></a>KNet</a>-- However, certain design elements -- <strong>Coupled Model and Parameters</strong> & <strong>Internal Mutations</strong> -- associated with these frameworks make them less compiler and user friendly. Making changes to address these problems in the respective frameworks would be too disruptive for users. To address these challenges, we designed Lux, a NN framework."},{"link":"https://www.youtube.com/embed/wXccT45qMgE","title":"Mixing Implicit and Explicit Deep Learning with Skip DEQs","venue":"SciMLCon 2022","abstract":"Implicit deep learning architectures separate the definition of a layer from the description of its solution process. While implicit layers allow features such as depth to adapt to new scenarios and inputs automatically, this adaptivity makes its computational expense challenging to predict. In this talk, we present a framework way to simultaneously achieve the robustness of implicit layers while allowing the reduced computational expense of explicit models."},{"link":"https://www.youtube.com/embed/cdwLJCb45Kk","title":"Differentiable Rendering and its Applications in Deep Learning","venue":"JuliaCon 2019","abstract":"RayTracer.jl is a package designed for differentiable rendering. In this talk, I shall discuss the inverse graphics problem and how differentiable rendering can help solve it. Apart from this we will see how differentiable rendering can be used in differentiable programming pipelines along with neural networks to solve classical deep learning problems."}],"software":[]}`)
  , N = e("h1", {
    id: "about-me",
    tabindex: "-1"
}, [s("About Me "), e("a", {
    class: "header-anchor",
    href: "#about-me",
    "aria-label": 'Permalink to "About Me"'
}, "​")], -1)
  , J = {
    class: "MathJax",
    jax: "SVG",
    style: {
        direction: "ltr",
        position: "relative"
    }
}
  , q = {
    style: {
        overflow: "visible",
        "min-height": "1px",
        "min-width": "1px",
        "vertical-align": "-0.05ex"
    },
    xmlns: "http://www.w3.org/2000/svg",
    width: "2.872ex",
    height: "1.981ex",
    role: "img",
    focusable: "false",
    viewBox: "0 -853.7 1269.6 875.7",
    "aria-hidden": "true"
}
  , O = y('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mn"><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" transform="translate(533,363) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(451,0)"><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="stroke-width:3;"></path></g></g></g></g></g>', 1)
  , H = [O]
  , G = e("a", {
    href: "https://www.eecs.mit.edu",
    target: "_blank",
    rel: "noreferrer"
}, "Electrical Engineering and Computer Science", -1)
  , B = e("a", {
    href: "https://julia.mit.edu",
    target: "_blank",
    rel: "noreferrer"
}, "Julia Lab", -1)
  , z = e("a", {
    href: "https://math.mit.edu/~edelman/",
    target: "_blank",
    rel: "noreferrer"
}, "Dr. Alan Edelman", -1)
  , F = e("a", {
    href: "https://chrisrackauckas.com/",
    target: "_blank",
    rel: "noreferrer"
}, "Dr. Christopher Rackauckas", -1)
  , V = y('<p>In Summer&#39; 22, I was a Student Researcher at <a href="https://ai.google" target="_blank" rel="noreferrer">Google AI</a>, where I worked on <a href="https://github.com/google-research/google-research/tree/master/wildfire_perc_sim" target="_blank" rel="noreferrer">differentiable wildfire simulators in Jax</a> with <a href="https://azhmogin.github.io" target="_blank" rel="noreferrer">Dr. Andrey Zhmoginov</a> and <a href="http://rlily.hu/" target="_blank" rel="noreferrer">Dr. Lily Hu</a>. I completed my undergraduate studies in <a href="https://cse.iitk.ac.in/" target="_blank" rel="noreferrer">Computer Science and Engineering</a> at <a href="https://iitk.ac.in/" target="_blank" rel="noreferrer">Indian Institute of Technology Kanpur</a>.</p><div class="tip custom-block"><p class="custom-block-title">Collaborations</p><p>If you wish to collaborate/have any questions about my research, feel free to <u><a href="mailto:avikpal@mit.edu" target="_blank" rel="noreferrer">shoot me an email</a></u>!</p></div><div class="danger custom-block"><p class="custom-block-title">Summer Internships</p><p>I am seeking a summer internship opportunity for Summer &#39;24. If you have any openings for a research position, do <u><a href="mailto:avikpal@mit.edu" target="_blank" rel="noreferrer">reach out to me</a></u>!</p></div><hr><h1 id="news" tabindex="-1">News <a class="header-anchor" href="#news" aria-label="Permalink to &quot;News&quot;">​</a></h1>', 5)
  , W = ["innerHTML"]
  , K = e("br", null, null, -1)
  , U = e("br", null, null, -1)
  , X = e("br", null, null, -1)
  , Y = ["innerHTML"]
  , Z = e("hr", null, null, -1)
  , $ = e("h1", {
    id: "experience",
    tabindex: "-1"
}, [s("Experience "), e("a", {
    class: "header-anchor",
    href: "#experience",
    "aria-label": 'Permalink to "Experience"'
}, "​")], -1)
  , ee = e("h2", {
    id: "current-position",
    tabindex: "-1"
}, [s("Current Position "), e("a", {
    class: "header-anchor",
    href: "#current-position",
    "aria-label": 'Permalink to "Current Position"'
}, "​")], -1)
  , te = e("b", null, "Thesis:", -1)
  , ae = ["href"]
  , ne = {
    key: 0
}
  , ie = e("b", null, "Advisor(s):", -1)
  , se = [ie]
  , oe = {
    key: 1
}
  , re = ["href"]
  , le = e("b", null, "GPA:", -1)
  , ue = e("h2", {
    id: "education",
    tabindex: "-1"
}, [s("Education "), e("a", {
    class: "header-anchor",
    href: "#education",
    "aria-label": 'Permalink to "Education"'
}, "​")], -1)
  , he = e("b", null, "Thesis:", -1)
  , ce = ["href"]
  , de = {
    key: 0
}
  , pe = e("b", null, "Advisor(s):", -1)
  , fe = [pe]
  , me = {
    key: 1
}
  , ge = ["href"]
  , be = e("b", null, "GPA:", -1)
  , _e = e("br", null, null, -1)
  , ke = e("h2", {
    id: "past-positions",
    tabindex: "-1"
}, [s("Past Positions "), e("a", {
    class: "header-anchor",
    href: "#past-positions",
    "aria-label": 'Permalink to "Past Positions"'
}, "​")], -1)
  , ve = ["href"]
  , we = y('<hr><h1 id="ongoing-projects" tabindex="-1">Ongoing Projects <a class="header-anchor" href="#ongoing-projects" aria-label="Permalink to &quot;Ongoing Projects&quot;">​</a></h1><h2 id="boundary-value-problems" tabindex="-1">Boundary Value Problems <a class="header-anchor" href="#boundary-value-problems" aria-label="Permalink to &quot;Boundary Value Problems&quot;">​</a></h2><ul><li>Developing fast and accurate solvers for Boundary Value Problems (BVPs) in Julia.</li><li>Exploiting structural sparsity with automatic differentiation for fast Jacobian computation for BVPs.</li><li>Embedding non-linear equality constraints in neural network dynamics using BVPs.</li></ul><h2 id="complementarity-problems" tabindex="-1">Complementarity Problems <a class="header-anchor" href="#complementarity-problems" aria-label="Permalink to &quot;Complementarity Problems&quot;">​</a></h2><ul><li>Developing solvers for Complementarity Problems (CPs) in Julia.</li><li>Embedding general inequality constraints in neural network dynamics using CPs.</li><li>Developing adjoint equations for efficient back-propagation through solutions of CPs.</li></ul><hr><h1 id="research" tabindex="-1">Research <a class="header-anchor" href="#research" aria-label="Permalink to &quot;Research&quot;">​</a></h1><p>My main research interest involves Scientific Machine Learning -- combining Deep Learning with Differential Equations. I focus on exploring their applications in tackling scalability issues with standard scientific computing models.</p><p>Occasionally, I explore domains outside my major area of focus and have published a few works in (Multi-Agent) Reinforcement Learning, Differentiable Graphics, Deep Learning Systems, etc.</p><h2 id="most-significant-bits" tabindex="-1">Most Significant Bits <a class="header-anchor" href="#most-significant-bits" aria-label="Permalink to &quot;Most Significant Bits&quot;">​</a></h2>', 11)
  , xe = ["innerHTML"]
  , ye = e("br", null, null, -1)
  , Ae = ["href"]
  , Te = e("i", {
    class: "fa-regular fa-file-pdf fa-xl"
}, null, -1)
  , Pe = [Te]
  , Me = ["href"]
  , Qe = e("i", {
    class: "fa-solid fa-code fa-xl"
}, null, -1)
  , Se = [Qe]
  , Ee = e("br", null, null, -1)
  , Ie = e("br", null, null, -1)
  , Ce = e("br", null, null, -1)
  , je = e("br", null, null, -1)
  , De = ["data"]
  , Le = e("h2", {
    id: "less-significant-bits",
    tabindex: "-1"
}, [s("Less Significant Bits "), e("a", {
    class: "header-anchor",
    href: "#less-significant-bits",
    "aria-label": 'Permalink to "Less Significant Bits"'
}, "​")], -1)
  , Re = ["innerHTML"]
  , Ne = e("br", null, null, -1)
  , Je = ["href"]
  , qe = e("i", {
    class: "fa-regular fa-file-pdf fa-xl"
}, null, -1)
  , Oe = [qe]
  , He = ["href"]
  , Ge = e("i", {
    class: "fa-solid fa-code fa-xl"
}, null, -1)
  , Be = [Ge]
  , ze = e("br", null, null, -1)
  , Fe = e("br", null, null, -1)
  , Ve = e("br", null, null, -1)
  , We = e("br", null, null, -1)
  , Ke = ["data"]
  , Ue = e("hr", null, null, -1)
  , Xe = e("h1", {
    id: "teaching",
    tabindex: "-1"
}, [s("Teaching "), e("a", {
    class: "header-anchor",
    href: "#teaching",
    "aria-label": 'Permalink to "Teaching"'
}, "​")], -1)
  , Ye = ["href"]
  , Ze = e("br", null, null, -1)
  , $e = y('<hr><h1 id="open-source-software" tabindex="-1">Open Source Software <a class="header-anchor" href="#open-source-software" aria-label="Permalink to &quot;Open Source Software&quot;">​</a></h1><p>For a list of open source softwares I have written and maintain see <a href="https://github.com/avik-pal" target="_blank" rel="noreferrer">my GitHub Profile</a></p><hr><h1 id="talks" tabindex="-1">Talks <a class="header-anchor" href="#talks" aria-label="Permalink to &quot;Talks&quot;">​</a></h1>', 5)
  , et = ["src"]
  , tt = e("br", null, null, -1)
  , at = e("br", null, null, -1)
  , nt = e("br", null, null, -1)
  , it = ["innerHTML"]
  , ut = JSON.parse('{"title":"Academic Website","description":"","frontmatter":{"title":"Academic Website","prev":false,"next":false,"aside":false},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1692121539000}')
  , st = {
    name: "index.md"
}
  , ht = Object.assign(st, {
    setup(ot) {
        const A = R(0);
        return (rt,M)=>{
            const v = d("v-img")
              , S = d("mn")
              , Q = d("mi")
              , E = d("mrow")
              , I = d("msup")
              , C = d("math")
              , j = d("mjx-assistive-mml")
              , u = d("v-col")
              , r = d("v-row")
              , D = d("v-btn")
              , b = d("v-container")
              , k = d("v-expansion-panel")
              , T = d("v-expansion-panel-text")
              , P = d("v-expansion-panels")
              , w = d("v-card-text")
              , x = d("v-card");
            return i(),
            l("div", null, [a(v, {
                src: "/assets/images/others/me2.jpeg",
                alt: "Avik Pal",
                style: {
                    "border-radius": "50%",
                    width: "33%"
                },
                class: "center"
            }), N, e("p", null, [s("I am a "), e("mjx-container", J, [(i(),
            l("svg", q, H)), a(j, {
                unselectable: "on",
                display: "inline",
                style: {
                    top: "0px",
                    left: "0px",
                    clip: "rect(1px, 1px, 1px, 1px)",
                    "-webkit-touch-callout": "none",
                    "-webkit-user-select": "none",
                    "-khtml-user-select": "none",
                    "-moz-user-select": "none",
                    "-ms-user-select": "none",
                    "user-select": "none",
                    position: "absolute",
                    padding: "1px 0px 0px 0px",
                    border: "0px",
                    display: "block",
                    width: "auto",
                    overflow: "hidden"
                }
            }, {
                default: t(()=>[a(C, {
                    xmlns: "http://www.w3.org/1998/Math/MathML"
                }, {
                    default: t(()=>[a(I, null, {
                        default: t(()=>[a(S, null, {
                            default: t(()=>[s("3")]),
                            _: 1
                        }), a(E, {
                            "data-mjx-texclass": "ORD"
                        }, {
                            default: t(()=>[a(Q, null, {
                                default: t(()=>[s("r")]),
                                _: 1
                            }), a(Q, null, {
                                default: t(()=>[s("d")]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                })]),
                _: 1
            })]), s(" year Ph.D. Student in "), G, s(" at MIT. I work in the "), B, s(" under the supervision of "), z, s(" and "), F, s(". My research interests are in the application of numerical methods and scientific computing in deep learning.")]), V, a(b, null, {
                default: t(()=>[(i(!0),
                l(p, null, m(h(c).news, (n,_)=>(i(),
                f(r, null, {
                    default: t(()=>[_ < 5 ? (i(),
                    l(p, {
                        key: 0
                    }, [a(u, {
                        cols: "2"
                    }, {
                        default: t(()=>[e("b", null, o(n.date), 1)]),
                        _: 2
                    }, 1024), a(u, null, {
                        default: t(()=>[e("div", {
                            innerHTML: n.text
                        }, null, 8, W)]),
                        _: 2
                    }, 1024)], 64)) : g("", !0)]),
                    _: 2
                }, 1024))), 256)), K, a(D, {
                    variant: "outlined",
                    onClick: M[0] || (M[0] = n=>A.value++)
                }, {
                    default: t(()=>[A.value % 2 ? (i(),
                    l(p, {
                        key: 0
                    }, [s(" Hide ")], 64)) : (i(),
                    l(p, {
                        key: 1
                    }, [s(" Show More ")], 64))]),
                    _: 1
                }), U, X, A.value % 2 ? (i(!0),
                l(p, {
                    key: 0
                }, m(h(c).news, (n,_)=>(i(),
                f(r, null, {
                    default: t(()=>[_ >= 5 ? (i(),
                    l(p, {
                        key: 0
                    }, [a(u, {
                        cols: "2"
                    }, {
                        default: t(()=>[e("b", null, o(n.date), 1)]),
                        _: 2
                    }, 1024), a(u, null, {
                        default: t(()=>[e("div", {
                            innerHTML: n.text
                        }, null, 8, Y)]),
                        _: 2
                    }, 1024)], 64)) : g("", !0)]),
                    _: 2
                }, 1024))), 256)) : g("", !0)]),
                _: 1
            }), Z, $, ee, a(b, null, {
                default: t(()=>[a(r, null, {
                    default: t(()=>[a(u, {
                        cols: "8"
                    }, {
                        default: t(()=>[a(r, null, {
                            default: t(()=>[e("h4", null, o(h(c).positions.current.company), 1)]),
                            _: 1
                        }), a(r, null, {
                            default: t(()=>[s(o(h(c).positions.current.subject), 1)]),
                            _: 1
                        }), a(r, null, {
                            default: t(()=>[s(o(h(c).positions.current.position), 1)]),
                            _: 1
                        }), h(c).positions.current.thesis ? (i(),
                        f(r, {
                            key: 0
                        }, {
                            default: t(()=>[te, s("   "), e("a", {
                                href: h(c).positions.current.thesis.link
                            }, [e("i", null, o(h(c).positions.current.thesis.title), 1)], 8, ae)]),
                            _: 1
                        })) : g("", !0), (i(!0),
                        l(p, null, m(h(c).positions.current.advisor, (n,_)=>(i(),
                        f(r, null, {
                            default: t(()=>[_ == 0 ? (i(),
                            l("div", ne, se)) : (i(),
                            l("div", oe, "                      ")), s("   "), e("a", {
                                href: n.link
                            }, [e("i", null, o(n.name), 1)], 8, re)]),
                            _: 2
                        }, 1024))), 256))]),
                        _: 1
                    }), a(u, null, {
                        default: t(()=>[a(r, null, {
                            default: t(()=>[e("i", null, o(h(c).positions.current.time), 1)]),
                            _: 1
                        }), a(r, null, {
                            default: t(()=>[s(o(h(c).positions.current.location), 1)]),
                            _: 1
                        }), h(c).positions.current.GPA ? (i(),
                        f(r, {
                            key: 0
                        }, {
                            default: t(()=>[le, s("   "), e("i", null, o(h(c).positions.current.GPA), 1)]),
                            _: 1
                        })) : g("", !0)]),
                        _: 1
                    })]),
                    _: 1
                })]),
                _: 1
            }), ue, (i(!0),
            l(p, null, m(h(c).positions.education, n=>(i(),
            l(p, null, [a(b, null, {
                default: t(()=>[a(r, null, {
                    default: t(()=>[a(u, {
                        cols: "8"
                    }, {
                        default: t(()=>[a(r, null, {
                            default: t(()=>[e("h4", null, o(n.school), 1)]),
                            _: 2
                        }, 1024), a(r, null, {
                            default: t(()=>[s(o(n.subject), 1)]),
                            _: 2
                        }, 1024), a(r, null, {
                            default: t(()=>[s(o(n.degree), 1)]),
                            _: 2
                        }, 1024), n.thesis ? (i(),
                        f(r, {
                            key: 0
                        }, {
                            default: t(()=>[he, s("   "), e("a", {
                                href: n.thesis.link
                            }, [e("i", null, o(n.thesis.title), 1)], 8, ce)]),
                            _: 2
                        }, 1024)) : g("", !0), (i(!0),
                        l(p, null, m(n.advisor, (_,L)=>(i(),
                        f(r, null, {
                            default: t(()=>[L == 0 ? (i(),
                            l("div", de, fe)) : (i(),
                            l("div", me, "                      ")), s("   "), e("a", {
                                href: _.link
                            }, [e("i", null, o(_.name), 1)], 8, ge)]),
                            _: 2
                        }, 1024))), 256))]),
                        _: 2
                    }, 1024), a(u, null, {
                        default: t(()=>[a(r, null, {
                            default: t(()=>[e("i", null, o(n.time), 1)]),
                            _: 2
                        }, 1024), a(r, null, {
                            default: t(()=>[s(o(n.location), 1)]),
                            _: 2
                        }, 1024), n.GPA ? (i(),
                        f(r, {
                            key: 0
                        }, {
                            default: t(()=>[be, s("   "), e("i", null, o(n.GPA), 1)]),
                            _: 2
                        }, 1024)) : g("", !0)]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024)]),
                _: 2
            }, 1024), _e], 64))), 256)), ke, a(b, null, {
                default: t(()=>[(i(!0),
                l(p, null, m(h(c).positions.work, n=>(i(),
                f(r, null, {
                    default: t(()=>[a(u, {
                        cols: "2"
                    }, {
                        default: t(()=>[e("b", null, o(n.time), 1)]),
                        _: 2
                    }, 1024), a(u, {
                        cols: "4"
                    }, {
                        default: t(()=>[s(o(n.position), 1)]),
                        _: 2
                    }, 1024), a(u, {
                        cols: "3"
                    }, {
                        default: t(()=>[e("a", {
                            href: n.link
                        }, o(n.company), 9, ve)]),
                        _: 2
                    }, 1024), a(u, {
                        cols: "3"
                    }, {
                        default: t(()=>[s(o(n.location), 1)]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024))), 256))]),
                _: 1
            }), we, a(b, null, {
                default: t(()=>[(i(!0),
                l(p, null, m(h(c).publications.significant, n=>(i(),
                f(r, null, {
                    default: t(()=>[a(u, {
                        cols: "4"
                    }, {
                        default: t(()=>[a(v, {
                            src: n.graphic,
                            width: "100%",
                            "max-height": "224px"
                        }, null, 8, ["src"])]),
                        _: 2
                    }, 1024), a(u, null, {
                        default: t(()=>[a(x, null, {
                            default: t(()=>[a(w, null, {
                                default: t(()=>[e("h4", null, o(n.title), 1), e("div", {
                                    innerHTML: n.authors
                                }, null, 8, xe), e("b", null, [e("i", null, o(n.venue), 1)]), ye, e("a", {
                                    href: n.pdf
                                }, Pe, 8, Ae), s("    "), n.code ? (i(),
                                l("a", {
                                    key: 0,
                                    href: n.code
                                }, Se, 8, Me)) : g("", !0), Ee, Ie, a(P, null, {
                                    default: t(()=>[a(k, {
                                        title: "TL;DR",
                                        text: n.tldr
                                    }, null, 8, ["text"]), Ce, je, a(k, {
                                        title: "Citation"
                                    }, {
                                        default: t(()=>[a(T, null, {
                                            default: t(()=>[e("object", {
                                                data: n.bibtex,
                                                width: "100%"
                                            }, null, 8, De)]),
                                            _: 2
                                        }, 1024)]),
                                        _: 2
                                    }, 1024)]),
                                    _: 2
                                }, 1024)]),
                                _: 2
                            }, 1024)]),
                            _: 2
                        }, 1024)]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024))), 256))]),
                _: 1
            }), Le, a(b, null, {
                default: t(()=>[(i(!0),
                l(p, null, m(h(c).publications.others, n=>(i(),
                f(r, null, {
                    default: t(()=>[a(u, {
                        cols: "4"
                    }, {
                        default: t(()=>[a(v, {
                            src: n.graphic,
                            width: "100%",
                            "max-height": "224px"
                        }, null, 8, ["src"])]),
                        _: 2
                    }, 1024), a(u, null, {
                        default: t(()=>[a(x, null, {
                            default: t(()=>[a(w, null, {
                                default: t(()=>[e("h4", null, o(n.title), 1), e("div", {
                                    innerHTML: n.authors
                                }, null, 8, Re), e("b", null, [e("i", null, o(n.venue), 1)]), Ne, e("a", {
                                    href: n.pdf
                                }, Oe, 8, Je), s("    "), n.code ? (i(),
                                l("a", {
                                    key: 0,
                                    href: n.code
                                }, Be, 8, He)) : g("", !0), ze, Fe, a(P, null, {
                                    default: t(()=>[a(k, {
                                        title: "TL;DR",
                                        text: n.tldr
                                    }, null, 8, ["text"]), Ve, We, a(k, {
                                        title: "Citation"
                                    }, {
                                        default: t(()=>[a(T, null, {
                                            default: t(()=>[e("object", {
                                                data: n.bibtex,
                                                width: "100%"
                                            }, null, 8, Ke)]),
                                            _: 2
                                        }, 1024)]),
                                        _: 2
                                    }, 1024)]),
                                    _: 2
                                }, 1024)]),
                                _: 2
                            }, 1024)]),
                            _: 2
                        }, 1024)]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024))), 256))]),
                _: 1
            }), Ue, Xe, a(b, null, {
                default: t(()=>[(i(!0),
                l(p, null, m(h(c).teaching, n=>(i(),
                f(r, null, {
                    default: t(()=>[a(u, {
                        cols: "2"
                    }, {
                        default: t(()=>[a(v, {
                            src: n.school,
                            width: "100%",
                            "max-height": "88px"
                        }, null, 8, ["src"])]),
                        _: 2
                    }, 1024), a(u, null, {
                        default: t(()=>[a(x, null, {
                            default: t(()=>[a(w, null, {
                                default: t(()=>[e("a", {
                                    href: n.link
                                }, [e("b", null, o(n.title), 1)], 8, Ye), Ze, e("b", null, [e("i", null, o(n.semester), 1)])]),
                                _: 2
                            }, 1024)]),
                            _: 2
                        }, 1024)]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024))), 256))]),
                _: 1
            }), $e, a(b, null, {
                default: t(()=>[(i(!0),
                l(p, null, m(h(c).talks, n=>(i(),
                f(r, null, {
                    default: t(()=>[a(u, {
                        cols: "4"
                    }, {
                        default: t(()=>[e("iframe", {
                            src: n.link,
                            width: "100%",
                            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        }, null, 8, et)]),
                        _: 2
                    }, 1024), a(u, null, {
                        default: t(()=>[a(x, null, {
                            default: t(()=>[a(w, null, {
                                default: t(()=>[e("h4", null, o(n.title), 1), tt, e("b", null, [e("i", null, o(n.venue), 1)]), at, nt, a(P, null, {
                                    default: t(()=>[a(k, {
                                        title: "Abstract"
                                    }, {
                                        default: t(()=>[a(T, null, {
                                            default: t(()=>[e("div", {
                                                innerHTML: n.abstract
                                            }, null, 8, it)]),
                                            _: 2
                                        }, 1024)]),
                                        _: 2
                                    }, 1024)]),
                                    _: 2
                                }, 1024)]),
                                _: 2
                            }, 1024)]),
                            _: 2
                        }, 1024)]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024))), 256))]),
                _: 1
            })])
        }
    }
});
export {ut as __pageData, ht as default};

