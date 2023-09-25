function About() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 p-8">
      <div className="bg-accent md:p-6 p-3 rounded-lg shadow-lg">
        <h1 className="font-bold text-2xl text-bgc px-8 lg:w-42">About Me</h1>
      </div>

      <div className="hidden lg:block bg-bgc h-48 w-1" />

      <div className="max-w-2xl">
        <p className="md:text-left text-bgc text-center">
          My full name is Kenneth Filbert and I am 20 years old. I am currently
          a student at Bina Nusantara University in Kemanggisan. I live in the
          Sunter area, North Jakarta. Currently, I am studying Software
          Engineering and I want to become a Fullstack Developer, both for web
          and applications. Recently, I have also been taking on freelance
          projects using the Vite framework with React and other built-ins such
          as Tailwind and MUI for the front end, while for the database I use
          GQL (Graph Query Language). Therefore, these are some of the languages
          ​​that I have mastered.
        </p>
      </div>
    </div>
  );
}

export default About;
