import Link from "next/link";
import Image from "next/image";
import { oswald } from "@/app/layout";

export default function HeaderLogo() {
  return (
    <Link href="/">
      <div className="flex items-center">
        <span className="py-2 px-3">
          <Image
            src="/assets/image/header/kw_blue.jpg"
            alt="kwangwoon icon"
            height={40}
            width={141.641}
          />
        </span>
        <span
          className={`py-4 px-3 text-xl text-white ${oswald.className} font-normal`}
        >
          IDEA Lab
        </span>
      </div>
    </Link>
  );
}
