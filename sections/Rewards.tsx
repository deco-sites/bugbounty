import { HTMLWidget } from "apps/admin/widgets.ts";

interface Topic {
  text: HTMLWidget;
  /** @title Side accent text */
  value?: string;
}

export interface Props {
  title?: HTMLWidget;
  text?: HTMLWidget;
  topics?: Topic[];
}

export default function Rewards({
  title = "Earn <span class='text-accent'>Up to $2,000</span> for Reporting Security Issues",
  text = `We offer competitive rewards based on the severity of the vulnerability discovered. The rewards range from $100 to $2,000, depending on the impact and complexity of the issue. Exceptional reports may be eligible for higher rewards.
  <br/><br/>
  We use the <span class="text-accent">CVSS (Common Vulnerability Scoring System)</span> calculator to assess the severity of vulnerabilities and determine the bounty value.`,
  topics = [
    {
      text: "<span class='font-bold'>Low</span> (0.1-3.9)",
      value: "$100 - $500",
    },
    {
      text: "<span class='font-bold'>Medium</span> (4.0-6.9)",
      value: "$500 - $1,000",
    },
    {
      text: "<span class='font-bold'>High</span> (7.0-8.9)",
      value: "$1,000 - $1,500",
    },
    {
      text: "<span class='font-bold'>Critical</span> (7.0-8.9)",
      value: "$1,500 - $2,000",
    },
    {
      text: "*Exceptional Reports may be eligible for higher rewards based on impact and complexity.",
    },
  ],
}: Props) {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-[1280px] z-10 text-white relative mx-auto py-12 px-6 xl:px-0 lg:py-28">
      <div class="flex flex-col">
        <h2
          class="text-primary text-[48px] font-semibold leading-[57.6px] max-w-[469px] mb-6"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <div
          class="text-primary text-lg"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
      <div class="flex flex-col gap-2">
        {topics?.map((topic) => (
          <div class="flex flex-row justify-between items-center bg-neutral-content border border-neutral px-6 rounded-2xl min-h-[71px]">
            <div dangerouslySetInnerHTML={{ __html: topic.text }} />
            {topic.value && (
              <span class="text-accent font-bold text-lg">{topic.value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
