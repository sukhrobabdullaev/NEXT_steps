import Image from "next/image";
import { roboto_mono } from "../fonts/font";
const Posts = () => {
  return (
    <div className="relative w-80 h-80">
      <h1 className={roboto_mono.className}>Posts </h1>
      <Image
        src="next.svg"
        alt="vercel logo"
        width={500}
        height={500}
        // style={{
        //   maxWidth: "100%",
        //   height: "auto",
        // }}
        placeholder="blur"
        blurDataURL="data:..."
        quality={100}
        layout="responsive"
      />
    </div>
  );
};

export default Posts;
