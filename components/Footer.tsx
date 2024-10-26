import React from "react";
import Image from "next/image";
import githubLogo from '@/images/github.png'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerContent">
        <a href='https://github.com/sirethanator/everforest-web' target="_blank">
          <Image src={githubLogo} width={32} height={32}
        alt="Github logo" />
        </a>

        <p className="copyright">© 2024 Ethan M</p>
      </div>
    </div>
  )
}

