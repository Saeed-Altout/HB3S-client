import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="#" className="w-fit">
      <Image src="/logo.png" alt="Logo" width={70} height={50} />
    </Link>
  );
};
