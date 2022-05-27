/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    id: 1,
    question: "Open source is about collaborating; not competing.",
    answer: "Kelsey Hightower, principal engineer for Google Cloud",
  },
  {
    id: 2,
    question:
      "In real open source, you have the right to control your own destiny.",
    answer: "Linus Torvalds, creator of Linux",
  },
  {
    id: 4,
    question:
      "Certainly there's a phenomenon around open source. You know free software will be a vibrant area. There will be a lot of neat things that get done there.",
    answer: "Bill Gates, founder of Microsoft",
  },

  {
    id: 6,
    question:
      "Once open source gets good enough, competing with it would be insane.",
    answer: "Larry Ellison, founder of Oracle",
  },
  {
    id: 3,
    question:
      "Empowerment of individuals is a key part of what makes open source work, since in the end, innovations tend to come from small groups, not from large, structured efforts.",
    answer: "Tim O'Reilly, founder of O'Reilly Media",
  },
  {
    id: 5,
    question:
      "Microsoft was on the wrong side of history when open source exploded at the beginning of the century ... The good news is that, if life is long enough, you can learn that you need to change.",
    answer: "Brad Smith, Microsoft's president and vice chair",
  },

  // More questions...
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 divide-y-2 divide-gray-200 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          What people are saying about open source
        </h2>
        <div className="mt-6 pt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
