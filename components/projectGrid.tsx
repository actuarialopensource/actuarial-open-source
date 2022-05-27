import { StarIcon } from "@heroicons/react/outline";
import { VscRepoForked } from "react-icons/vsc";
import { FlatQuery } from "../utils/query";

export default function ProjectGrid({ repos }: { repos: FlatQuery[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 divide-y-2 divide-gray-200 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900">
        Use open source actuarial software
      </h2>
      <div>
        <ul
          role="list"
          className=" mt-6 pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl"
        >
          {repos.map((repo, idx) => (
            <li
              key={idx}
              className="m-1 border border-gray-300 col-span-1 bg-white hover:bg-blue-100 rounded-lg shadow divide-y divide-gray-200"
            >
              <a target="_blank" rel="noopener noreferrer" href={repo.url}>
                <div>
                  <div className="flex items-center justify-center truncate p-3">
                    <h3 className="text-blue-700  font-medium truncate">
                      {repo.name}
                    </h3>
                    <div className="flex flex-row items-center ml-auto">
                      <StarIcon className="w-5 h-5 stroke-slate-500" />
                      <span className="text-slate-600 font-light">
                        {repo.stars}
                      </span>
                      <VscRepoForked className="w-5 h-5 stroke-slate-500 ml-2 fill-slate-500" />
                      <span className="text-slate-600 font-light">
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                  <div className="pb-2 px-2 text-sm text-gray-600 font-light truncate">
                    {repo.description}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="pt-5 px-5">
          <div>
            The stars and forks update automatically. Star a repository, come
            back in an hour, and see for yourself.
          </div>
          <div className="pt-2">
            This website itself is open source and built on top of open source
            technologies from companies like Vercel, Tailwind Labs, and
            Facebook.
          </div>
        </div>
      </div>
    </div>
  );
}
