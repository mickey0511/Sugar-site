import Image from "next/image";

const teamMembers = [
  {
    name: "Dillon Song",
    title: "Co-Founder & CEO",
    description:
      "Dillon Song, A Seasoned Crypto Veteran, Has Led Key Roles At OKX, Bybit, And BinanceLIS, Where He Built The Largest U.S. Staking Program With Over $19 TVA and $100M in Profit. With Deep DeFi Expertise And Strong Industry Relationships From Roles At DODO, He Combines Technical Insight And Asset Management Experience To Deliver Top-Tier Yields While Ensuring User Asset Security.",
    image: "/team/1.svg",
  },
  {
    name: "MR",
    title: "Co-Founder & CMO",
    description:
      "Web3 Market Operation Expert, Has Served As CMO Of 7 Projects So Far, And Successfully Incubated More Than 20 Web3 Projects From Q-1, Projects Including Layer/ Layer2/DeFi/Garnet/RWA/AL",
    image: "/team/2.svg",
  },
  {
    name: "Ray",
    title: "Advisor & Head Of Defi",
    description:
      "Currently The Head Of Defi At Solv Finance, The Largest BTC Protocol With A TVL Of $28. Previously Served As The Head Of Defi At DODO DEX.",
    image: "/team/3.svg",
  },
  {
    name: "JR",
    title: "Advisor & Chief Strategy Officer",
    description:
      "Previously The Founder And CEO Of TatumJo Where He Raised $50M, And The Product Has Been Used By Tens Of Millions Of End-Users And Processes Billions Of Dollars Worth Of Transactions Per Month.",
    image: "/team/4.svg",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl text-center sm:text-4xl font-bold text-gray-900 mb-4">
          Meet The Team
        </h2>
        <p className="text-gray-600 text-center text-base sm:text-lg max-w-3xl mx-auto mb-12">
          Our Team Is United By The Belief That Nothing Great Is Ever Achieved
          Without Passion And Enthusiasm. With Strong Roots In Web3, We&apos;re
          Dedicated To Making Our Clients&apos; Lives Sweeter By Providing Easy
          Access To Earning Products.
        </p>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mt-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl flex flex-col md:flex-row p-6 shadow-md text-left hover:shadow-lg transition-all border border-gray-200 h-full"
            >
              {/* Image container - fixed height on mobile, flexible on desktop */}
              <div className="w-full md:w-1/3 h-48 md:h-auto relative rounded-2xl overflow-hidden mb-4 md:mb-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover"
                />
              </div>

              {/* Text content */}
              <div className="w-full md:w-2/3 md:pl-6 flex flex-col">
                <p className="text-sm text-gray-500 font-medium mb-1">
                  {member.title}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
