export type Language = "zh-TW" | "zh-CN" | "en"

export interface Translations {
  // Header
  header: {
    welcome: string
    logo: {
      main: string
      subtitle: string
    }
    nav: {
      home: string
      about: string
      news: string
      products: string
      contact: string
    }
  }
  // About Section
  about: {
    title: string
    subtitle: string
    tabs: {
      culture: string
      responsibility: string
    }
    culture: {
      title: string
      mission: string
      content: {
        paragraph1: string
        paragraph2: string
        paragraph3: string
      }
    }
    responsibility: {
      title: string
      sections: {
        title: string
        content: string
      }[]
    }
  }
  contact: {
    title: string
    subtitle: string
    addressTitle: string
    emailTitle: string
  }
  // Hero Section
  hero: {
    slides: {
      airSterilization: {
        title: string
        subtitle: string
        description: string
      }
      airPurifier: {
        title: string
        subtitle: string
        description: string
      }
      seasonalAppliances: {
        title: string
        subtitle: string
        description: string
      }
    }
    buttons: {
      learnMore: string
      certification: string
    }
  }
  // News Section
  news: {
    title: string
    subtitle: string
    items: {
      title: string
      excerpt: string
      category: string
    }[]
    moreNews: string
  }
  // Services Section
  services: {
    title: string
    subtitle: string
    items: {
      title: string
      description: string
    }[]
  }
  // Products Section
  products: {
    categories: {
      all: string
      freshAirAc: string
      sterilizingFreshAir: string
      airPurifiers: string
    }
    categoryTitles: {
      all: string
      airPurifiers: string
      sterilizingFreshAir: string
      freshAirAc: string
    }
    categoryDescriptions: {
      all: string
      airPurifiers: string
      sterilizingFreshAir: string
      freshAirAc: string
    }
    common: {
      backToHome: string
      keyFeatures: string
      specifications: string
      coverage: string
      power: string
      noise: string
      viewDetails: string
      contactSales: string
      needCustomSolutions: string
      customSolutionsDesc: string
      contactExperts: string
    }
    types: {
      airPurifier: string
      airSterilizer: string
      freshAirPurifier: string
      freshAirDehumidifier: string
      hunterAirConditioner: string
    }
    styles: {
      wallMounted: string
      ceilingMounted: string
      floorStanding: string
    }
    features: {
      hepaH13Filter: string
      uvSterilization: string
      smartControl: string
      lowNoise: string
      plasmaSterilization: string
      ozoneFree: string
      medicalGrade: string
      remoteControl: string
      dualModelOptions: string
      advancedFiltration: string
      energyEfficient: string
      compactDesign: string
      multipleCapacityOptions: string
      freshAirPurification: string
      ceilingInstallation: string
      highEfficiency: string
      wallInstallation: string
      freshAirExchange: string
      heatRecovery: string
      largeCapacity: string
      floorStanding: string
      professionalGrade: string
      highPerformance: string
      dualModelSeries: string
      wallMounting: string
      energySaving: string
      quietOperation: string
      threeInOneFunction: string
      dehumidification: string
      freshAir: string
      airPurification: string
      airConditioning: string
      virusElimination: string
    }
  }
  // Footer
  footer: {
    companyName: string
    description: string
    address: string
    email: string
    followUs: string
    copyright: string
    navTitles: {
      about: string
      news: string
    }
    links: {
      about: string[]
      news: string[]
    }
  }
}

export const translations: Record<Language, Translations> = {
  "zh-TW": {
    header: {
      welcome: "歡迎訪問BRI官方網站",
      logo: {
        main: "BRI 呼博士",
        subtitle: "呼吸健康的引領者",
      },
      nav: {
        home: "首頁",
        about: "關於我們",
        news: "新聞中心",
        products: "產品中心",
        contact: "聯繫我們",
      },
    },
    about: {
      title: "關於我們",
      subtitle: "致力於為全球用戶提供優質的空氣淨化解決方案",
      tabs: {
        culture: "企業文化",
        responsibility: "社會責任",
      },
      culture: {
        title: "企業文化",
        mission: "盡心净气，健康呼吸",
        content: {
          paragraph1:
            "我們秉承「盡心净气，健康呼吸」的企業使命，致力於為每一個家庭和工作場所創造潔淨、健康的空氣環境。這不僅是我們的產品理念，更是我們對社會的承諾和責任。",
          paragraph2:
            "「盡心」代表著我們對產品品質的執著追求，對技術創新的不懈努力，對客戶需求的用心聆聽。我們相信，只有用心做好每一個細節，才能為用戶帶來真正優質的產品體驗。",
          paragraph3:
            "「净气」體現了我們的專業領域和核心價值。通過先進的空氣淨化技術，我們致力於消除空氣中的有害物質，為用戶創造一個純淨、安全的呼吸環境，讓每一次呼吸都充滿健康與活力。",
        },
      },
      responsibility: {
        title: "社會責任",
        sections: [
          {
            title: "環境保護",
            content:
              "我們積極響應綠色發展理念，致力於研發節能環保的空氣淨化產品，減少對環境的影響，為建設美麗地球貢獻力量。",
          },
          {
            title: "公共健康",
            content:
              "關注公眾健康，推廣健康呼吸理念，通過優質產品和服務提升人們的生活品質，為構建健康社會做出積極貢獻。",
          },
          {
            title: "科技創新",
            content: "持續投入研發，推動空氣淨化技術創新，為行業發展注入新動力，引領健康科技發展方向。",
          },
          {
            title: "社會公益",
            content: "積極參與社會公益活動，關愛弱勢群體，支持教育事業，履行企業社會責任，回饋社會。",
          },
        ],
      },
    },
    contact: {
      title: "聯繫我們",
      subtitle: "我們期待與您建立聯繫，為您提供專業的空氣淨化解決方案",
      addressTitle: "公司地址",
      emailTitle: "電子郵箱",
    },
    hero: {
      slides: {
        airSterilization: {
          title: "殺毒新風系統",
          subtitle: "全屋空氣循環淨化",
          description: "高效殺菌過濾，智能新風換氣，24小時守護室內空氣健康",
        },
        airPurifier: {
          title: "空氣淨化器",
          subtitle: "深度淨化每一寸空氣",
          description: "多重過濾技術，去除PM2.5、甲醛、細菌，讓呼吸更安心",
        },
        seasonalAppliances: {
          title: "四季舒適家電",
          subtitle: "加濕器·暖風機·風扇",
          description: "加濕保濕、溫暖取暖、清涼送風，一年四季舒適生活",
        },
      },
      buttons: {
        learnMore: "瞭解產品",
        certification: "節能認證",
      },
    },
    news: {
      title: "新聞動態",
      subtitle: "及時瞭解「一帶一路」建設最新進展和重要資訊",
      items: [
        {
          title: "「一帶一路」倡議十周年：成就與展望",
          excerpt: "回顧十年來「一帶一路」建設取得的重大成就，展望未來發展前景和合作機遇。",
          category: "重要新聞",
        },
        {
          title: "中歐班列累計開行突破8萬列",
          excerpt: "中歐班列作為「一帶一路」建設的重要載體，為促進中歐貿易往來發揮了重要作用。",
          category: "交通物流",
        },
        {
          title: "數字絲綢之路建設取得新進展",
          excerpt: "在數字化轉型浪潮下，數字絲綢之路為各國數字經濟發展注入新動力。",
          category: "數字經濟",
        },
        {
          title: "綠色「一帶一路」合作成果豐碩",
          excerpt: "推進綠色發展理念，促進可持續發展，為全球環境治理貢獻中國智慧。",
          category: "綠色發展",
        },
      ],
      moreNews: "查看更多新聞",
    },
    services: {
      title: "合作領域",
      subtitle: "「一帶一路」建設堅持共商共建共享原則，推動各領域務實合作",
      items: [
        {
          title: "政策溝通",
          description: "加強政策對接，促進各國發展戰略協調配合，推動務實合作。",
        },
        {
          title: "設施聯通",
          description: "推進基礎設施建設，打通經濟發展的動脈，實現互聯互通。",
        },
        {
          title: "貿易暢通",
          description: "促進貿易投資便利化，消除貿易壁壘，推動經貿合作。",
        },
        {
          title: "資金融通",
          description: "深化金融合作，創新投融資模式，為項目建設提供資金支持。",
        },
        {
          title: "民心相通",
          description: "加強人文交流，增進相互瞭解，夯實合作的民意基礎。",
        },
        {
          title: "綠色發展",
          description: "堅持綠色發展理念，推動可持續發展，建設綠色絲綢之路。",
        },
      ],
    },
    products: {
      categories: {
        all: "全部產品",
        freshAirAc: "新風空調",
        sterilizingFreshAir: "殺毒新風",
        airPurifiers: "消殺空淨",
      },
      categoryTitles: {
        all: "全部空氣產品",
        airPurifiers: "消殺空淨產品",
        sterilizingFreshAir: "殺毒新風系統",
        freshAirAc: "新風空調產品",
      },
      categoryDescriptions: {
        all: "全面的空氣質量解決方案，為您打造健康呼吸環境",
        airPurifiers: "先進的空氣淨化和消殺解決方案，打造潔淨室內空氣",
        sterilizingFreshAir: "帶有殺毒技術的新風系統，提供健康通風解決方案",
        freshAirAc: "集成新風和淨化功能的空調系統",
      },
      common: {
        backToHome: "返回首頁",
        keyFeatures: "核心特性",
        specifications: "技術參數",
        coverage: "適用面積",
        power: "功率",
        noise: "噪音",
        viewDetails: "查看詳情",
        contactSales: "聯繫銷售",
        needCustomSolutions: "需要定制解決方案？",
        customSolutionsDesc: "我們的專家可以幫助您選擇適合特定需求的空氣淨化系統。",
        contactExperts: "聯繫我們的專家",
      },
      types: {
        airPurifier: "空氣淨化器",
        airSterilizer: "空氣消毒機",
        freshAirPurifier: "淨化新風機",
        freshAirDehumidifier: "新風淨化除濕一體機",
        hunterAirConditioner: "獵毒空氣機",
      },
      styles: {
        wallMounted: "壁掛式",
        ceilingMounted: "吊頂式",
        floorStanding: "立櫃式",
      },
      features: {
        hepaH13Filter: "HEPA H13過濾網",
        uvSterilization: "紫外線殺菌",
        smartControl: "智能控制",
        lowNoise: "靜音運行",
        plasmaSterilization: "等離子殺菌",
        ozoneFree: "無臭氧",
        medicalGrade: "醫用級別",
        remoteControl: "遙控操作",
        dualModelOptions: "雙型號可選",
        advancedFiltration: "高效過濾",
        energyEfficient: "節能環保",
        compactDesign: "緊湊設計",
        multipleCapacityOptions: "多種風量可選",
        freshAirPurification: "新風+淨化",
        ceilingInstallation: "吊頂安裝",
        highEfficiency: "高效淨化",
        wallInstallation: "壁掛安裝",
        freshAirExchange: "新風換氣",
        heatRecovery: "熱回收",
        largeCapacity: "大風量",
        floorStanding: "立櫃式",
        professionalGrade: "專業級",
        highPerformance: "高性能",
        dualModelSeries: "雙系列型號",
        wallMounting: "壁掛安裝",
        energySaving: "節能省電",
        quietOperation: "靜音運行",
        threeInOneFunction: "三合一功能",
        dehumidification: "除濕功能",
        freshAir: "新風功能",
        airPurification: "空氣淨化",
        airConditioning: "空調制冷",
        virusElimination: "病毒消殺",
      },
    },
    footer: {
      companyName: "BRI 呼博仕(香港)有限公司",
      description: "致力於為全球用戶提供優質的空氣淨化解決方案",
      address: "香港九龍灣常悅道1號YHC大廈31樓",
      email: "info@briair.hk",
      followUs: "關注我們：",
      copyright: "© 2024 Belt and Road Initiative. 保留所有權利.",
      navTitles: {
        about: "關於我們",
        news: "新聞中心",
      },
      links: {
        about: ["企業文化", "社會責任"],
        news: ["活動資訊"],
      },
    },
  },
  "zh-CN": {
    header: {
      welcome: "欢迎访问BRI官方网站",
      logo: {
        main: "BRI 呼博士",
        subtitle: "呼吸健康的引领者",
      },
      nav: {
        home: "首页",
        about: "关于我们",
        news: "新闻中心",
        products: "产品中心",
        contact: "联系我们",
      },
    },
    about: {
      title: "关于我们",
      subtitle: "致力于为全球用户提供优质的空气净化解决方案",
      tabs: {
        culture: "企业文化",
        responsibility: "社会责任",
      },
      culture: {
        title: "企业文化",
        mission: "尽心净气，健康呼吸",
        content: {
          paragraph1:
            "我们秉承「尽心净气，健康呼吸」的企业使命，致力于为每一个家庭和工作场所创造洁净、健康的空气环境。这不仅是我们的产品理念，更是我们对社会的承诺和责任。",
          paragraph2:
            "「尽心」代表着我们对产品品质的执着追求，对技术创新的不懈努力，对客户需求的用心聆听。我们相信，只有用心做好每一个细节，才能为用户带来真正优质的产品体验。",
          paragraph3:
            "「净气」体现了我们的专业领域和核心价值。通过先进的空气净化技术，我们致力于消除空气中的有害物质，为用户创造一个纯净、安全的呼吸环境，让每一次呼吸都充满健康与活力。",
        },
      },
      responsibility: {
        title: "社会责任",
        sections: [
          {
            title: "环境保护",
            content:
              "我们积极响应绿色发展理念，致力于研发节能环保的空气净化产品，减少对环境的影响，为建设美丽地球贡献力量。",
          },
          {
            title: "公共健康",
            content:
              "关注公众健康，推广健康呼吸理念，通过优质产品和服务提升人们的生活品质，为构建健康社会做出积极贡献。",
          },
          {
            title: "科技创新",
            content: "持续投入研发，推动空气净化技术创新，为行业发展注入新动力，引领健康科技发展方向。",
          },
          {
            title: "社会公益",
            content: "积极参与社会公益活动，关爱弱势群体，支持教育事业，履行企业社会责任，回馈社会。",
          },
        ],
      },
    },
    contact: {
      title: "联系我们",
      subtitle: "我们期待与您建立联系，为您提供专业的空气净化解决方案",
      addressTitle: "公司地址",
      emailTitle: "电子邮箱",
    },
    hero: {
      slides: {
        airSterilization: {
          title: "杀毒新风系统",
          subtitle: "全屋空气循环净化",
          description: "高效杀菌过滤，智能新风换气，24小时守护室内空气健康",
        },
        airPurifier: {
          title: "空气净化器",
          subtitle: "深度净化每一寸空气",
          description: "多重过滤技术，去除PM2.5、甲醛、细菌，让呼吸更安心",
        },
        seasonalAppliances: {
          title: "四季舒适家电",
          subtitle: "加湿器·暖风机·风扇",
          description: "加湿保湿、温暖取暖、清凉送风，一年四季舒适生活",
        },
      },
      buttons: {
        learnMore: "了解产品",
        certification: "节能认证",
      },
    },
    news: {
      title: "新闻动态",
      subtitle: '及时了解"一带一路"建设最新进展和重要资讯',
      items: [
        {
          title: '"一带一路"倡议十周年：成就与展望',
          excerpt: '回顾十年来"一带一路"建设取得的重大成就，展望未来发展前景和合作机遇。',
          category: "重要新闻",
        },
        {
          title: "中欧班列累计开行突破8万列",
          excerpt: '中欧班列作为"一带一路"建设的重要载体，为促进中欧贸易往来发挥了重要作用。',
          category: "交通物流",
        },
        {
          title: "数字丝绸之路建设取得新进展",
          excerpt: "在数字化转型浪潮下，数字丝绸之路为各国数字经济发展注入新动力。",
          category: "数字经济",
        },
        {
          title: '绿色"一带一路"合作成果丰硕',
          excerpt: "推进绿色发展理念，促进可持续发展，为全球环境治理贡献中国智慧。",
          category: "绿色发展",
        },
      ],
      moreNews: "查看更多新闻",
    },
    services: {
      title: "合作领域",
      subtitle: '"一带一路"建设坚持共商共建共享原则，推动各领域务实合作',
      items: [
        {
          title: "政策沟通",
          description: "加强政策对接，促进各国发展战略协调配合，推动务实合作。",
        },
        {
          title: "设施联通",
          description: "推进基础设施建设，打通经济发展的动脉，实现互联互通。",
        },
        {
          title: "贸易畅通",
          description: "促进贸易投资便利化，消除贸易壁垒，推动经贸合作。",
        },
        {
          title: "资金融通",
          description: "深化金融合作，创新投融资模式，为项目建设提供资金支持。",
        },
        {
          title: "民心相通",
          description: "加强人文交流，增进相互了解，夯实合作的民意基础。",
        },
        {
          title: "绿色发展",
          description: "坚持绿色发展理念，推动可持续发展，建设绿色丝绸之路。",
        },
      ],
    },
    products: {
      categories: {
        all: "全部产品",
        freshAirAc: "新风空调",
        sterilizingFreshAir: "杀毒新风",
        airPurifiers: "消杀空净",
      },
      categoryTitles: {
        all: "全部空气产品",
        airPurifiers: "消杀空净产品",
        sterilizingFreshAir: "杀毒新风系统",
        freshAirAc: "新风空调产品",
      },
      categoryDescriptions: {
        all: "全面的空气质量解决方案，为您打造健康呼吸环境",
        airPurifiers: "先进的空气净化和消杀解决方案，打造洁净室内空气",
        sterilizingFreshAir: "带有杀毒技术的新风系统，提供健康通风解决方案",
        freshAirAc: "集成新风和净化功能的空调系统",
      },
      common: {
        backToHome: "返回首页",
        keyFeatures: "核心特性",
        specifications: "技术参数",
        coverage: "适用面积",
        power: "功率",
        noise: "噪音",
        viewDetails: "查看详情",
        contactSales: "联系销售",
        needCustomSolutions: "需要定制解决方案？",
        customSolutionsDesc: "我们的专家可以帮助您选择适合特定需求的空气净化系统。",
        contactExperts: "联系我们的专家",
      },
      types: {
        airPurifier: "空气净化器",
        airSterilizer: "空气消毒机",
        freshAirPurifier: "净化新风机",
        freshAirDehumidifier: "新风净化除湿一体机",
        hunterAirConditioner: "猎毒空气机",
      },
      styles: {
        wallMounted: "壁挂式",
        ceilingMounted: "吊顶式",
        floorStanding: "立柜式",
      },
      features: {
        hepaH13Filter: "HEPA H13过滤网",
        uvSterilization: "紫外线杀菌",
        smartControl: "智能控制",
        lowNoise: "静音运行",
        plasmaSterilization: "等离子杀菌",
        ozoneFree: "无臭氧",
        medicalGrade: "医用级别",
        remoteControl: "遥控操作",
        dualModelOptions: "双型号可选",
        advancedFiltration: "高效过滤",
        energyEfficient: "节能环保",
        compactDesign: "紧凑设计",
        multipleCapacityOptions: "多种风量可选",
        freshAirPurification: "新风+净化",
        ceilingInstallation: "吊顶安装",
        highEfficiency: "高效净化",
        wallInstallation: "壁挂安装",
        freshAirExchange: "新风换气",
        heatRecovery: "热回收",
        largeCapacity: "大风量",
        floorStanding: "立柜式",
        professionalGrade: "专业级",
        highPerformance: "高性能",
        dualModelSeries: "双系列型号",
        wallMounting: "壁挂安装",
        energySaving: "节能省电",
        quietOperation: "静音运行",
        threeInOneFunction: "三合一功能",
        dehumidification: "除湿功能",
        freshAir: "新风功能",
        airPurification: "空气净化",
        airConditioning: "空调制冷",
        virusElimination: "病毒消杀",
      },
    },
    footer: {
      companyName: "BRI 呼博仕(香港)有限公司",
      description: '致力于推进"一带一路"建设，促进全球互联互通，实现共同发展繁荣。',
      address: "香港九龙湾常悦道1号YHC大厦31楼",
      email: "info@briair.hk",
      followUs: "关注我们：",
      copyright: "© 2024 Belt and Road Initiative. 保留所有权利.",
      navTitles: {
        about: "关于我们",
        news: "新闻中心",
      },
      links: {
        about: ["企业文化", "社会责任"],
        news: ["活动资讯"],
      },
    },
  },
  en: {
    header: {
      welcome: "Welcome to BRI Official Website",
      logo: {
        main: "BRI Dr. Breath",
        subtitle: "Leader in Respiratory Health",
      },
      nav: {
        home: "Home",
        about: "About Us",
        news: "News Center",
        products: "Product Center",
        contact: "Contact Us",
      },
    },
    about: {
      title: "About Us",
      subtitle: "Committed to providing quality air purification solutions for global users",
      tabs: {
        culture: "Corporate Culture",
        responsibility: "Social Responsibility",
      },
      culture: {
        title: "Corporate Culture",
        mission: "Dedicated to Clean Air, Healthy Breathing",
        content: {
          paragraph1:
            "We uphold the corporate mission of 'Dedicated to Clean Air, Healthy Breathing', committed to creating clean and healthy air environments for every family and workplace. This is not only our product philosophy but also our commitment and responsibility to society.",
          paragraph2:
            "'Dedicated' represents our persistent pursuit of product quality, relentless efforts in technological innovation, and attentive listening to customer needs. We believe that only by carefully attending to every detail can we bring truly excellent product experiences to users.",
          paragraph3:
            "'Clean Air' embodies our professional field and core values. Through advanced air purification technology, we are committed to eliminating harmful substances in the air, creating a pure and safe breathing environment for users, making every breath full of health and vitality.",
        },
      },
      responsibility: {
        title: "Social Responsibility",
        sections: [
          {
            title: "Environmental Protection",
            content:
              "We actively respond to green development concepts, committed to developing energy-efficient and environmentally friendly air purification products, reducing environmental impact, and contributing to building a beautiful Earth.",
          },
          {
            title: "Public Health",
            content:
              "Focusing on public health, promoting healthy breathing concepts, improving people's quality of life through quality products and services, and making positive contributions to building a healthy society.",
          },
          {
            title: "Technological Innovation",
            content:
              "Continuously investing in R&D, promoting air purification technology innovation, injecting new momentum into industry development, and leading the direction of healthy technology development.",
          },
          {
            title: "Social Welfare",
            content:
              "Actively participating in social welfare activities, caring for vulnerable groups, supporting educational causes, fulfilling corporate social responsibility, and giving back to society.",
          },
        ],
      },
    },
    contact: {
      title: "Contact Us",
      subtitle: "We look forward to connecting with you and providing professional air purification solutions",
      addressTitle: "Company Address",
      emailTitle: "Email Address",
    },
    hero: {
      slides: {
        airSterilization: {
          title: "Air Sterilization Fresh Air System",
          subtitle: "Whole House Air Circulation Purification",
          description:
            "Efficient sterilization and filtration, intelligent fresh air ventilation, 24-hour protection of indoor air health",
        },
        airPurifier: {
          title: "Air Purifier",
          subtitle: "Deep Purification of Every Inch of Air",
          description:
            "Multi-layer filtration technology removes PM2.5, formaldehyde, and bacteria for safer breathing",
        },
        seasonalAppliances: {
          title: "Seasonal Comfort Appliances",
          subtitle: "Humidifier · Heater · Fan",
          description: "Humidification, warming, and cooling for comfortable living all year round",
        },
      },
      buttons: {
        learnMore: "Learn More",
        certification: "Energy Certification",
      },
    },
    news: {
      title: "News & Updates",
      subtitle:
        "Stay informed about the latest developments and important information on Belt and Road Initiative construction",
      items: [
        {
          title: "Belt and Road Initiative 10th Anniversary: Achievements and Prospects",
          excerpt:
            "Reviewing the major achievements of Belt and Road construction over the past decade and looking forward to future development prospects and cooperation opportunities.",
          category: "Important News",
        },
        {
          title: "China-Europe Railway Express Surpasses 80,000 Trips",
          excerpt:
            "As an important carrier of Belt and Road construction, China-Europe Railway Express has played a vital role in promoting China-Europe trade.",
          category: "Transportation & Logistics",
        },
        {
          title: "Digital Silk Road Construction Achieves New Progress",
          excerpt:
            "In the wave of digital transformation, the Digital Silk Road injects new momentum into the digital economic development of various countries.",
          category: "Digital Economy",
        },
        {
          title: "Green Belt and Road Cooperation Yields Fruitful Results",
          excerpt:
            "Promoting green development concepts and sustainable development, contributing Chinese wisdom to global environmental governance.",
          category: "Green Development",
        },
      ],
      moreNews: "View More News",
    },
    services: {
      title: "Cooperation Areas",
      subtitle:
        "Belt and Road construction adheres to the principle of extensive consultation, joint contribution and shared benefits, promoting practical cooperation in various fields",
      items: [
        {
          title: "Policy Coordination",
          description:
            "Strengthen policy alignment, promote coordination of national development strategies, and advance practical cooperation.",
        },
        {
          title: "Facilities Connectivity",
          description:
            "Promote infrastructure construction, open up economic development arteries, and achieve interconnectivity.",
        },
        {
          title: "Unimpeded Trade",
          description:
            "Promote trade and investment facilitation, eliminate trade barriers, and advance economic and trade cooperation.",
        },
        {
          title: "Financial Integration",
          description:
            "Deepen financial cooperation, innovate investment and financing models, and provide financial support for project construction.",
        },
        {
          title: "People-to-People Bonds",
          description:
            "Strengthen cultural exchanges, enhance mutual understanding, and consolidate the public opinion foundation for cooperation.",
        },
        {
          title: "Green Development",
          description:
            "Adhere to green development concepts, promote sustainable development, and build a green Silk Road.",
        },
      ],
    },
    products: {
      categories: {
        all: "All Products",
        freshAirAc: "Fresh Air AC",
        sterilizingFreshAir: "Sterilizing Fresh Air",
        airPurifiers: "Air Purifiers",
      },
      categoryTitles: {
        all: "All Air Quality Products",
        airPurifiers: "Air Purification Products",
        sterilizingFreshAir: "Sterilizing Fresh Air Systems",
        freshAirAc: "Fresh Air Air Conditioners",
      },
      categoryDescriptions: {
        all: "Comprehensive air quality solutions for healthy breathing environments",
        airPurifiers: "Advanced air purification and sterilization solutions for clean indoor air",
        sterilizingFreshAir: "Fresh air systems with sterilization technology for healthy ventilation",
        freshAirAc: "Air conditioning systems with integrated fresh air and purification",
      },
      common: {
        backToHome: "Back to Home",
        keyFeatures: "Key Features",
        specifications: "Specifications",
        coverage: "Coverage",
        power: "Power",
        noise: "Noise",
        viewDetails: "View Details",
        contactSales: "Contact Sales",
        needCustomSolutions: "Need Custom Solutions?",
        customSolutionsDesc:
          "Our experts can help you choose the right air purification system for your specific needs.",
        contactExperts: "Contact Our Experts",
      },
      types: {
        airPurifier: "Air Purifier",
        airSterilizer: "Air Sterilizer",
        freshAirPurifier: "Fresh Air Purifier",
        freshAirDehumidifier: "Fresh Air Dehumidifier",
        hunterAirConditioner: "Hunter Air Conditioner",
      },
      styles: {
        wallMounted: "Wall-mounted",
        ceilingMounted: "Ceiling-mounted",
        floorStanding: "Floor-standing",
      },
      features: {
        hepaH13Filter: "HEPA H13 Filter",
        uvSterilization: "UV Sterilization",
        smartControl: "Smart Control",
        lowNoise: "Low Noise",
        plasmaSterilization: "Plasma Sterilization",
        ozoneFree: "Ozone-free",
        medicalGrade: "Medical Grade",
        remoteControl: "Remote Control",
        dualModelOptions: "Dual Model Options",
        advancedFiltration: "Advanced Filtration",
        energyEfficient: "Energy Efficient",
        compactDesign: "Compact Design",
        multipleCapacityOptions: "Multiple Capacity Options",
        freshAirPurification: "Fresh Air + Purification",
        ceilingInstallation: "Ceiling Installation",
        highEfficiency: "High Efficiency",
        wallInstallation: "Wall Installation",
        freshAirExchange: "Fresh Air Exchange",
        heatRecovery: "Heat Recovery",
        largeCapacity: "Large Capacity",
        floorStanding: "Floor Standing",
        professionalGrade: "Professional Grade",
        highPerformance: "High Performance",
        dualModelSeries: "Dual Model Series",
        wallMounting: "Wall Mounting",
        energySaving: "Energy Saving",
        quietOperation: "Quiet Operation",
        threeInOneFunction: "3-in-1 Function",
        dehumidification: "Dehumidification",
        freshAir: "Fresh Air",
        airPurification: "Air Purification",
        airConditioning: "Air Conditioning",
        virusElimination: "Virus Elimination",
      },
    },
    footer: {
      companyName: "BRI Enterprise (Hong Kong) Co., Limited",
      description:
        "Committed to promoting Belt and Road construction, facilitating global connectivity, and achieving common development and prosperity.",
      address: "31/F, YHC Tower, 1 Sheung Yuet Road, Kowloon Bay",
      email: "info@briair.hk",
      followUs: "Follow Us:",
      copyright: "© 2024 Belt and Road Initiative. All rights reserved.",
      navTitles: {
        about: "About",
        news: "News",
      },
      links: {
        about: ["Culture", "Responsibility"],
        news: ["Events"],
      },
    },
  },
}

export function getTranslation(language: Language): Translations {
  return translations[language]
}
