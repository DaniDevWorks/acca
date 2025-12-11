function App() {
  return (
    <div className="min-h-screen bg-[#f8ede6] text-slate-900 scroll-smooth">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-[#f8ede6]/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Site logo"
              className="h-20 w-20 rounded-full object-contain"
            />
            <div className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
              Anglo Chinese
              <br className="hidden sm:block" />
              Chess Association
            </div>
          </div>
          <div className="flex items-center gap-10 text-base font-semibold">
            <a className="hover:text-amber-700 transition" href="#about">Home</a>
            <a className="hover:text-amber-700 transition" href="#lessons">What we offer</a>
            <a className="hover:text-amber-700 transition" href="#events">Our Teachers</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="about"
        className="relative min-h-[600px] overflow-hidden bg-[#f8ede6]"
      >
        {/* Background chess image */}
        <div 
          className="absolute top-0 bottom-0 left-10 right-10 bg-cover bg-left-bottom bg-no-repeat opacity-100 scale-[0.84] origin-left-bottom"
          style={{ backgroundImage: 'url(/bg.png)' }}
        />
        
        {/* Content container */}
        <div className="relative mx-auto max-w-7xl pt-10 pb-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-end">
            {/* Dark overlay box with text */}
            <div className="relative z-0 w-full rounded-2xl bg-black/70 p-8 text-white shadow-2xl lg:w-[55%] lg:p-10">
              <div className="space-y-6 text-base leading-relaxed lg:text-lg">
                <p>
                  Welcome to the Anglo Chinese Chess Association (ACCA), a dynamic platform where passion for chess and Chinese chess (Xiangqi) converges with cultural exchange and community engagement.
                </p>
                <p>
                  At ACCA, we are dedicated to nurturing young minds by offering expert-led lectures and activities that inspire strategic thinking, discipline, and creativity.
                </p>
                <p>
                  For over five years, we have been a cornerstone in the Salford and Trafford areas, providing exceptional chess and Chinese chess lectures for children of all skill levels.
                </p>
                <p>
                  Our team of professional chess players and instructors brings years of competitive experience and a commitment to cultivating talent in the next generation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section id="lessons" className="bg-[#f8ede6]">
        <div className="mx-auto max-w-7xl py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Chess & Chinese Chess Lectures */}
            <div className="overflow-hidden rounded-lg shadow-lg border-1">
              <div className="bg-[#7b3306] px-6 py-4">
                <h3 className="text-xl font-bold text-white">Chess & Chinese Chess Lectures</h3>
              </div>
              <div className="bg-[#ffeed4] px-6 py-6 space-y-4">
                <p className="text-slate-900">
                  Tailored lessons designed to develop core skills, critical thinking, and strategy.
                </p>
                <p className="text-slate-900">
                  Interactive and engaging sessions led by professional players.
                </p>
                <p className="text-slate-900">
                  Focus on building foundational skills for beginners and advanced techniques for competitive play.
                </p>
              </div>
            </div>

            {/* Competitions and Tournaments */}
            <div className="overflow-hidden rounded-lg shadow-lg border-1">
              <div className="bg-[#7b3306] px-6 py-4">
                <h3 className="text-xl font-bold text-white">Chess & Chinese Chess Lectures</h3>
              </div>
              <div className="bg-[#ffeed4] px-6 py-6 space-y-4">
                <p className="text-slate-900">
                Regularly organized tournaments to give students a platform to showcase their skills and gain real-world experience.
                </p>
                <p className="text-slate-900">
                Events foster a spirit of camaraderie and sportsmanship among young players.
                </p>
                <br />
                <br />
              </div>
            </div>

            {/* Educational Resources */}
            <div className="overflow-hidden rounded-lg shadow-lg border-1">
              <div className="bg-[#7b3306] px-6 py-4">
                <h3 className="text-xl font-bold text-white">Chess & Chinese Chess Lectures</h3>
              </div>
              <div className="bg-[#ffeed4] px-6 py-6 space-y-4">
                <p className="text-slate-900">
                Comprehensive teaching materials and hands-on guidance to ensure students excel.
                </p>
                <p className="text-slate-900">
                Visual aids, including game boards and interactive tools, enhance the learning experience.
                </p>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Teachers */}
      <section id="events" className="bg-[#f8ede6]">
        <div className="mx-auto max-w-7xl py-16 space-y-16">
          {/* Photo Gallery */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Image 1 - Xiangqi */}
              <div className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
                <img src="/imagine-1.jpeg" alt="Xiangqi game" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white px-4 py-2 text-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Xiangqi
                </div>
              </div>
              
              {/* Image 2 - Chess */}
              <div className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
                <img src="/imagine-2.jpeg" alt="Trophy presentation" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white px-4 py-2 text-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Chess
                </div>
              </div>
              
              {/* Image 3 - Xiangqi */}
              <div className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
                <img src="/imagine-3.jpeg" alt="Classroom lesson" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white px-4 py-2 text-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Xiangqi
                </div>
              </div>
              
              {/* Image 4 - Xiangqi */}
              <div className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
                <img src="/imagine-4.jpeg" alt="Teaching session" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white px-4 py-2 text-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Xiangqi
                </div>
              </div>
              
              {/* Image 5 - Chess */}
              <div className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
                <img src="/imagine-5.jpeg" alt="Handshake" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white px-4 py-2 text-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Chess
                </div>
              </div>
              
              {/* Image 6 - Xiangqi */}
              <div className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
                <img src="/imagine-6.jpeg" alt="Chess board close-up" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white px-4 py-2 text-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Xiangqi
                </div>
              </div>
            </div>
          </div>

          {/* Teacher Profiles */}
          <div className="space-y-8">
            
            {/* Mr. Huang Jianrong */}
            <div className="bg-white rounded-3xl p-6 shadow-md">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <img 
                  src="/huang.jpeg" 
                  alt="Mr. Huang Jianrong" 
                  className="w-32 h-32 rounded-full object-cover flex-shrink-0 mx-auto md:mx-0"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">Mr. Huang Jianrong</h3>
                  <p className="text-slate-900 leading-relaxed">
                    Mr. Huang Jianrong currently serves as the President of the UK Chinese Chess Association. He has been passionate about Chinese Chess (Xiangqi) since childhood and began studying the game at the Guangzhou Children's Palace at the age of 12. Through years of continuous learning and self-exploration, he has developed a deep understanding of the opening, middle, and endgame stages, gaining extensive experience. Since moving to the UK in 1990, Mr. Huang has actively promoted Chinese Chess culture, organizing various chess tournaments. In 2006, he successfully hosted the first Manchester Chinese Chess Championship and, in 2014, organized and hosted the European Chinese Chess Championship. Players from countries such as France, Germany, Switzerland, Finland, Italy, Denmark, Ireland, and London, UK, participated in this event. Additionally, he has been instrumental in organizing and hosting the UK Chinese Chess Championship from 2010 to 2024. Known for his enthusiasm, dedication, and pursuit of excellence, Mr. Huang is a passionate volunteer and an advocate for public welfare.
                  </p>
                </div>
              </div>
            </div>

            {/* Alex */}
            <div className="bg-white rounded-3xl p-6 shadow-md">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <img 
                  src="/alex.jpeg" 
                  alt="Alex" 
                  className="w-32 h-32 rounded-full object-cover flex-shrink-0 mx-auto md:mx-0"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">Alex</h3>
                  <p className="text-slate-900 leading-relaxed">
                    Alex started learning chess at the age of 5 and now has more than ten years of experience and skills. He participates in national and various level competitions and activities every year. And he has won many championships, trophies, and medals. He is now the main chess player of the Manchester team and also plays for the Swinton and Worsley Chess Clubs in Salford. At the age of 15, he established the Timberly Junior's Chess Club and trained a small group of outstanding students who are now able to compete.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Legacy */}
          <div className="bg-[#fffdf5] rounded-3xl p-8 shadow-md">
            <h2 className="text-3xl font-bold text-[#5D4037] mb-6">Our Legacy</h2>
            <div className="space-y-4 text-slate-900 leading-relaxed">
              <p>
                Over the past five years, our lectures and tournaments have been met with enthusiastic participation and excellent outcomes, as showcased in the Salford and Trafford communities. From smiling faces at our weekly classes to the focused intensity of our tournaments, our program continues to create memorable experiences for children and families alike.
              </p>
              <p>
                Explore our photo gallery to see our students in action, from mastering chessboard strategies to receiving awards at competitions. These moments reflect the joy and growth our programs inspire.
              </p>
              <p>
                Whether your child is discovering the game for the first time or aiming to refine their competitive edge, ACCA is the perfect place to learn, grow, and connect. Join us in shaping the future of chess and Chinese chess enthusiasts in the UK.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center py-4 mb-10">
        <h3>© 2025 Anglo Chinese Chess Association (ACCA)</h3>
      </div>
    </div>


  )
}

export default App
