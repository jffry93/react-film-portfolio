//Import Images
import athlete from './img/athlete-small.png';
import goodtimes from './img/goodtimes-small.png';
import theracer from './img/theracer-small.png';
import athlete2 from './img/athlete2.png';
import goodtimes2 from './img/good-times2.jpg';
import theracer2 from './img/the-racer2.jpg';

//VOUS BEAUTY CLINIC
import vbcdesktop from './img/projects/Vous/vbc-desktop.png';
import vbcmobile from './img/projects/Vous/iphonex783.png';
import vbcBrowser from './img/projects/Vous/vbc-shop-light.png';
import vbcIpad from './img/projects/Vous/vbc-ipad-930.png';
import vbcMain from './img/projects/Vous/vbcThumb.png';
//NATURES CANOPY HOUSE
import nchMain from './img/projects/NCH/nchThumb.webp';
//BAYRICH CONSTRUCTION
import bayrichMain from './img/projects/Bayrich/weird.jpg';
//MATTHEW DEL BEL BELLUZ
import mdbbMain from './img/projects/MDBB/mdbbThumb.jpg';
//SVG ICONS
import squarespaceIcon from './img/icons/squarespace-brands.svg';
import paintBrush from './img/icons/paint-brush.svg';
import crop from './img/icons/crop.svg';

const projectState = () => {
  return [
    {
      title: 'Bayrich Construction',
      secondaryTitle: 'Construction Website',
      thumbImg: bayrichMain,
      url: '/work/good-times',
      secondaryImg: goodtimes2,
      description:
        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'Matthew Del Bel Belluz',
      secondaryTitle: 'Actor Portfolio',
      thumbImg: mdbbMain,
      secondaryImg: athlete2,
      url: '/work/the-athlete',
      description:
        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
      secondDescription:
        'VOUS Beauty Clinic specializes in cosmetic treatments & solutions.Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      roles: [
        {
          iconFa: squarespaceIcon,
          title: 'Managed',
          description: 'Updated and maintained the Squarespace website.',
        },
        {
          iconFa: paintBrush,
          title: 'Integrated',
          description: 'Added custom features and styling.',
        },
        {
          iconFa: crop,
          title: 'Designed',
          description: 'Oversaw the website alignment, typography, UI design.',
        },
      ],

      icons: [
        // {
        //   title: 'HTML5',
        //   description:
        //     'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, ea.',
        //   linkUrl: 'https://www.w3.org/html/',
        // },
        {
          title: 'Less',
          description:
            'LESS is dynamic preprocessor style sheet language the Squarespace uses',
          linkUrl: 'https://lesscss.org/',
        },
        {
          title: 'JavaScript',
          description:
            'No website is complete without a bit of Vanilla Javascript',
          linkUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          title: 'Squarespace',
          description:
            'Created a custom website using the Squarespace platform',
          linkUrl:
            'https://www.squarespace.com/website-design/?channel=pbr&subchannel=go&campaign=pbr-dr-go-ca-en-squarespace-general-bmm&subcampaign=(brand-general_squarespaces_bmm)&&utm_source=google&utm_medium=pbr&utm_campaign=pbr-dr-go-ca-en-squarespace-general-bmm&utm_term=%2Bsquarespaces&gclid=Cj0KCQiA9OiPBhCOARIsAI0y71BWTQrHPzNlNAj3PLrK1YEnRFlPhD9T3zNybnHk4k4bu5YWFh_1UYMaAnxdEALw_wcB&gclsrc=aw.ds',
        },

        {
          title: 'npm',
          description:
            'Used npm to gain access to Glide.js and other libraries',
          linkUrl: 'https://glidejs.com/',
        },
      ],
      highlights: {
        title: 'Designing the shop category pages and product detail page',
        description: [
          {
            title: 'My Role',
            description: 'Utilized the sticky positioning on desktop view',
          },
          {
            title: 'My Role',
            description:
              'Used Glider.js to create a carousel with related products',
          },
        ],
      },
      colours: [
        {
          hexCode: '#7FADAA',
        },
        {
          hexCode: '#173633',
        },
        {
          hexCode: '#070707',
        },
      ],
      fonts: [
        {
          title: 'Primary',
          fontFamily: 'Bodoni Moda',
          fontWeight: '600',
          letterSpacing: '0.05em',
        },
        {
          title: 'Secondary',
          fontFamily: 'Quicksand',
          fontWeight: '300',
          letterSpacing: '0.02em',
        },
      ],
    },
    {
      title: 'Natures Canopy House',
      secondaryTitle: 'Cannabis Website',
      thumbImg: nchMain,
      mainImg: theracer,
      url: '/work/the-racer',
      secondaryImg: theracer2,
      description:
        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'VOUS Beauty Clinic',
      secondaryTitle: 'Cosmetics & Spa Website',
      url: [
        {
          title: 'Website',
          website: 'https://vousbeautyclinic.com/skincare',
        },
        {
          title: 'Github',
          website: 'https://vousbeautyclinic.com/skincare',
        },
      ],
      thumbImg: vbcMain,
      mainImg: vbcdesktop,
      secondaryImg: vbcmobile,
      browserImg: vbcBrowser,
      ipadImg: vbcIpad,
      description: 'Breif Summary of Project',
      secondDescription:
        'VOUS Beauty Clinic specializes in cosmetic treatments & solutions.Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      roles: [
        {
          iconFa: squarespaceIcon,
          title: 'Managed',
          description: 'Updated and maintained the Squarespace website.',
        },
        {
          iconFa: paintBrush,
          title: 'Integrated',
          description: 'Added custom features and styling.',
        },
        {
          iconFa: crop,
          title: 'Designed',
          description: 'Oversaw the website alignment, typography, UI design.',
        },
      ],

      icons: [
        // {
        //   title: 'HTML5',
        //   description:
        //     'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, ea.',
        //   linkUrl: 'https://www.w3.org/html/',
        // },
        {
          title: 'Less',
          description:
            'LESS is dynamic preprocessor style sheet language the Squarespace uses',
          linkUrl: 'https://lesscss.org/',
        },
        {
          title: 'JavaScript',
          description:
            'No website is complete without a bit of Vanilla Javascript',
          linkUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          title: 'Squarespace',
          description:
            'Created a custom website using the Squarespace platform',
          linkUrl:
            'https://www.squarespace.com/website-design/?channel=pbr&subchannel=go&campaign=pbr-dr-go-ca-en-squarespace-general-bmm&subcampaign=(brand-general_squarespaces_bmm)&&utm_source=google&utm_medium=pbr&utm_campaign=pbr-dr-go-ca-en-squarespace-general-bmm&utm_term=%2Bsquarespaces&gclid=Cj0KCQiA9OiPBhCOARIsAI0y71BWTQrHPzNlNAj3PLrK1YEnRFlPhD9T3zNybnHk4k4bu5YWFh_1UYMaAnxdEALw_wcB&gclsrc=aw.ds',
        },

        {
          title: 'npm',
          description:
            'Used npm to gain access to Glide.js and other libraries',
          linkUrl: 'https://glidejs.com/',
        },
      ],
      highlights: {
        title: 'Designing the shop category pages and product detail page',
        description: [
          {
            title: 'My Role',
            description: 'Utilized the sticky positioning on desktop view',
          },
          {
            title: 'My Role',
            description:
              'Used Glider.js to create a carousel with related products',
          },
        ],
      },
      colours: [
        {
          hexCode: '#7FADAA',
        },
        {
          hexCode: '#173633',
        },
        {
          hexCode: '#070707',
        },
      ],
      fonts: [
        {
          title: 'Primary',
          fontFamily: 'Bodoni Moda',
          fontWeight: '600',
          letterSpacing: '0.05em',
        },
        {
          title: 'Secondary',
          fontFamily: 'Quicksand',
          fontWeight: '300',
          letterSpacing: '0.02em',
        },
      ],
    },
  ];
};
export default projectState;
