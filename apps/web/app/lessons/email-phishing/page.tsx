import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Email Phishing — CyberSherlock",
  description: "How AI increases the volume and complexity of email phishing attacks.",
};

export default function EmailPhishingLesson() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16" dir="rtl" lang="ar">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-slate-500" dir="ltr">
        <Link href="/" className="hover:text-red-600 transition-colors">
          CyberSherlock
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">AI Email Phishing</span>
      </nav>

      {/* Category tag */}
      <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
        Cybersecurity &middot; Lesson 2
      </p>

      {/* Title */}
      <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight">
        How AI Is Changing the Phishing Landscape
      </h1>

      {/* Source */}
      <p className="mt-3 text-sm text-slate-500">
        Adapted from{" "}
        <a
          href="https://civai.org/p/email-phishing?utm_source=bluedot-impact"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 underline hover:text-red-800"
        >
          civai.org
        </a>
      </p>

      {/* Intro */}
      <p className="mt-8 text-lg leading-relaxed text-slate-700">
        AI is increasing the volume and complexity of email phishing attacks
        while significantly reducing the cost of executing them.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Email phishing &mdash; sending a deceptive message to trick someone into
        sharing sensitive information &mdash; is as old as the internet itself.
        Traditionally, attacks took two forms: mass generic emails sent in bulk,
        or highly personalized messages targeting a small number of VIPs. But
        thanks to AI advances, creating targeted phishing attacks has become
        easier, cheaper, and faster than ever &mdash; meaning cybercriminals can
        treat every person as a high-value target.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Since AI systems can scan vast amounts of publicly available
        information, they can quickly identify a person&apos;s identity,
        interests, and psychological vulnerabilities to exploit. Using this
        information, they can craft highly personalized emails that appear
        trustworthy and authentic to the untrained eye, making it much harder to
        distinguish between legitimate and malicious messages.
      </p>

      {/* Image placeholder 1 */}
      <div className="my-10 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Zm17.25-6.75H3" />
          </svg>
        </div>
        <p className="text-sm font-medium text-slate-600">
          [Image 1] Diagram: How AI personalizes phishing messages by target
          category
        </p>
        <p className="mt-1 text-xs text-slate-400">
          Placeholder for an image showing varying phishing strategies across
          victim types
        </p>
      </div>

      {/* Section: AI-generated message variety */}
      <h2 className="mt-10 text-2xl font-semibold">
        Notice How the Generated Messages Vary
      </h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        The generated messages differ not only in content but also in the
        strategy used to lure the victim. The spoofed sender name, tone, and
        style change depending on the target:
      </p>

      <ul className="mt-4 space-y-3 text-lg leading-relaxed text-slate-700">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span>
            <strong>Messages targeting a famous athlete</strong> may highlight
            a commercial partnership relevant to their region.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span>
            <strong>Messages targeting a university professor</strong> may
            include an invitation to a specialized conference.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
          <span>
            <strong>Messages targeting a business owner</strong> may offer a
            seemingly valuable partnership opportunity.
          </span>
        </li>
      </ul>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Each message ends with a link that appears to be the sender&apos;s real
        LinkedIn profile. But clicking the link leads to a fake login page
        asking for the victim&apos;s LinkedIn password, which attackers can see
        and steal.
      </p>

      {/* Image placeholder 2 */}
      <div className="my-10 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Zm17.25-6.75H3" />
          </svg>
        </div>
        <p className="text-sm font-medium text-slate-600">
          [Image 2] Chart: Global phishing attack surge after ChatGPT launch
        </p>
        <p className="mt-1 text-xs text-slate-400">
          Placeholder for Statista data showing phishing attacks more than
          doubling
        </p>
      </div>

      {/* Section: Phishing at scale */}
      <h2 className="mt-10 text-2xl font-semibold">Phishing at Scale</h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Phishing is the most common type of cybercrime according to the
        FBI&apos;s Internet Crime Complaint Center. While it has been rising for
        years, Statista data shows that global phishing attacks more than
        doubled in the year following ChatGPT&apos;s launch. Data also shows
        that <strong>91% of all cyber attacks begin with an email</strong>.
      </p>

      <div className="my-8 rounded-lg border-l-4 border-red-500 bg-red-50 px-6 py-4">
        <p className="text-2xl font-bold text-red-700">91%</p>
        <p className="mt-1 text-sm text-red-800">
          of all cyber attacks begin with an email
        </p>
      </div>

      <p className="text-lg leading-relaxed text-slate-700">
        AI doesn&apos;t just improve the quality of cyber attacks &mdash; it
        also increases their quantity, leading to massive growth in
        cybersecurity losses. Recent research shows it&apos;s now possible to
        fully automate phishing, and the best current AI models match human
        expert performance at this task.
      </p>

      {/* Section: What awaits us */}
      <h2 className="mt-10 text-2xl font-semibold">What Lies Ahead</h2>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Billions of people open their email daily. Previously, most were not
        &quot;viable&quot; phishing targets because the effort required exceeded
        the potential return. But now, sophisticated scams can be crafted in
        minutes instead of hours, changing the equation and putting everyone at
        risk.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        There is some evidence that AI can also be used to defend against
        phishing through proactive detection of malicious intent. However, as AI
        systems continue to evolve monthly, offense remains much easier than
        defense.
      </p>

      {/* Key takeaway box */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 px-6 py-5">
        <h3 className="text-lg font-semibold">Key Takeaways</h3>
        <ul className="mt-3 space-y-3 text-slate-700">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
            <span>
              AI makes phishing attacks faster, cheaper, and more personalized
              than ever.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
            <span>
              Global phishing attacks more than doubled after ChatGPT&apos;s
              launch.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
            <span>
              Phishing can now be fully automated &mdash; everyone is a
              potential target.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
            <span>
              Offense is still easier than defense, though AI can be used for
              both.
            </span>
          </li>
        </ul>
      </div>

      {/* Back link */}
      <div className="mt-12 border-t border-slate-200 pt-6" dir="ltr">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
        >
          &larr; Back to home
        </Link>
      </div>
    </article>
  );
}