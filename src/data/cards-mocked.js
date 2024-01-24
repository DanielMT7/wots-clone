// O maior problema em mockar o dados e não conseguir pegar as imagens através das url.

// Artista: Veigh
import veigh from '../assets/images/Veigh/veigh.jpg'
import veighProfile from '../assets/images/Veigh/veighProfile.jpg'
import regata from '../assets/images/Veigh/regata.jpg'
import invicta from '../assets/images/Veigh/invicta.jpg'
import jordan from '../assets/images/Veigh/jordan.png'
import jacket from '../assets/images/Veigh/jacket.avif'
import calca from '../assets/images/Veigh/calca.avif'

// Artista: Tokio DK
import tokio from '../assets/images/TokioDK/tokiodk.avif'
import tokioProfile from '../assets/images/TokioDK/tokiodkProfile.avif'
import tokioCap from '../assets/images/TokioDK/cap.avif'
import tokioBag from '../assets/images/TokioDK/bag.avif'
import tokioSneaker from '../assets/images/TokioDK/sneaker.avif'
import tokioTshirt from '../assets/images/TokioDK/tshirt.avif'
import tokioPants from '../assets/images/TokioDK/pants.avif'

// Artista: Derek
import derek from '../assets/images/Derek/derek.avif'
import derekProfile from '../assets/images/Derek/derekProfile.avif'
import derekPants from '../assets/images/Derek/pants.avif'
import derekSneaker from '../assets/images/Derek/sneaker.avif'
import derekSunglasses from '../assets/images/Derek/sunglasses.avif'
import derekJacket from '../assets/images/Derek/jacket.avif'

const artists = [
  {
    outfitImage: [veigh, derek, tokio],
    profileImage: veighProfile,
    nickName: 'Veigh',
    date: 'October 1, 2023',
    clothes: [
      {
        id: 1,
        image: jacket,
        brand: 'Versace',
        clotheName: 'Versace Allover Jacket',
        price: 15600,
        buyAt:
          'https://www.versace.com/br/en/men/clothing/jackets-coats/jackets/versace-allover-jacket/1011032-1A07734_2UL90.html'
      },
      {
        id: 2,
        image: regata,
        brand: 'High',
        clotheName: 'Regata High Tank Top Pack White',
        price: 279
      },
      {
        id: 3,
        image: calca,
        brand: 'Versace',
        clotheName: 'Versace Allover Regular-fit Jeans',
        price: 7750
      },
      {
        id: 4,
        image: jordan,
        brand: 'Nike',
        clotheName: 'Air Jordan 1 MID SE Ice Blue',
        price: 1500
      },
      {
        id: 5,
        image: invicta,
        brand: 'Invicta',
        clotheName: 'Invicta Reserve S1 Rally Diablo',
        price: 4730
      }
    ]
  },
  {
    outfitImage: [tokio, veigh, derek],
    profileImage: tokioProfile,
    nickName: 'Tokio DK',
    date: 'September 27, 2023',
    clothes: [
      {
        id: 6,
        image: tokioCap,
        brand: 'Louis Vuitton',
        clotheName: 'Bone LV Day Soo Noir',
        price: 3800
      },
      {
        id: 7,
        image: tokioTshirt,
        brand: 'Moncler',
        clotheName: 'Lettering Logo T-shirt Black',
        price: 2689
      },
      {
        id: 8,
        image: tokioBag,
        brand: 'Moncler',
        clotheName: 'Khaki Durance Belt Bag',
        price: 6500
      },
      {
        id: 9,
        image: tokioSneaker,
        brand: 'Nike',
        clotheName: 'Air Force 1 Low White',
        price: 800
      },
      {
        id: 10,
        image: tokioPants,
        brand: 'High',
        clotheName: 'Calça Jeans High Co G90',
        price: 489
      }
    ]
  },
  {
    outfitImage: [derek, veigh, tokio],
    profileImage: derekProfile,
    nickName: 'Derek',
    date: 'September 23, 2023',
    clothes: [
      {
        id: 11,
        image: derekSunglasses,
        brand: 'Bottega Veneta',
        clotheName: 'Sunglasses Bv1086s Wraparound Black',
        price: 3300
      },
      {
        id: 12,
        image: derekJacket,
        brand: 'Palm Angels',
        clotheName: 'Logo-print Track Jacket',
        price: 3012
      },
      {
        id: 13,
        image: derekPants,
        brand: 'Palm Angels',
        clotheName: 'Palm Angels logo-print Track Pants',
        price: 7750
      },
      {
        id: 14,
        image: derekSneaker,
        brand: 'Bapesta ',
        clotheName: 'A Bathing Ape Bape Sta Pastel Pink',
        price: 2500
      }
    ]
  }
]

export default artists
