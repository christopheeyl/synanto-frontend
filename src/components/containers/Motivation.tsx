const motivationItems = [
  {
    iconPath: "/icons/icon-online.svg",
    title: "Create a new event",
    subtitle: "Organize a new event with a simple form to fill in, submit it.",
  },
  {
    iconPath: "/icons/icon-budgeting.svg",
    title: "Contacts join you",
    subtitle:
      "An event invitation will be send to your contacts you had submitted in the form.",
  },
  {
    iconPath: "/icons/icon-onboarding.svg",
    title: "Chat",
    subtitle:
      "A specific conversation will be created for you and allow you to discuss with your invited contacts",
  },
  {
    iconPath: "/icons/icon-api.svg",
    title: "Calendar",
    subtitle: "Find all created events in your personnal calendar.",
  },
];

export default function Motivation() {
  return (
    <section className="py-14 bg-neutral-light-grayish-blue lg:py-24">
      <div className="container text-center lg:text-left">
        <div className="grid lg:grid-cols-2 mb-8 lg:mb-8">
          <div className="col-span-1">
            <h2 className="text-3xl lg:text-4xl text-primary-dark-blue pb-5">
              How does it work?
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-9 lg:gap-6 lg:grid-cols-4">
          {motivationItems.map((item, id) => (
            <div key={id} className="justify-center">
              <div className="flex justify-center lg:justify-start">
                <img src={item.iconPath} alt="" />
              </div>

              <h2 className="text-lg text-primary-dark-blue py-4 lg:pt-9 lg:pb-6 lg:text-xl lg:font-bold">
                {item.title}
              </h2>
              <p className="text-neutral-grayish-blue text-sm font-light lg:text-base leading-5">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
