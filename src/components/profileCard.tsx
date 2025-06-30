import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import SocialLinks from "./socialLinks";
import { SubHeading, Body } from "./text";
import ContactItem from "./contactItem";

const ProfileCard = () => (
  <div className="flex flex-col items-center bg-neutral-900 rounded-2xl p-8 w-full gap-6 shadow-lg border border-neutral-600">
    <div className="flex flex-col items-center gap-2">
      <Image
        src="/portfolio-image.png"
        alt="Profile"
        width={200}
        height={150}
        className="rounded-2xl"
      />
      <SubHeading bold large className="mt-2">
        Harry Murray
      </SubHeading>
      <Body
        className="bg-neutral-800/80 px-2 py-[2px] rounded-md"
        textColour="text-blue-400"
      >
        Software Engineering Student
      </Body>
    </div>
    <div className="w-full h-[1px] bg-neutral-700 my-2" />
    <div className="flex flex-col gap-4 w-full items-center">
      <ContactItem
        icon={<Mail size={16} className="text-blue-400" />}
        label="Email"
        value="harrymurray088@gmail.com"
      />
      <ContactItem
        icon={<Phone size={16} className="text-blue-400" />}
        label="Phone"
        value="+44 7927 421491"
      />
      <ContactItem
        icon={<MapPin size={16} className="text-blue-400" />}
        label="Location"
        value="Belfast, UK"
      />
    </div>
    <div className="flex flex-row gap-3 mt-4">
      <SocialLinks />
    </div>
  </div>
);

export default ProfileCard;
