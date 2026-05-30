import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Cpu,
  DollarSign,
  FileText,
  Globe,
  Info,
  Layers,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Users,
  X,
  Zap
} from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAboutTab, setActiveAboutTab] = useState('intro');
  const [activeLink, setActiveLink] = useState('#home');

  // 1. Tracks & Topics Data
  const tracks = [
    {
      id: "Track I",
      title: "Signal Processing",
      topics: ["Digital Signal Processing", "Adaptive Signal Processing", "Information Processing and Coding", "Image Synthesis", "Bio Medical Signals", "Pattern Recognition", "Multirate Signal Processing"],
      icon: <Zap size={24} className="text-emerald-600" />
    },
    {
      id: "Track II",
      title: "VLSI & Embedded Systems",
      topics: ["Micro Electronics", "Embedded Systems", "Industrial Informatics and Robotics", "Low Power VLSI Design", "Device Circuit Co-design", "Nano scale device design", "Device to circuit Co-design"],
      icon: <Cpu size={24} className="text-emerald-600" />
    },
    {
      id: "Track III",
      title: "Internet of Things",
      topics: ["Sensors and Actuators", "Human Machine Interface", "Industrial Internet of Things", "Industry 4.0", "Cyber Physical System", "Resource Constraint devices", "Automation", "Green Technology", "Computational Intelligent System"],
      icon: <Globe size={24} className="text-emerald-600" />
    },
    {
      id: "Track IV",
      title: "Communication & Networking Systems",
      topics: ["Wireless & Mobile Communications", "Information & Network Security", "RF and Microwave", "Wireless Sensor Networks", "Green Networks", "Cryptography", "5G & 6G"],
      icon: <Layers size={24} className="text-emerald-600" />
    }
  ];

  // 2. Important Dates Data
  const importantDates = [
    { label: "Submission Deadline", date: "April 06, 2027", highlight: true },
    { label: "Acceptance Alert", date: "May 06, 2027", highlight: false },
    { label: "Registration Start Line", date: "May 20, 2027", highlight: false },
    { label: "Final Closing/Camera Ready", date: "May 25, 2027", highlight: false }
  ];

  // 3. Registration Fee Structure
  const registrationFees = [
    { category: "Student Delegate Tier", fee: "Rs. 8000" },
    { category: "Academic Institution Delegate Tier", fee: "Rs. 10000" },
    { category: "Industry Delegate Tier", fee: "Rs. 12000" }
  ];

  // 4. Sponsorship Tier Structure
  const sponsorships = [
    { tier: "Diamond Tier", cost: "1 Lakh or more", color: "border-cyan-200 bg-cyan-50 text-cyan-700", benefits: "Prominent logo placement, keynote speaking opportunity, premium booth, key networking options, extensive brand integration." },
    { tier: "Golden Tier", cost: "50 Thousand or more", color: "border-amber-200 bg-amber-50 text-amber-700", benefits: "Logo placement in main hall, dedicated exhibition space, networking options." },
    { tier: "Silver Tier", cost: "20 Thousand or more", color: "border-slate-300 bg-slate-50 text-slate-700", benefits: "Showcase services/products in shared space, logo in digital materials." },
    { tier: "Bronze Tier", cost: "Others", color: "border-orange-200 bg-orange-50 text-orange-700", benefits: "Name listed in proceedings and sponsors board." }
  ];

  // 5. Committee Data
  const technicalAdvisoryCommittee = [
    "Prof. R. K. Sharma", "Prof. Rajoo Pandey", "Prof. O.P. Sahu", 
    "Prof. Umesh Ghanekar", "Prof. Arvind Kumar", "Prof. Rajender Kumar", 
    "Prof. Ashutosh Kumar Singh (Director, IIIT Bhopal)", "Prof. Dharmender Singh (Director, IIIT Vadodara)", 
    "Prof. Shyam Lal (NIT Surathkal)", "Dr. Dushyant Kumar Singh (MNNIT Allahabad)", 
    "Dr. Atul Kumar Nishad (NIT Warangal)", "Dr. Mukesh Kumar (TIT&S Bhiwani)"
  ];

  const handleNavClick = (href) => {
    setActiveLink(href);
    setIsMenuOpen(false);
  };

  const getNavLinkClass = (href) => {
    return `transition font-medium ${activeLink === href ? 'text-blue-600' : 'text-slate-600 hover:text-blue-500'}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200 selection:text-slate-900">
      
      {/* HEADER & NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-sm border border-slate-200 overflow-hidden">
                <img src="/nit-logo.png" alt="NIT KKR Logo" className="w-full h-full object-contain" onError={(e)=>{e.target.style.display='none'}}/>
              </div>
              <div>
                <span className="text-xl font-black tracking-wider text-emerald-700 block">ICVDIA-27</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest hidden sm:block">NIT Kurukshetra</span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-6 text-sm">
              <a href="#home" onClick={() => handleNavClick('#home')} className={getNavLinkClass('#home')}>Home</a>
              <a href="#about" onClick={() => handleNavClick('#about')} className={getNavLinkClass('#about')}>About</a>
              <a href="#tracks" onClick={() => handleNavClick('#tracks')} className={getNavLinkClass('#tracks')}>Tracks</a>
              <a href="#dates" onClick={() => handleNavClick('#dates')} className={getNavLinkClass('#dates')}>Dates</a>
              <a href="#guidelines" onClick={() => handleNavClick('#guidelines')} className={getNavLinkClass('#guidelines')}>Guidelines</a>
              <a href="#committee" onClick={() => handleNavClick('#committee')} className={getNavLinkClass('#committee')}>Committee</a>
              <a href="#registration" onClick={() => handleNavClick('#registration')} className={getNavLinkClass('#registration')}>Registration</a>
              <a href="#sponsorship" className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full font-bold transition shadow-md shadow-emerald-500/20">Sponsor Us</a>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600 hover:text-slate-900">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg">
            <a href="#home" onClick={() => handleNavClick('#home')} className={`block py-2 ${getNavLinkClass('#home')}`}>Home</a>
            <a href="#about" onClick={() => handleNavClick('#about')} className={`block py-2 ${getNavLinkClass('#about')}`}>About</a>
            <a href="#tracks" onClick={() => handleNavClick('#tracks')} className={`block py-2 ${getNavLinkClass('#tracks')}`}>Tracks</a>
            <a href="#dates" onClick={() => handleNavClick('#dates')} className={`block py-2 ${getNavLinkClass('#dates')}`}>Dates</a>
            <a href="#guidelines" onClick={() => handleNavClick('#guidelines')} className={`block py-2 ${getNavLinkClass('#guidelines')}`}>Guidelines</a>
            <a href="#committee" onClick={() => handleNavClick('#committee')} className={`block py-2 ${getNavLinkClass('#committee')}`}>Committee</a>
            <a href="#registration" onClick={() => handleNavClick('#registration')} className={`block py-2 ${getNavLinkClass('#registration')}`}>Registration</a>
            <a href="#sponsorship" onClick={() => handleNavClick('#sponsorship')} className="block py-2 text-emerald-600 font-bold">Sponsor Us</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="pt-32 pb-20 relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]" style={{ backgroundSize: "4rem 4rem", WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)", maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)" }}></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-6 uppercase tracking-wider mx-auto">
            <Layers size={14} /> Hybrid Mode Conference
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            International Conference on <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              VLSI Design for IoT Applications
            </span> <br />
            <span className="text-2xl sm:text-4xl text-slate-500 font-bold tracking-normal">(ICVDIA-27)</span>
          </h1>

          <p className="text-lg md:text-xl text-emerald-700 font-medium max-w-2xl mx-auto mb-8 border-y border-emerald-100 py-3 flex items-center justify-center gap-2">
            <Leaf size={20}/> Core Theme: "Technology for a Green World"
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10 text-sm">
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <Calendar className="text-emerald-600 shrink-0" size={20} />
              <div className="text-left">
                <span className="text-slate-500 block text-xs uppercase tracking-wider">Conference Dates</span>
                <span className="font-semibold text-slate-900">June 09-11, 2027</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <MapPin className="text-emerald-600 shrink-0" size={20} />
              <div className="text-left">
                <span className="text-slate-500 block text-xs uppercase tracking-wider">Venue</span>
                <span className="font-semibold text-slate-900">Dept. of ECE, NIT Kurukshetra, Haryana, India</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#dates" className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold px-6 py-3 rounded-lg hover:opacity-95 transition shadow-lg shadow-emerald-500/20">
              View Deadlines
            </a>
            <a href="#guidelines" className="bg-white border border-slate-300 text-slate-700 font-medium px-6 py-3 rounded-lg hover:bg-slate-50 transition shadow-sm">
              Submission Guidelines
            </a>
          </div>
        </div>
      </section>

      {/* TABBED ABOUT SECTION */}
      <section id="about" className="py-20 max-w-6xl mx-auto px-4 border-t border-slate-200">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">About the Conference Context</h2>
          <p className="text-slate-600 text-sm">Get insights into the organizing institute and foundational intent.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 border-b border-slate-200 mb-8 pb-2">
          <button 
            onClick={() => setActiveAboutTab('intro')} 
            className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${activeAboutTab === 'intro' ? 'bg-emerald-50 border border-emerald-200 text-emerald-700' : 'bg-transparent border border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100'}`}
          >
            About the Conference
          </button>
          <button 
            onClick={() => setActiveAboutTab('dept')} 
            className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${activeAboutTab === 'dept' ? 'bg-emerald-50 border border-emerald-200 text-emerald-700' : 'bg-transparent border border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100'}`}
          >
            About the Department
          </button>
          <button 
            onClick={() => setActiveAboutTab('location')} 
            className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${activeAboutTab === 'location' ? 'bg-emerald-50 border border-emerald-200 text-emerald-700' : 'bg-transparent border border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100'}`}
          >
            Destination Reachability
          </button>
        </div>

        <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl shadow-sm min-h-55">
          {activeAboutTab === 'intro' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><Info size={18} className="text-emerald-600"/> ICVDIA-27 Overview</h3>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                The International Conference on VLSI Design for IoT Applications (ICVDIA-27) aims to provide an opportune forum and vibrant platform for Researchers, Academicians, Scientists, and Industrial Practitioners. 
              </p>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                Hosted by the Department of Electronics and Communication Engineering at NIT Kurukshetra, the conference focuses on sharing original research work, patents, findings, and practical development experiences addressing the challenges and emerging issues confronting our nation, perfectly aligned with the theme "Technology for a Green World".
              </p>
            </div>
          )}

          {activeAboutTab === 'dept' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><Layers size={18} className="text-emerald-600"/> Department of ECE</h3>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                The Department offers 4-year B.Tech programs in ECE, IIOT, and Microelectronics & VLSI Engineering with diverse electives leading to sub-specializations in Communication, VLSI, IoT, Signal, and Image Processing.
              </p>
              <p className="leading-relaxed text-sm md:text-base font-medium text-emerald-700 flex items-start gap-2">
                <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                M.Tech. and Ph.D. programs are offered to provide vast research opportunities in niche ECE streams. Various active research projects funded by MHRD and DRDO are currently being pursued in the Department.
              </p>
            </div>
          )}

          {activeAboutTab === 'location' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><MapPin size={18} className="text-emerald-600"/> Reaching Kurukshetra</h3>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base mb-4">
                Kurukshetra is deeply steeped in history and mythology. It is revered all over the country for its sacred association with the Vedas and where Lord Krishna delivered the divine message of "Shrimad Bhagwad Gita".
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-100 pt-4 text-xs text-slate-600">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200"><strong className="text-emerald-700 block mb-1 text-sm">🚆 Rail Link</strong> Delhi-Karnal-Ambala section. Campus is ~4 km from Kurukshetra station.</div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200"><strong className="text-emerald-700 block mb-1 text-sm">🛣️ Roadway</strong> Located on NH1 (Delhi-Chandigarh-Amritsar route). Campus is ~10 km from Pipli bypass.</div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200"><strong className="text-emerald-700 block mb-1 text-sm">✈️ Airways</strong> Chandigarh Airport (80 Km) & Delhi International Airport (160 Km).</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CONFERENCE TRACKS */}
      <section id="tracks" className="py-20 bg-slate-100/50 border-y border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 opacity-[0.03] pointer-events-none text-emerald-900">
          <Cpu size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Logistical Track Modules</h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              Original research articles are invited across these four precise technological tracking verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tracks.map((track) => (
              <div key={track.id} className="p-6 md:p-8 bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 transition-all flex gap-4 md:gap-6 group shadow-sm hover:shadow-md">
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center border border-emerald-100 group-hover:bg-emerald-100 transition-colors">
                    {track.icon}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">{track.id}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition">{track.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {track.topics.map((topic, index) => (
                      <span key={index} className="bg-slate-50 border border-slate-200 text-slate-700 text-[11px] px-2.5 py-1 rounded-md font-medium uppercase tracking-wide">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT DATES TIMELINE & PENALTY METRICS */}
      <section id="dates" className="py-20 max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Registration & Late Fees</h2>
          <p className="text-slate-600 text-sm">Track key milestones and exact penalty rules.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {importantDates.map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-xl border ${item.highlight ? 'bg-emerald-50 border-emerald-200 shadow-sm' : 'bg-white border-slate-200 shadow-sm'}`}
              >
                <span className={`text-base font-semibold ${item.highlight ? 'text-emerald-700' : 'text-slate-800'}`}>
                  {item.label}
                </span>
                <span className="text-sm font-mono font-bold text-slate-700 mt-2 sm:mt-0 flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  <Calendar size={14} className="text-emerald-600"/> {item.date}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-200 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 bg-orange-400 w-full h-1"></div>
            <h3 className="text-lg font-bold text-orange-800 mb-4 flex items-center gap-2">
              <Info size={18} /> Penalty Rules
            </h3>
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0"></div>
                <span><strong>Late Fee:</strong> Rs. 1000/- penalty applies strictly after the final registration deadline.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0"></div>
                <span><strong>On-spot Overhead:</strong> Rs. 1200/- (This is inclusive of all standard late charges).</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* AUTHORS SUBMISSION GUIDELINES */}
      <section id="guidelines" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Manuscript Standards & Parameters</h2>
            <p className="text-slate-600 text-sm">Please follow exact structural mappings for successful review processing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-emerald-700 mb-6 flex items-center gap-2 border-b border-slate-100 pb-3">
                <FileText size={20}/> Manuscript Mapping
              </h3>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0"/>
                  <span><strong>IEEE Structure:</strong> Strict IEEE structure mapping required. Extended peer-reviewed papers map directly to indexing positions inside <strong>UGC Approved / SCOPUS / Web of Science</strong> journal engines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0"/>
                  <span><strong>File Format:</strong> Submit ONLY electronic <strong>.doc / .docx</strong> files.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0"/>
                  <span>
                    <strong>Submission Channel:</strong> Directly email to <a href="mailto:icvdia27@gmail.com" className="text-emerald-600 hover:underline font-medium">icvdia27@gmail.com</a>. 
                    <br/><span className="text-xs text-amber-600 mt-1 block">⚠️ Subject line MUST explicitly state the Track Name.</span>
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-emerald-700 mb-6 flex items-center gap-2 border-b border-slate-100 pb-3">
                <BookOpen size={20}/> Abstract Parameters
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Density & Length</strong>
                  200-250 words maximum density. Single page ceiling constraint.
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Typography</strong>
                  Times New Roman baseline throughout the manuscript.
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Title Format</strong>
                  14pt bold, centered alignment.
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Affiliations</strong>
                  10pt italics, centered alignment.
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 sm:col-span-2">
                  <strong className="text-slate-900 block mb-1">Author Details</strong>
                  12pt centered. Presenting author must be underlined, denoted with an asterisk (*), and include the corresponding email ID.
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 sm:col-span-2">
                  <strong className="text-slate-900 block mb-1">Content Body & Layout</strong>
                  11pt font size with 1.5 line spacing. Absolutely NO page numbering, headers, or footers allowed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVISORY AND EXECUTIVE COMMITTEE DIRECTORY */}
      <section id="committee" className="py-20 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Advisory & Executive Committee</h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Executive Hierarchy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-2xl border border-emerald-200 text-center relative flex flex-col items-center shadow-sm">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest z-10 border border-emerald-200">Chief Patron</div>
              <img src="/brahmjit.jpg" alt="Prof. Brahmjit Singh" className="w-32 h-32 rounded-full object-contain bg-white border-4 border-white shadow-md mb-4 mt-2" />
              <h3 className="text-xl font-bold text-slate-900 mt-2">Prof. Brahmjit Singh</h3>
              <p className="text-emerald-700 font-medium text-sm mt-1">Officiating Director, NIT Kurukshetra</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center relative flex flex-col items-center shadow-sm">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest z-10">Patron</div>
              <img src="/arvind.png" alt="Prof. Arvind Kumar" className="w-32 h-32 rounded-full object-contain bg-white border-4 border-white shadow-md mb-4 mt-2" />
              <h3 className="text-xl font-bold text-slate-900 mt-2">Prof. Arvind Kumar</h3>
              <p className="text-slate-600 text-sm mt-1">HOD, ECE, NIT Kurukshetra</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-center text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 pb-4 border-b border-slate-200">Chairpersons</h4>
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="flex flex-col items-center">
                  <img src="/vikas.png" alt="Dr. Vikas Mittal" className="w-24 h-24 rounded-full object-contain bg-white border-2 border-white shadow-md mb-3" />
                  <div className="text-lg font-bold text-slate-800">Dr. Vikas Mittal</div>
                </div>
                <div className="flex flex-col items-center">
                  <img src="/npsingh.png" alt="Dr. N.P. Singh" className="w-24 h-24 rounded-full object-contain bg-white border-2 border-white shadow-md mb-3" />
                  <div className="text-lg font-bold text-slate-800">Dr. N.P. Singh</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-center text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 pb-4 border-b border-slate-200">Secretaries</h4>
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="flex flex-col items-center">
                  <img src="/dheeraj.jpg" style={{objectFit: 'contain'}} alt="Dr. Dheeraj Kumar Sharma" className="w-24 h-24 rounded-full object-contain bg-white border-2 border-white shadow-md mb-3" />
                  <div className="text-lg font-bold text-slate-800">Dr. Dheeraj Kumar Sharma</div>
                </div>
                <div className="flex flex-col items-center">
                  <img src="/banavathu.png" alt="Dr. Banavathu Bhaskara Rao" className="w-24 h-24 rounded-full object-contain bg-white border-2 border-white shadow-md mb-3" />
                  <div className="text-lg font-bold text-slate-800">Dr. Banavathu Bhaskara Rao</div>
                </div>
                <div className="flex flex-col items-center">
                  <img src="/varun.jpg" alt="Dr. Varun Kumar Singh" className="w-24 h-24 rounded-full object-contain bg-white border-2 border-white shadow-md mb-3" />
                  <div className="text-lg font-bold text-slate-800">Dr. Varun Kumar Singh</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Advisory Panel */}
          <div>
            <h4 className="text-center text-xl font-bold text-emerald-700 mb-8">Technical Advisory Committee Panel</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {technicalAdvisoryCommittee.map((member, index) => {
                const isDirector = member.includes("Director");
                return (
                  <div key={index} className={`p-4 rounded-xl text-center flex items-center justify-center border shadow-sm ${isDirector ? 'bg-slate-100 border-slate-300' : 'bg-white border-slate-200 hover:bg-slate-50 transition'}`}>
                    <span className={`text-sm ${isDirector ? 'text-emerald-800 font-semibold' : 'text-slate-700'}`}>{member}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION PRICING & SETTLEMENT */}
      <section id="registration" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Registration Pricing</h2>
            <p className="text-slate-600 text-sm">Delegate tiers and settlement channels.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {registrationFees.map((fee, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:border-emerald-300 transition relative group shadow-sm hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-6 border border-slate-200 group-hover:border-emerald-200 transition">
                  <Users size={20} className="text-emerald-600" />
                </div>
                <h3 className="text-sm font-bold text-slate-600 mb-4 uppercase tracking-wide">{fee.category}</h3>
                <div className="text-4xl font-black text-slate-900 group-hover:text-emerald-700 transition">{fee.fee}</div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-emerald-700 mb-6 flex items-center gap-2 border-b border-slate-100 pb-3">
              <DollarSign size={20} /> Settlement Channels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-700">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-2">Online Gateway</strong>
                Pay securely online through <strong>SBI Collect</strong>.
              </div>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-2">Demand Draft (DD)</strong>
                Drawn in favor of <em>'Director, National Institute of Technology, Kurukshetra'</em> payable at Kurukshetra.
              </div>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-2">On-Site</strong>
                <strong>Cash on-site</strong> settlement is permitted for physical attendees.
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* SPONSORSHIP SCALABILITY BRACKETS */}
      <section id="sponsorship" className="py-20 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Sponsorship Scalability Brackets</h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">Strategic partnership tiers to maximize your brand visibility.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorships.map((sponsor, index) => (
              <div key={index} className={`rounded-2xl p-8 border bg-white transition-all hover:-translate-y-1 hover:shadow-lg ${sponsor.color} flex flex-col h-full shadow-sm`}>
                <Award size={36} className="mx-auto mb-6 opacity-80" />
                <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">{sponsor.tier}</h3>
                <div className="text-2xl font-black font-mono mb-6 pb-6 border-b border-current/20">{sponsor.cost}</div>
                <div className="text-sm opacity-90 text-left grow">
                  <strong className="block mb-2 uppercase tracking-wide text-xs opacity-70">Value Adds:</strong>
                  {sponsor.benefits}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-md border border-slate-700 overflow-hidden">
                  <img src="/nit-logo.png" alt="NIT KKR Logo" className="w-full h-full object-contain" onError={(e)=>{e.target.style.display='none'}}/>
                </div>
                <div>
                  <span className="text-xl font-black tracking-wider text-emerald-400 block leading-tight">ICVDIA-27</span>
                  <span className="text-xs text-slate-400 tracking-widest uppercase">NIT Kurukshetra</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                International Conference on VLSI Design for IoT Applications. 
                <br/><br/>
                Theme: <em>"Technology for a Green World"</em>
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 tracking-widest text-sm uppercase">Quick Routing</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#about" className="hover:text-emerald-400 transition flex items-center gap-2"><ChevronRight size={14}/> About Conference</a></li>
                <li><a href="#tracks" className="hover:text-emerald-400 transition flex items-center gap-2"><ChevronRight size={14}/> Track Modules</a></li>
                <li><a href="#committee" className="hover:text-emerald-400 transition flex items-center gap-2"><ChevronRight size={14}/> Committee Directory</a></li>
                <li><a href="#sponsorship" className="hover:text-emerald-400 transition flex items-center gap-2"><ChevronRight size={14}/> Sponsorship</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 tracking-widest text-sm uppercase">Support & Contact Parameters</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Dept. of ECE, National Institute of Technology, Kurukshetra, Haryana - 136119, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-emerald-500 shrink-0" />
                  <a href="mailto:icvdia27@gmail.com" className="hover:text-emerald-400 transition">icvdia27@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-emerald-500 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919716558828" className="hover:text-emerald-400 transition">+91 9716558828</a>
                    <a href="tel:+919440188027" className="hover:text-emerald-400 transition">+91 9440188027</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Globe size={18} className="text-emerald-500 shrink-0" />
                  <a href="https://www.nitkkr.ac.in" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">www.nitkkr.ac.in</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
            <p>&copy; 2027 Dept. of ECE, NIT Kurukshetra. All Rights Reserved.</p>
            <p className="flex items-center gap-1.5">Engineered for <span className="text-emerald-500">ICVDIA-27</span></p>
          </div>
        </div>
      </footer>

    </div>
  );
}

// Inline component helper for ChevronRight used in Footer
function ChevronRight({ size = 24, className, style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
