import Image from "next/image";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Dillon Song",
    title: "Co-Founder & CEO",
    description:
      "Dillon Song, A Seasoned Crypto Veteran, Has Led Key Roles At OKX, Bybit, And BinanceLIS, Where He Built The Largest U.S. Staking Program With Over $19 TVA and $100M in Profit. With Deep DeFi Expertise And Strong Industry Relationships From Roles At DODO, He Combines Technical Insight And Asset Management Experience To Deliver Top-Tier Yields While Ensuring User Asset Security.",
    image: "/team/1.svg",
    linkedin: "#",
  },
  {
    name: "MR",
    title: "Co-Founder & CMO",
    description:
      "Web3 Market Operation Expert, Has Served As CMO Of 7 Projects So Far, And Successfully Incubated More Than 20 Web3 Projects From Q-1, Projects Including Layer/ Layer2/DeFi/Garnet/RWA/AL",
    image: "/team/2.svg",
    linkedin: "#",
  },
  {
    name: "Ray",
    title: "Advisor & Head Of Defi",
    description:
      "Currently The Head Of Defi At Solv Finance, The Largest BTC Protocol With A TVL Of $28. Previously Served As The Head Of Defi At DODO DEX.",
    image: "/team/3.svg",
    linkedin: "#",
  },
  {
    name: "JR",
    title: "Advisor & Chief Strategy Officer",
    description:
      "Previously The Founder And CEO Of TatumJo Where He Raised $50M, And The Product Has Been Used By Tens Of Millions Of End-Users And Processes Billions Of Dollars Worth Of Transactions Per Month.",
    image: "/team/4.svg",
    linkedin: "#",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-6 sm:py-10 lg:py-20  px-4 sm:px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center mb-4">
          Meet The Team
        </h2>
        <p className="text-gray-600 text-center text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-12 font-poppins">
          Our Team Is United By The Belief That Nothing Great Is Ever Achieved
          Without Passion And Enthusiasm. With Strong Roots In Web3, We{'\''}re
          Dedicated To Making Our Clients{'\''} Lives Sweeter By Providing Easy
          Access To Earning Products.
        </p>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2 mt-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] flex flex-col md:flex-row p-4 sm:p-5 shadow-[0_6px_16px_rgba(46,35,150,0.06)] text-left hover:shadow-lg transition-all border border-gray-100"
            >
              {/* Image container */}
              <div className="w-full md:w-[45%] h-48 sm:h-56 md:h-64 lg:h-auto lg:aspect-[3/4] relative rounded-2xl overflow-hidden mb-4 md:mb-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 25vw"
                  priority={index < 2} // Prioritize loading for first two images
                />
              </div>

              {/* Text content */}
              <div className="w-full md:w-[55%] md:pl-4 lg:pl-6 py-4 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm sm:text-base lg:text-lg text-black font-medium">
                    {member.title}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#362E94] hover:text-[#2a2377] transition-colors"
                  >
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#362E94] mb-3">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed line-clamp-4 sm:line-clamp-5">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;