import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div>
      <div className="min-h-screen bg-center text-white bg-scroll " style={{ backgroundImage: `url("/stars.gif")` }}>
        <div className="min-h-screen bg-no-repeat bg-center text-white bg-scroll" style={{ backgroundImage: `url("/earth.gif")` }}>
          <div className=" bg-transparent p-6 rounded-xl shadow-md ">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-4 sm:mb-0">
                <div className="flex items-center">
                  <img
                    className="h-24 w-24 rounded-full mr-4"
                    src="https://media.licdn.com/dms/image/C4D03AQHcoz41CKuU-Q/profile-displayphoto-shrink_800_800/0/1637160556239?e=1711584000&v=beta&t=SngBQUAgGhgxWyE67CjEXUWt-7Lr9ZnS68Oi_6zbAkA"
                    alt="Profile Image"
                  />
                  <div>
                    <h1 className="text-3xl font-bold">Faisal Shaheen</h1>
                    <p className="text-gray-500 text-sm">Software Engineer</p>
                  </div>
                </div>
                <div className="">
                  {/* LinkedIn and GitHub links here */}
                </div>
              </div>
              <div className="ml-5">
                <a
                  href="https://github.com/psy-op"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-blue flex items-center"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/faisal-a-shaheen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-blue flex items-center"
                >
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center h-screen text-3xl font-bold">
    <div>Skills</div>
    <div className="mt-64 flex items-center justify-center">
        <div className ="grid grid-rows-4 grid-cols-2 gap-8 justify-items-center align-items-center">
            <div>C++</div>
            <div>Python</div>
            <div>API</div>
            <div>SQL/NOSQL</div>
            <div>Database</div>
            <div>Linux</div>
            <div>Git</div>
            <div>Frameworks</div>
        </div>
    </div>
</div>


      </div>
    </div>
  );
};

export default Home;
