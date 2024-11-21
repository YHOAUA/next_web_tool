import { BookmarkMinus, TagIcon } from "lucide-react";

const FriendLinkSection = () => {
  return (
    <div className="px-4 py-4 ">
      <h4
        id="friendlink"
        className="text-lg font-medium mb-4 flex items-center"
      >
        <BookmarkMinus className="w-4 h-4 mr-2 -rotate-90" />
        友情链接
      </h4>

      <div className="flex items-center gap-4 bg-white rounded-lg p-4 dark:bg-[#2c2e2f]">
        <a
          href="https://github.com"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs before:content-['•'] before:mr-1 hover:text-red-500 dark:text-white/80 dark:hover:text-white"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default FriendLinkSection;
