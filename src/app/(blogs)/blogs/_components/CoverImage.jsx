import Image from "next/image";
import Link from "next/link";
import React from "react";

function CoveredImage({ coverImageUrl, title, slug }) {
  return (
    <div className="relative aspect-video">
      <Link href={`/blogs/${slug}`}>
      <Image
        src={coverImageUrl}
        alt={title}
        fill
        quality={90}
        className="object-cover object-center rounded-lg hover:scale-110 transition-all ease-out duration-300"
      />
      </Link>
    </div>
  );
}

export default CoveredImage;
