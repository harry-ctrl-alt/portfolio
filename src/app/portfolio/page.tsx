import Divider from "../components/divider";
import JobCard from "../components/jobCard";
import { Heading, Body } from "../components/text";

export default function Portfolio() {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <Heading bold>Portfolio</Heading>
        <Divider />

        <div className="flex flex-col gap-4">
          <JobCard
            title="Bulben."
            description="Bulben is a shipping estimation SAAS application that allows users to estimate efficient container solutions for their shipping needs."
            href="https://bulben-prototype-4sl3.vercel.app"
            image="/bulben2.png"
          />
          <JobCard
            title="GymPal"
            description="GymPal is a fitness application that helps users track their workouts, nutrition, and progress towards their fitness goals."
            href="https://gym-app-h1xo.vercel.app/"
            image="/gymbuddy.png"
          />
        </div>
      </div>
    </div>
  );
}
