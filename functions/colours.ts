'use client'

let common = [
  [ 'fg',     '#D3C6AA', 'Foreground' ],
  [ 'red',    '#E67E80', 'Red'        ],
  [ 'orange', '#E69875', 'Orange'     ],
  [ 'yellow', '#DBBC7F', 'Yellow'     ],
  [ 'green',  '#A7C080', 'Green'      ],
  [ 'blue',   '#7FBBB3', 'Blue'       ],
  [ 'aqua',   '#83C092', 'Aqua'       ],
  [ 'purple', '#D699B6', 'Purple'     ]
]

let common2 = [
  [ 'gray0',  '#7A8478', 'Gray 0' ],
  [ 'gray1',  '#859289', 'Gray 1' ],
  [ 'gray2',  '#9DA9A0', 'Gray 2' ]
]

export function getHard() {
  let colours = [
    [ 'bg_dim',    '#1E2326', 'Background Dim'    ],
    [ 'bg0',       '#272E33', 'Background 0'      ],
    [ 'bg1',       '#2E383C', 'Background 1'      ],
    [ 'bg2',       '#374145', 'Background 2'      ],
    [ 'bg3',       '#414B50', 'Background 3'      ],
    [ 'bg4',       '#495156', 'Background 4'      ],
    [ 'bg5',       '#4F5B58', 'Background 5'      ],
    [ 'bg_red',    '#4C3743', 'Background Red'    ],
    [ 'bg_visual', '#493B40', 'Background Visual' ],
    [ 'bg_yellow', '#45443C', 'Background Yellow' ],
    [ 'bg_green',  '#3C4841', 'Background Green'  ],
    [ 'bg_blue',   '#384B55', 'Background Blue'   ]
  ];
  return common.concat(colours, common2)
};

export function getMed() {
  let colours = [
    [ 'bg_dim',    '#232A2E', 'Background Dim'    ],
    [ 'bg0',       '#2D353B', 'Background 0'      ],
    [ 'bg1',       '#343F44', 'Background 1'      ],
    [ 'bg2',       '#3D484D', 'Background 2'      ],
    [ 'bg3',       '#475258', 'Background 3'      ],
    [ 'bg4',       '#4F585E', 'Background 4'      ],
    [ 'bg5',       '#56635F', 'Background 5'      ],
    [ 'bg_red',    '#543A48', 'Background Red'    ],
    [ 'bg_visual', '#514045', 'Background Visual' ],
    [ 'bg_yellow', '#4D4C43', 'Background Yellow' ],
    [ 'bg_green',  '#425047', 'Background Green'  ],
    [ 'bg_blue',   '#3A515D', 'Background Blue'   ]
  ];
  return common.concat(colours, common2)
};

export function getSoft() {
  let colours = [
    [ 'bg_dim',    '#293136', 'Background Dim'    ],
    [ 'bg0',       '#333C43', 'Background 0'      ],
    [ 'bg1',       '#3A464C', 'Background 1'      ],
    [ 'bg2',       '#434F55', 'Background 2'      ],
    [ 'bg3',       '#4D5960', 'Background 3'      ],
    [ 'bg4',       '#555F66', 'Background 4'      ],
    [ 'bg5',       '#5D6B66', 'Background 5'      ],
    [ 'bg_red',    '#5C3F4F', 'Background Red'    ],
    [ 'bg_visual', '#59464C', 'Background Visual' ],
    [ 'bg_yellow', '#55544A', 'Background Yellow' ],
    [ 'bg_green',  '#48584E', 'Background Green'  ],
    [ 'bg_blue',   '#3F5865', 'Background Blue'   ]
  ];
  return common.concat(colours, common2)
};

export function getColours() {
  let contrast:string
  try { contrast = localStorage.getItem('contrast'); }
  catch { contrast = 'hard' };
  if (contrast === 'hard') { return getHard() };
  if (contrast === 'med') { return getMed() };
  if (contrast === 'soft') { return getSoft() }
  else { return getHard() };
};

let commonL = [
  [ 'fgL',     '#5C6A72', 'Foreground' ],
  [ 'redL',    '#F85552', 'Red'        ],
  [ 'orangeL', '#F57D26', 'Orange'     ],
  [ 'yellowL', '#DFA000', 'Yellow'     ],
  [ 'greenL',  '#8DA101', 'Green'      ],
  [ 'blueL',   '#3A94C5', 'Blue'       ],
  [ 'aquaL',   '#35A77C', 'Aqua'       ],
  [ 'purpleL', '#DF69BA', 'Purple'     ]
];

let commonL2 = [
  [ 'gray0L',  '#A6B0A0', 'Gray 0' ],
  [ 'gray1L',  '#939F91', 'Gray 1' ],
  [ 'gray2L',  '#829181', 'Gray 2' ]
];

export function getHardL() {
  let colours = [
    [ 'bg_dimL',    '#F2EFDF', 'Background Dim'    ],
    [ 'bg0L',       '#FFFBEF', 'Background 0'      ],
    [ 'bg1L',       '#F8F5E4', 'Background 1'      ],
    [ 'bg2L',       '#F2EFDF', 'Background 2'      ],
    [ 'bg3L',       '#EDEADA', 'Background 3'      ],
    [ 'bg4L',       '#E8E5D5', 'Background 4'      ],
    [ 'bg5L',       '#BEC5B2', 'Background 5'      ],
    [ 'bg_redL',    '#FFE7DE', 'Background Red'    ],
    [ 'bg_visualL', '#F0F2D4', 'Background Visual' ],
    [ 'bg_yellowL', '#FEF2D5', 'Background Yellow' ],
    [ 'bg_greenL',  '#F3F5D9', 'Background Green'  ],
    [ 'bg_blueL',   '#ECF5ED', 'Background Blue'   ]
  ];
  return commonL.concat(colours, commonL2)
};

export function getMedL() {
  let colours = [
    [ 'bg_dimL',    '#EFEBD4', 'Background Dim'    ],
    [ 'bg0L',       '#FDF6E3', 'Background 0'      ],
    [ 'bg1L',       '#F4F0D9', 'Background 1'      ],
    [ 'bg2L',       '#EFEBD4', 'Background 2'      ],
    [ 'bg3L',       '#E6E2CC', 'Background 3'      ],
    [ 'bg4L',       '#E0DCC7', 'Background 4'      ],
    [ 'bg5L',       '#BDC3AF', 'Background 5'      ],
    [ 'bg_redL',    '#FBE3DA', 'Background Red'    ],
    [ 'bg_visualL', '#EAEDC8', 'Background Visual' ],
    [ 'bg_yellowL', '#FAEDCD', 'Background Yellow' ],
    [ 'bg_greenL',  '#F0F1D2', 'Background Green'  ],
    [ 'bg_blueL',   '#E9F0E9', 'Background Blue'   ]
  ];
  return commonL.concat(colours, commonL2)
};

export function getSoftL() {
  let colours = [
    [ 'bg_dimL',    '#E5DFC5', 'Background Dim'    ],
    [ 'bg0L',       '#F3EAD3', 'Background 0'      ],
    [ 'bg1L',       '#EAE4CA', 'Background 1'      ],
    [ 'bg2L',       '#E5DFC5', 'Background 2'      ],
    [ 'bg3L',       '#DDD8BE', 'Background 3'      ],
    [ 'bg4L',       '#D8D3BA', 'Background 4'      ],
    [ 'bg5L',       '#B9C0AB', 'Background 5'      ],
    [ 'bg_redL',    '#F4DBD0', 'Background Red'    ],
    [ 'bg_visualL', '#E1E4BD', 'Background Visual' ],
    [ 'bg_yellowL', '#F1E4C5', 'Background Yellow' ],
    [ 'bg_greenL',  '#E5E6C5', 'Background Green'  ],
    [ 'bg_blueL',   '#E1E7DD', 'Background Blue'   ]
  ];
  return commonL.concat(colours, commonL2)
};

export function getColoursL() {
  let contrast:string
  try { contrast = localStorage.getItem('contrast'); }
  catch { contrast = 'hard' };
  if (contrast === 'hard') { return getHardL() };
  if (contrast === 'med') { return getMedL() };
  if (contrast === 'soft') { return getSoftL() }
  else { return getHardL() };
}

