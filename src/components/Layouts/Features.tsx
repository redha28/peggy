import { HoverEffect } from "../Elements/CardHover";

export function Features() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Why Use Peggy Note?</h1>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}
export const projects = [
  {
    title: "Privacy & Sharing",
    description:
      "Users can create private notes for personal use or public notes that can be viewed by others, ensuring flexibility in content accessibility.",
  },
  {
    title: "User Accounts & Personalization",
    description:
      "Peggy Note supports user accounts, enabling personalized experiences with saved preferences, note organization, and easy access across multiple devices.",
  },
  {
    title: "Engagement with Likes",
    description:
      "Public notes can receive likes from other users, fostering interaction and recognition for valuable content within the community.",
  },
  {
    title: "Seamless and Secure Access",
    description:
      "With robust authentication and cloud storage integration, Peggy Note ensures seamless access to notes while maintaining top-notch security.",
  },
  {
    title: "Cross-Platform Compatibility",
    description:
      "Optimized for web and mobile devices, Peggy Note provides a responsive and intuitive user experience anytime, anywhere.",
  },
  {
    title: "Intuitive & Minimalist Design",
    description:
      "Designed with simplicity in mind, Peggy Note offers a distraction-free writing environment with an elegant and user-friendly interface.",
  },
];
