import Image from "next/image";

const Posts = () => {
  return (
    <div className="relative w-80 h-80">
      <Image
        src="next.svg"
        alt="vercel logo"
        // width={300}
        // height={300}
        // style={{
        //   maxWidth: "100%",
        //   height: "auto",
        // }}
        fill
        placeholder="blur"
        blurDataURL="data:..."
        quality={100}
      />
    </div>
  );
};

export default Posts;
