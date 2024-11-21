'use client'

import React, {useEffect} from "react";
import Card from "@/components/Card";

let cards = [
  ['Vim', 'nf-fa-pen', 'https://github.com/sainnhe/everforest'],
  ['VS Code', 'nf-fa-pen', 'https://github.com/sainnhe/everforest-vscode'],
  ['Jetbrains', 'nf-fa-pen', 'https://github.com/francma/everforest-jetbrains'],
  ['Emacs', 'nf-fa-pen', 'https://github.com/Theory-of-Everything/everforest-emacs'],
  ['Doom Emacs', 'nf-fa-pen', 'https://github.com/Cardoso1994/doom-everforest-theme'],
  ['Replit', 'nf-fa-pen', 'https://replit.com/theme/@talwat321/everforest'],
  ['Textmate/Sublime Text', 'nf-fa-pen', 'https://github.com/mhanberg/everforest-textmate'],
  ['Micro', 'nf-fa-pen', 'https://github.com/atomashevic/everforest-micro'],
  ['Kakoune', 'nf-fa-pen', 'https://codeberg.org/jdugan6240/everforest.kak'],

  ['GTK', 'nf-md-palette_swatch_variant', 'https://github.com/Fausto-Korpsvart/Everforest-GTK-Theme'],
  ['Kvantum', 'nf-md-palette_swatch_variant', 'https://github.com/SirEthanator/Hyprland-Dots/tree/main/.config/Kvantum/Everforest'],

  ['Visual Studio 2022', 'nf-fa-gear', 'https://github.com/ZachFranzen/Everforest'],
  ['Gnome Builder', 'nf-fa-gear', 'https://github.com/n1yn/everforest-gnome-builder'],

  ['Alacritty', 'nf-dev-terminal', 'https://gist.github.com/sainnhe/6432f83181c4520ea87b5211fed27950'],
  ['Kitty', 'nf-dev-terminal', 'https://github.com/bgrnwd/everforest-kitty'],
  ['Xfce4 Terminal', 'nf-dev-terminal', 'https://github.com/toabr/everforest-xfce4-terminal'],
  ['Windows Terminal', 'nf-dev-terminal', 'https://gist.github.com/suppayami/7d427d116b97564d1c565a7aed092d08'],
  ['Wezterm', 'nf-dev-terminal', 'https://github.com/frdwin/everforest-for-wezterm'],
  ['Tillix', 'nf-dev-terminal', 'https://github.com/spacefall/everforest-tilix'],
  ['MobaXterm', 'nf-dev-terminal', 'https://gist.github.com/broot5/1d9d5ea97ef6e7cf48a31bd45e47e771'],
  ['Konsole', 'nf-dev-terminal', 'https://store.kde.org/c/1638326'],
  ['iTerm2', 'nf-dev-terminal', 'https://github.com/icewind/everforest.iterm2'],
  ['Hyper', 'nf-dev-terminal', 'https://github.com/tani/hyper-everforest'],
  ['Foot', 'nf-dev-terminal', 'https://gist.github.com/jakesco/c9b11f362f4ae0251ba2ca99a4e1e005'],
  ['Gnome Terminal', 'nf-dev-terminal', 'https://github.com/em3n/Everforest-GnomeTerminal'],

  ['Firefox', 'nf-fa-globe', 'https://addons.mozilla.org/en-US/firefox/addon/everforest-dark-official/'],
  ['Chrome', 'nf-fa-globe', 'https://github.com/talwat/dotfiles/tree/main/macOS/everforest/chrome/everforest'],

  ['Alfred', 'nf-fa-search', 'https://github.com/mhanberg/everforest-alfred'],
  ['Cursors', 'nf-md-cursor_default', 'https://github.com/talwat/everforest-cursors'],
  ['Insomnia', 'nf-fa-gear', 'https://github.com/talwat/insomnia-plugin-everforest-theme'],
  ['i3', 'nf-linux-i3', 'https://github.com/3rfaan/dotfiles/blob/main/i3/config'],
  ['Gitea', 'nf-linux-gitea', 'https://git.sainnhe.dev/sainnhe/gitea-themes'],
  ['KDE Plasma', 'nf-linux-kde_plasma', 'https://github.com/Serge2702/KDE-Everforest'],
  ['Obsidian', 'nf-fa-pen', 'https://github.com/kepano/obsidian-minimal/releases/tag/5.2.8'],
  ['Polybar', 'nf-fa-cube', 'https://github.com/3rfaan/dotfiles/blob/main/polybar/config.ini'],
  ['Redlib', 'nf-fa-reddit', 'https://github.com/isaac-8601/redlib-everforest'],
  ['SearXNG', 'nf-fa-search', 'https://github.com/isaac-8601/searxng-everforest'],
  ['Slack', 'nf-fa-comments', 'https://github.com/itendtostare/everforest-slack'],
  ['tmux', 'nf-dev-terminal', 'https://github.com/talwat/dotfiles/blob/main/macOS/everforest/.tmux.conf'],
  ['tmux plugin', 'nf-dev-terminal', 'https://github.com/TanglingTreats/tmux-everforest'],
  ['Xresources', 'nf-linux-xorg', 'https://github.com/jef/everforest-xresources'],
  ['Zathura', 'nf-md-file_document', 'https://git.sr.ht/~maksim/zathura-everforest'],
  ['Zellij', 'nf-dev-terminal', 'https://github.com/n1yn/everforest-dark-zellij'],
  ['Zsh', 'nf-dev-terminal', 'https://github.com/sainnhe/dotfiles/tree/master/.zsh-theme']
]

cards.sort(sort2D)  // Alphabetical order

function sort2D(a, b) {
  if (a[0] === b[0]) {
    return 0;
  }
  else {
    return (a[0] < b[0]) ? -1 : 1;
  }
}

let components = []
for (let i = 0; i<cards.length; i++) {
  components.push(
    <Card
      key={i}
      page='ports'
      title={cards[i][0]}
      icon={cards[i][1]}
      desc=''
      link={cards[i][2]}
      linkText='Repository'
      newTab
    />
  )
}

function hideCards(searchinput) {
  let portsCards, i, e, title:string, titleLower:string

  portsCards = document.querySelectorAll('.portsCardWrapper');
  for (i=0; i<portsCards.length;i++) {
    e = portsCards[i];
    title = e.firstChild.children[1].innerText;
    titleLower = title.toLowerCase()

    if ((titleLower.includes(searchinput.toLowerCase())) || (searchinput === '')) {
      e.style = ''
    } else {
      e.style = 'display: none'
    }
  }
}

var timeoutID
export default function PortsCards() {

  useEffect (() => {  // Start search handling on page load
    var searchbar = document.getElementById('searchbar') as HTMLInputElement;
    var searchinput = ''

    searchbar.addEventListener("keyup", () => {  // listen for keypress
      if (typeof timeoutID !== 'undefined') {
        clearTimeout(timeoutID);
      }
      timeoutID = setTimeout(() => {
        searchinput = `${searchbar.value}`;
        hideCards(searchinput)
      }, 300)
    });
  })

  return (
    <div className='portsContent'>

      <div className="searchContainer">
        <i className="nf nf-fa-search searchIcon"></i>
        <input id='searchbar' type="text" placeholder="Search Ports..." />
      </div>

      <div className='portsCards'>
        {components}
      </div>

    </div>
  )
}
