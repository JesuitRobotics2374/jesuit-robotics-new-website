import Image from "next/image";

export default function About() {
  return (
    <div>
      <h1 className="title">About</h1>

      <section className="relative mx-auto flex max-w-6xl flex-col">
        <h2>Mission Statement</h2>
        <div className="main-green-bg relative mx-auto my-10 max-w-xl rounded-3xl p-10 text-center md:right-[15%]">
          <blockquote className=" mb-6 select-none">
            <h2 className="relative bottom-3 left-2 p-3 text-6xl font-extrabold italic">
              &quot;
            </h2>
            <h2 className="m-0 p-2 font-extrabold italic">A Posse ad Esse</h2>
            <h2 className="relative right-2 top-12 p-3 text-6xl font-extrabold italic">
              &quot;
            </h2>
          </blockquote>
          <h4>
            From Possibility to Actuality - we celebrate our successes, learn
            from our failures and make our dreams real.
          </h4>
        </div>

        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-green-200 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-green-500 after:via-green-600 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-700 before:dark:opacity-70 after:dark:from-green-900 after:dark:via-green-500 after:dark:opacity-80 before:lg:h-[360px]" />

        <div className="main-green-bg relative mx-auto my-10 max-w-xl rounded-3xl p-10 text-center md:left-[15%]">
          <h5>
            To excite students to the possibilities in Science, Technology,
            Engineering, and Math (STEM). We strive to promote the creativity of
            all students to thrive and grow in an educational environment
            through our program. To inspire students to work with their peers to
            become teachers and leaders. To commit to being a student led team.
          </h5>
          <div className="absolute right-40 z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:rounded-full before:bg-gradient-radial before:from-green-200 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:bg-gradient-conic after:from-green-500 after:via-green-600 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-700 before:dark:opacity-70 after:dark:from-green-900 after:dark:via-green-500 after:dark:opacity-80 before:lg:h-[360px]" />
        </div>
      </section>
      <section>
        <h2>Early Years</h2>
        <div className="main-green-bg relative mx-auto my-10 max-w-xl rounded-3xl p-10 text-center">
          <h5>
            Team 2374, the Jesuit Crusaderbots, was founded in 2007 when Nik
            Bowen, a Jesuit student, approached Dr. Catherine Molloseau, a
            physics teacher, proposing the possibility of a robotics team after
            he attended a week-long leadership program in Boston, which included
            a section on robotics. An informational meeting was held at Jesuit
            to determine the student body&apos;s interest in a potential
            robotics program.
          </h5>
        </div>
        <div className="main-green-bg relative mx-auto my-10 max-w-xl rounded-3xl p-10 text-center">
          <h5>
            There were 38 students in attendance. As part of the meeting, Dale
            Yocum, robotics program director at Catlin Gabel, gave a
            presentation on the FIRST robotics competition, shared video clips
            of the 2007 National competition, and demonstrated their robot.
            Interested students composed a proposal to start a team which was
            presented and approved by the Jesuit Administration.
          </h5>
        </div>
        <div className="main-green-bg relative mx-auto my-10 max-w-xl rounded-3xl p-10 text-center">
          <h5>
            The result of a follow up parent meeting was the creation of FIRST
            Team 2374. The Catlin Gabel Robotics, Team 1540, was our “team
            mentor”, working closely with us our rookie year. Together we
            initiated the Bunnybots competition, a small-scale robotics
            competition primarily for rookie members of a team to gain
            experience. The team met and built their first robot in a physics
            classroom, until year two where they moved to an English classroom.
            During the early years of the team, there were minimal tools and
            equipment.
          </h5>
        </div>
        <div className="main-green-bg relative mx-auto my-10 max-w-xl rounded-3xl p-10 text-center">
          <h5>
            In 2009, Dan Calkins became the Physics teacher at Jesuit High
            School and a robotics club coach. That same year the team migrated
            to an unseated storage shed, our first dedicated work space. The
            team worked all summer to get the shop ready for the coming season.
          </h5>
        </div>
      </section>
      <section>
        <h2>Where We are Now</h2>
        <div className="main-green-bg relative mx-auto my-10 max-w-xl rounded-3xl p-10 text-center">
          <h5>
            In 2011, because of the team&apos;s demonstrated passion, we were
            awarded a dedicated shop space in the school&apos;s new Elorriaga
            Center for Science and Mathematics in the center of campus.
          </h5>
        </div>
        <div className="main-green-bg relative mx-auto my-10 max-w-xl rounded-3xl p-10 text-center">
          <h5>
            Now, the team uses the storage shed, referred to as the “lower
            shop”, for field space and stock storage. The “upper shop”, in the
            Elorriaga Center, is the primary base of operations for mechanical,
            software, and electrical projects. Each year, our team has grown in
            knowledge and experience, and we won&apos;t stop growing.
          </h5>
        </div>
      </section>
    </div>
  );
}
