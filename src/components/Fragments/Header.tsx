import { BookOpenText, Swords } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-5 text-4xl items-center">
        <span>
          <Swords className="text-yellow-500 size-10" />
        </span>
        <h1 className="text-primary-foreground">Study Quest</h1>
        <span>
          <BookOpenText className="text-yellow-500 size-10" />
        </span>
      </div>
      <p className="text-primary-foreground">
        Complete your homework quests and level up!
      </p>
    </div>
  );
};

export default Header;
