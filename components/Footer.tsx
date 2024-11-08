import React from "react";
import Image from "next/image";
import githubLogo from '@/images/github.png'
import "@/styles/global/footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerContent">
        <a href='https://github.com/SirEthanator/Everforest-Web' target="_blank">
          <Image src={githubLogo} width={32} height={32}
        alt="Github logo" />
        </a>

        <p className="copyright">© Copyright 2024 Ethan M</p>
      </div>
    </div>
  )
}

