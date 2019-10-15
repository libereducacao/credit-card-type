"use strict";

var cardTypes = {
  VISA: {
    niceType: "Visa",
    type: "VISA",
    patterns: [4],
    gaps: [4, 8, 12],
    lengths: [16, 18, 19],
    code: {
      name: "CVV",
      size: 3
    },
    mask: {
      numberMask: "#### #### #### ####",
      cvvMask: "###"
    }
  },
  MASTERCARD: {
    niceType: "Mastercard",
    type: "MASTERCARD",
    patterns: [[51, 55], [2221, 2229], [223, 229], [23, 26], [270, 271], 2720],
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
      name: "CVC",
      size: 3
    },
    mask: {
      numberMask: "#### #### #### ####",
      cvvMask: "###"
    }
  },
  AMEX: {
    niceType: "American Express",
    type: "AMEX",
    patterns: [34, 37],
    gaps: [4, 10],
    lengths: [15],
    code: {
      name: "CID",
      size: 4
    },
    mask: {
      numberMask: "#### ###### #####",
      cvvMask: "####"
    }
  },
  DINERS: {
    niceType: "Diners Club",
    type: "DINERS",
    patterns: [[300, 305], 36, 38, 39],
    gaps: [4, 10],
    lengths: [14, 16, 19],
    code: {
      name: "CVV",
      size: 3
    },
    mask: {
      numberMask: "#### ###### ####",
      cvvMask: "###"
    }
  },
  DISCOVER: {
    niceType: "Discover",
    type: "DISCOVER",
    patterns: [6011, [644, 649], 65],
    gaps: [4, 8, 12],
    lengths: [16, 19],
    code: {
      name: "CID",
      size: 3
    },
    mask: {
      numberMask: "#### #### #### ####",
      cvvMask: "###"
    }
  },
  JCB: {
    niceType: "JCB",
    type: "JCB",
    patterns: [2131, 1800, [3528, 3589]],
    gaps: [4, 8, 12],
    lengths: [16, 17, 18, 19],
    code: {
      name: "CVV",
      size: 3
    },
    mask: {
      numberMask: "#### #### #### ####",
      cvvMask: "###"
    }
  },
  UNIONPAY: {
    niceType: "UnionPay",
    type: "UNIONPAY",
    patterns: [
      620,
      [624, 626],
      [62100, 62182],
      [62184, 62187],
      [62185, 62197],
      [62200, 62205],
      [622010, 622999],
      622018,
      [622019, 622999],
      [62207, 62209],
      [622126, 622925],
      [623, 626],
      6270,
      6272,
      6276,
      [627700, 627779],
      [627781, 627799],
      [6282, 6289],
      6291,
      6292,
      810,
      [8110, 8131],
      [8132, 8151],
      [8152, 8163],
      [8164, 8171]
    ],
    gaps: [4, 8, 12],
    lengths: [14, 15, 16, 17, 18, 19],
    code: {
      name: "CVN",
      size: 3
    },
    mask: {
      numberMask: "#### #### #### ####",
      cvvMask: "###"
    }
  },
  MAESTRO: {
    niceType: "Maestro",
    type: "MAESTRO",
    patterns: [493698, [500000, 506698], [506779, 508999], [56, 59], 63, 67, 6],
    gaps: [4, 8, 12],
    lengths: [12, 13, 14, 15, 16, 17, 18, 19],
    code: {
      name: "CVC",
      size: 3
    },
    mask: {
      numberMask: "#### #### #### ####",
      cvvMask: "###"
    }
  },
  ELO: {
    niceType: "Elo",
    type: "ELO",
    patterns: [
      401178,
      401179,
      438935,
      457631,
      457632,
      431274,
      451416,
      457393,
      504175,
      [506699, 506778],
      [509000, 509999],
      627780,
      636297,
      636368,
      [650031, 650033],
      [650035, 650051],
      [650405, 650439],
      [650485, 650538],
      [650541, 650598],
      [650700, 650718],
      [650720, 650727],
      [650901, 650978],
      [651652, 651679],
      [655000, 655019],
      [655021, 655058]
    ],
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
      name: "CVE",
      size: 3
    },
    mask: {
      numberMask: "#### #### #### ####",
      cvvMask: "###"
    }
  },
  MIR: {
    niceType: "Mir",
    type: "MIR",
    patterns: [[2200, 2204]],
    gaps: [4, 8, 12],
    lengths: [16, 17, 18, 19],
    code: {
      name: "CVP2",
      size: 3
    },
    mask: {
      numberMask: "#### #### #### ####",
      cvvMask: "###"
    }
  },
  HIPER: {
    niceType: "Hiper",
    type: "HIPER",
    patterns: [637095, 637568, 637599, 637609, 637612],
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
      name: "CVC",
      size: 3
    },
    mask: {
      numberMask: "#### #### #### ####",
      cvvMask: "###"
    }
  },
  HIPERCARD: {
    niceType: "Hipercard",
    type: "HIPERCARD",
    patterns: [606282],
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
      name: "CVC",
      size: 3
    },
    mask: {
      numberMask: "#### #### #### ####",
      cvvMask: "###"
    }
  },
  UNKOWN: {
    niceType: "Unkown",
    type: "UNKOWN",
    patterns: [],
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
      name: "CVV",
      size: 3
    },
    mask: {
      numberMask: "#### #### #### ####",
      cvvMask: "###"
    }
  }
};

module.exports = cardTypes;
