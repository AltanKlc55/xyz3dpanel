
import HomeOutline from 'mdi-material-ui/HomeOutline'
import PlayNetworkOutline from 'mdi-material-ui/PlayNetworkOutline';
import InformationOutline from 'mdi-material-ui/InformationOutline';
import CertificateOutline from 'mdi-material-ui/CertificateOutline';
import ShapeOutline from 'mdi-material-ui/ShapeOutline';
import PageNextOutline from 'mdi-material-ui/PageNextOutline';
import Printer3d from 'mdi-material-ui/Printer3d';
import CardAccountPhoneOutline from 'mdi-material-ui/CardAccountPhoneOutline';


const navigation = () => {
  return [
    {
      title: 'Selam...',
      icon: HomeOutline,
      path: '/'
    },
    {
      sectionTitle: 'Sayfalar'
    },
    {
      icon: PlayNetworkOutline,
      title: 'Anasayfa Sliders',
      path: '/sliders'
    },
    {
      icon: InformationOutline,
      title: 'Hakkımızda',
      path: '/hakkimizda'
    },
    {
      icon: CertificateOutline,
      title: 'Hizmetler',
      path: '/hizmetler'
    },
    {
      icon: ShapeOutline,
      title: 'Sektörler',
      path: '/sektorler'
    },
    {
      icon: PageNextOutline,
      title: 'Bloglar',
      path: '/blog'
    },
    {
      icon: Printer3d,
      title: 'Yazıcılarımız',
      path: '/yazicilarimiz'
    },
    {
      icon: CardAccountPhoneOutline,
      title: 'İletişim',
      path: '/iletisim'
    },
  ]
}

export default navigation
