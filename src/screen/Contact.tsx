import LinkedIn from "../assets/icons/others/linkedin-original.svg";
import Instagram from "../assets/icons/others/instagram.svg";
import Github from "../assets/icons/others/github-original.svg";

function Contact() {
  return (
    <div className="justify-center items-center bg-bgc p-10 flex gap-4">
      <div className="bg-accent h-72 w-1" />

      <div className="flex justify-center items-center">
        <div className="bg-content p-8 rounded-lg shadow-md">
          <h2 className="text-xl text-bgc mb-4 underline underline-offset-8 font-black">
            Contact Information
          </h2>
          <p className="mb-2 text-bgc">
            <strong>Name:</strong> Kenneth Filbert
          </p>
          <p className="mb-2 text-bgc">
            <strong>Email:</strong> kennethfilbert686@gmail.com
          </p>
          <p className="mb-2 text-bgc">
            <strong>Phone:</strong> 081534856073
          </p>
          <p className="mb-2 text-bgc">
            <strong>Location:</strong> Jl. Bisma 20 Blok C10 No.34
          </p>
          <h2 className="mb-2 text-bgc">
            <strong>Social Media:</strong>
          </h2>
          <div className="flex items-center mt-2 gap-4">
            <a
              href="https://www.linkedin.com/in/kennethfilberts/"
              target="_blank"
              className="hover:shadow-lg hover:overflow-hidden hover:scale-95"
            >
              <img src={LinkedIn} alt="LinkedIn" className="w-10 h-10" />
            </a>
            <a
              href="https://www.instagram.com/kennethfilberts/"
              target="_blank"
              className="hover:shadow-lg hover:overflow-hidden hover:scale-95 hover:rounded-full"
            >
              <img src={Instagram} alt="Instagram" className="w-10 h-10" />
            </a>
            <a
              href="https://github.com/kennethfilberts"
              target="_blank"
              className="hover:shadow-lg hover:overflow-hidden hover:scale-95 hover:rounded-full"
            >
              <img src={Github} alt="Github" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-accent h-72 w-1" />
    </div>
  );
}

export default Contact;
