import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import twitter from '../../assets/icons/twitter.svg';

export default function Footer() {
  return (
    <footer>
      <div style={{ display: 'flex', gap: '2em', flexDirection: 'row', justifyContent: 'center' }}>
        <img src={facebook} alt='facebook' />
        <img src={instagram} alt='instagram' />
        <img src={linkedin} alt='linkedin' />
        <img src={twitter} alt='twitter' />
      </div>
      <p>Copyright ©2020 All rights reserved </p>
    </footer>
  )
}