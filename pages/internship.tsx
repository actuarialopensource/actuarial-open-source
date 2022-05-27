import Budget from "../components/budget";

export default function Example() {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto flex flex-col ">
          <h1>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              The Actuarial Open Source Internship
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8 mx-auto">
            No boss. No office. Yes paid.
          </p>
        </div>
        <div className="mt-6 max-w-prose prose mx-auto">
          <div className="bg-yellow-100 p-5">
            This is currently a proposal. It will become a reality if our
            application to join the Open Source Collective is successful.
          </div>
          <h2>Details</h2>
          <p>
            This is a fully-remote internship for Summer 2023. You set your own
            hours. You do not have a boss. We trust you.
          </p>
          <h2>Qualifications</h2>
          <ol role="list">
            <li>You are good at programming.</li>
            <li>You want to make the actuarial world more open source.</li>
            <li>
              You can figure out how to make the actuarial world more open
              source.
            </li>
          </ol>
          <h2>Responsibilities</h2>
          <ol role="list">
            <li>Make the actuarial world more open source.</li>
            <li>Post once a week to the LinkedIn group.</li>
          </ol>
          <h2>Application process</h2>
          <ol role="list">
            <li>
              Join the{" "}
              <a href="https://www.linkedin.com/groups/13937070/">
                the LinkedIn group
              </a>
              .
            </li>
            <li>Express an interest in the internship.</li>
            <li>Start contributing to the community.</li>
          </ol>
          <h2>Pay</h2>
          The balance in our{" "}
          <a href="https://opencollective.com/actuarial-open-source">
            Open Collective
          </a>{" "}
          and the funding for each intern is shown below.
          <Budget />
        </div>
      </div>
    </div>
  );
}
