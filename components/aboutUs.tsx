/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/

import { VscGithubInverted, VscGithub } from "react-icons/vsc";

export default function Example() {
  return (
    <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-max lg:max-w-7xl mx-auto">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="text-base max-w-prose lg:max-w-none">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Insurance software for everybody
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why the insurance industry needs to be more open source
            </p>
          </div>
        </div>
        <div className="relative">
          <svg
            className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
            />
          </svg>
          <svg
            className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
            />
          </svg>
          <div className="relative md:bg-white md:p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                <h3>Problems with closed source actuarial software</h3>
                <ul>
                  <li>Integrates poorly with modern IT infrastructure.</li>
                  <ul>
                    <li>
                      Trouble integrating with{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://git-scm.com/"
                      >
                        Git
                      </a>
                      .
                    </li>
                    <li>
                      Trouble integrating with{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.docker.com/"
                      >
                        Docker
                      </a>
                      .
                    </li>
                    <li>
                      Trouble integrating with{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://airflow.apache.org/"
                      >
                        Airflow
                      </a>
                      .
                    </li>
                  </ul>
                  <li>Trouble reproducing results.</li>
                  <ul>
                    <li>
                      Results from various proprietary software systems are
                      combined in manual processes. If tasked with replicating a
                      calculation from data to assumptions through the modeling
                      process, significant amounts of labor would be required.
                    </li>
                  </ul>
                  <li>No transparency for the general public.</li>
                  <ul>
                    <li>
                      Policyholders are unable to perform their own
                      investigations on the financial models that they rely on
                      for their financial wellbeing.
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                <h3>Benefits of open source</h3>
                <ul>
                  <li>
                    Integrates well with modern paradigms in IT infrastructure.
                  </li>
                  <li>
                    We can use the learnings from Machine Learning Operations
                    (MLOps) to increase the level of automation while enhancing
                    reproducibility and logging.
                  </li>
                  <li>
                    Policyholders can run the actuarial models that they rely
                    on.
                  </li>
                </ul>
                <h3>Our work</h3>
                <p>
                  We develop open source software and perform original research.
                  Here are some of the things we're doing now -
                </p>
                <ul>
                  <li>
                    Running large scale simulations in the cloud using Google's
                    JAX library for GPU/AI computing.
                  </li>
                  <li>Strive to implement best practices for MLOps.</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 inline-flex rounded-md shadow">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/orgs/actuarialopensource/discussions"
                className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
